<script lang="ts">
	import type { NSIntermediaryStop } from '../../server/types/ns/trips';
	import { formathhmm } from '../../util/datetime';

	interface Props {
		stop: NSIntermediaryStop;
	}

	let { stop }: Props = $props();
</script>

<div class="stop">
	<div class="times">
		{#if stop.plannedArrivalDateTime}
			<div class="arrival">{formathhmm(stop.plannedArrivalDateTime)}</div>
		{/if}
		{#if stop.plannedDepartureDateTime}
			<div class="departure">{formathhmm(stop.plannedDepartureDateTime)}</div>
		{/if}
	</div>
	<div class="name">
		{stop.name}
	</div>
	<span style="flex: 1"></span>
	<div class="times">
		{#if stop.plannedArrivalTrack}
			<div class="arrival">Track {stop.plannedArrivalTrack}</div>
		{/if}
		{#if stop.plannedDepartureTrack}
			<div class="departure">Track {stop.plannedDepartureTrack}</div>
		{/if}
	</div>
</div>

<style lang="scss">
	.stop {
		padding: 8px;

		display: flex;
		gap: 12px;

		align-items: center;
	}

	.arrival {
		opacity: 0.6;
	}

	.departure {
		font-weight: 700;
	}
</style>
