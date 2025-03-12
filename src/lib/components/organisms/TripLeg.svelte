<script lang="ts">
	import type { NSTripLeg } from '../../server/types/ns/trips';
	import { formathhmm } from '../../util/datetime';
	import LegStops from '../molecules/LegStops.svelte';

	interface Props {
		leg: NSTripLeg;
	}

	let { leg }: Props = $props();
</script>

<div class="leg">
	<div class="fragment">
		<span class="time">{formathhmm(leg.origin.plannedDateTime)}</span>&nbsp;
		{leg.origin.name}
		<span style="flex: 1"></span>

		Track {leg.origin.plannedTrack}
	</div>
	<LegStops {leg} />
	<div class="fragment">
		<span class="time">{formathhmm(leg.destination.plannedDateTime)}</span>&nbsp;
		{leg.destination.name}
		<span style="flex: 1"></span>
		Track {leg.destination.plannedTrack}
	</div>
</div>

<style lang="scss">
	.leg {
		margin-bottom: 5px;
	}

	.fragment {
		background: var(--nse-background50);
		border: 1px solid var(--nse-border);

		padding: 12px;
		border-radius: 12px;

		display: flex;
		align-items: center;
	}

	.time {
		font-size: 120%;
		font-weight: 700;
	}
</style>
