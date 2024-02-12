<script lang="ts">
	import type { NSTrip } from '../../server/types/ns/trips';
	import { formatDuration, formathhmm } from '../../util/datetime';
	import LegBox from '../atoms/LegBox.svelte';
	import IconRight from 'virtual:icons/material-symbols/chevron-right-rounded';

	export let trip: NSTrip;

	$: from = trip.legs[0].origin;
	$: to = trip.legs[trip.legs.length - 1].destination;
	$: timeStart = formathhmm(from.plannedDateTime);
	$: timeEnd = formathhmm(to.plannedDateTime);
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="trip" on:click>
	<div class="left">
		<div class="top">
			<div class="place">{from.name}</div>
			<div class="place">{to.name}</div>
		</div>
		<div class="middle">
			<div class="time">
				{timeStart}
			</div>
			<div class="items">
				{#each trip.legs as leg}
					<LegBox>{leg.product.displayName}</LegBox>
				{/each}
			</div>
			<div class="time">
				{timeEnd}
			</div>
		</div>
		<div class="duration">
			{#if trip.legs.length === 1}
				<div class="badge">Direct</div>
				&nbsp;
			{/if}
			{formatDuration(trip.actualDurationInMinutes)}
		</div>
	</div>
	<button class="right">
		<IconRight />
	</button>
</div>

<style lang="scss">
	.trip {
		margin: 12px 6px;

		border-radius: 12px;

		background: var(--nse-background20);

		transition: background 200ms ease;
		cursor: pointer;

		display: flex;

		&:hover {
			background: var(--nse-background10);
		}

		&:hover > .right {
			color: var(--nse-primary);
		}
	}

	.left {
		flex-grow: 1;
		padding: 12px 0 12px 12px;
	}

	.right {
		all: unset;

		display: flex;
		align-items: center;
		justify-content: center;

		font-size: 32px;

		padding: 12px;

		transition: color 200ms ease;
	}

	.middle,
	.top {
		display: flex;
	}

	.top {
		justify-content: space-between;
		padding: 4px 0;
	}

	.items {
		flex-grow: 1;
		display: flex;
		gap: 12px;

		padding: 2px 10px;
	}

	.badge {
		background: var(--nse-primary);
		display: inline-block;
		padding: 4px 6px;
		border-radius: 150px;
	}

	.time {
		font-weight: 700;
		font-size: 140%;
	}

	.duration {
		padding-top: 8px;
	}
</style>
