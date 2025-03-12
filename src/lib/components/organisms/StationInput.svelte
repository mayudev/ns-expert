<script lang="ts">
	import type { HTMLInputAttributes } from 'svelte/elements';
	import Input from '../atoms/Input.svelte';
	import type { Station } from '../../server/types/stations';
	import StationSuggestion from '../molecules/StationSuggestion.svelte';

	

	interface Props {
		value: string;
		innerValue: string;
		[key: string]: any
	}

	let { value = $bindable(''), innerValue = $bindable(''), ...rest }: Props = $props();

	let stations: Station[] = $state([]);
	let timer: number;
	let focusedStationIndex = $state(-1);

	async function fetchStations() {
		if (innerValue.length < 2) {
			stations = [];
			return;
		}
		const resp = await fetch('/api/stations/search?q=' + innerValue);
		const data = (await resp.json()) as Station[];

		focusedStationIndex = -1;
		stations = data;
	}

	function inputChange() {
		clearTimeout(timer);

		timer = setTimeout(fetchStations, 200);
	}

	function select(station: Station) {
		innerValue = station.name;
		value = station.code;
		stations = [];
	}

	function mouseover(index: number) {
		focusedStationIndex = index;
	}

	function keyDown(e: KeyboardEvent) {
		if (e.key === 'ArrowDown') {
			e.preventDefault();

			if (focusedStationIndex + 1 === stations.length) {
				focusedStationIndex = 0;
			} else {
				focusedStationIndex++;
			}
		} else if (e.key === 'ArrowUp') {
			e.preventDefault();

			if (focusedStationIndex === 0) {
				focusedStationIndex = stations.length - 1;
			} else {
				focusedStationIndex--;
			}
		} else if (e.key === 'Enter') {
			if (stations[focusedStationIndex]) {
				select(stations[focusedStationIndex]);
			}
		}
	}
</script>

<span class="container" onkeydown={keyDown} role="textbox" tabindex="-1">
	<Input bind:value={innerValue} on:input={inputChange} autocomplete="off" {...rest} />

	{#if stations}
		<div class="dropdown">
			{#each stations as station, i}
				<StationSuggestion
					{station}
					active={focusedStationIndex === i}
					onclick={() => select(station)}
					onmouseover={() => mouseover(i)}
				/>
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

		z-index: 10;
	}
</style>
