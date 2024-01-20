<script lang="ts">
	import type { HTMLInputAttributes } from 'svelte/elements';
	import Input from '../atoms/Input.svelte';
	import type { Station } from '../../api/types/stations';
	import StationSuggestion from '../molecules/StationSuggestion.svelte';

	interface $$Props extends HTMLInputAttributes {
		value: string;
	}

	export let value = '';
	export let innerValue = '';

	let stations: Station[] = [];
	let timer: number;

	async function fetchStations() {
		const resp = await fetch('/api/stations/search?q=' + innerValue);
		const data = (await resp.json()) as Station[];

		stations = data;
	}

	function inputChange() {
		clearTimeout(timer);

		timer = setTimeout(fetchStations, 1000);
	}

	function select(station: Station) {
		innerValue = station.name;
		value = station.code;
		stations = [];
	}
</script>

<span class="container">
	<Input bind:value={innerValue} on:input={inputChange} {...$$restProps} />

	{#if stations}
		<div class="dropdown">
			{#each stations as station}
				<StationSuggestion {station} on:click={() => select(station)} />
			{/each}
		</div>
	{/if}
</span>

<style lang="scss">
	.container {
		width: 100%;
		position: relative;
	}

	.dropdown {
		position: absolute;
		overflow: hidden;

		background: var(--nse-background10);
		box-shadow: 0 1px 3px rgba(0, 0, 0, 0.24);

		border-radius: 12px;

		margin: 6px 0;

		right: 0;
		left: 0;
	}
</style>
