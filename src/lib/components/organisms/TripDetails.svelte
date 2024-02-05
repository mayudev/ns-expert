<script lang="ts">
	import type { NSTrip } from '../../server/types/ns/trips';
	import TripLeg from '../molecules/TripLeg.svelte';

	export let trip: NSTrip;
</script>

<div>
	{#each trip.legs as leg}
		<TripLeg {leg} />
	{/each}
</div>
