<script lang="ts">
	import type { NSTripLeg } from '../../server/types/ns/trips';
	import { formatDuration } from '../../util/datetime';
	import IconTrain from 'virtual:icons/material-symbols/train-outline';
	import IconBottom from 'virtual:icons/material-symbols/keyboard-arrow-down';
	import IconTop from 'virtual:icons/material-symbols/keyboard-arrow-up';
	import LegStop from '../atoms/LegStop.svelte';
	import { fade, fly } from 'svelte/transition';

	export let leg: NSTripLeg;

	let showDetails = false;

	$: duration = Math.floor(
		(new Date(leg.destination.plannedDateTime).getTime() -
			new Date(leg.origin.plannedDateTime).getTime()) /
			1000 /
			60
	);

	function toggle() {
		showDetails = !showDetails;
	}
</script>

<div class="leg-details">
	<div class="leg-icon">
		<IconTrain />
	</div>
	<div>
		<div>{leg.product.displayName} {leg.name}</div>
		<div>{leg.stops.length} stops</div>
		<div>direction {leg.destination.name}</div>
	</div>
	<span style="flex: 1" />
	<div class="duration">{formatDuration(duration)}</div>
	<button class="toggle" on:click={toggle}
		>Details
		{#if showDetails}
			<IconTop />
		{:else}
			<IconBottom />
		{/if}
	</button>
</div>
{#if showDetails}
	<div class="leg-stops" transition:fly={{ y: -50, duration: 200 }}>
		<div>{leg.crowdForecast}</div>
		{#each leg.stops as stop}
			<LegStop {stop} />
		{/each}
	</div>
{/if}

<style lang="scss">
	.leg-details {
		display: flex;
		padding: 12px;
		gap: 12px;

		align-items: center;
	}

	.leg-icon {
		font-size: 24px;
	}

	.leg-stops {
		margin: 12px;
		background: var(--nse-background20);
		border-radius: 12px;
	}

	.toggle {
		outline: none;
		background: inherit;
		border: 1px solid var(--nse-border); //var(--nse-background100);

		padding: 12px;
		border-radius: 12px;

		font: inherit;
		color: inherit;

		vertical-align: middle;
		text-align: center;

		display: inline-flex;
		align-items: center;

		cursor: pointer;
		transition: color 200ms ease;

		&:hover {
			color: var(--nse-primary);
		}
	}
</style>
