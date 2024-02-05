<script lang="ts">
	import type { NSTrip } from '../../server/types/ns/trips';
	import TripLeg from './TripLeg.svelte';

	export let trip: NSTrip;
</script>

<div class="details">
	{#each trip.legs as leg}
		<TripLeg {leg} />
	{/each}
</div>

<style lang="scss">
	.details {
		margin: 12px;
	}
</style>
