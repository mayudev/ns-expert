<script lang="ts">
	import type { NSTripLeg } from '../../server/types/ns/trips';
	import { formatDuration, formathhmm } from '../../util/datetime';

	export let leg: NSTripLeg;

	$: duration = Math.floor(
		(new Date(leg.destination.plannedDateTime).getTime() -
			new Date(leg.origin.plannedDateTime).getTime()) /
			1000 /
			60
	);
</script>

<div class="leg">
	<div class="fragment">
		<span class="time">{formathhmm(leg.origin.plannedDateTime)}</span>&nbsp;
		{leg.origin.name}
		<span style="flex: 1"></span>

		Track {leg.origin.plannedTrack}
	</div>
	<div class="train">
		<div>{leg.product.displayName} {leg.name}</div>
		<div>{leg.stops.length} stops</div>
		{formatDuration(duration)}
	</div>
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
		background: var(--nse-background100);
		padding: 12px;
		border-radius: 4px;

		display: flex;
		align-items: center;
	}

	.train {
		padding: 12px;
	}

	.time {
		font-size: 120%;
		font-weight: 700;
	}
</style>
