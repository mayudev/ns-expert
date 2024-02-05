<script lang="ts">
	import Trip from '../../lib/components/organisms/Trip.svelte';
	import TripDetails from '../../lib/components/organisms/TripDetails.svelte';
	import type { NSTrip } from '../../lib/server/types/ns/trips';

	export let data;

	let current: NSTrip | null = null;

	function show(trip: NSTrip) {
		current = trip;
	}
</script>

<div class="page">
	<div class="trips">
		{#each data.trips as trip}
			<Trip {trip} on:click={() => show(trip)} />
		{/each}
	</div>
	<div>
		{#if current}
			<TripDetails trip={current} />
		{/if}
	</div>
</div>

<style lang="scss">
	.page {
		@media screen and (min-width: 700px) {
			display: grid;
			grid-template-columns: 50% 50%;
		}

		@media screen and (min-width: 1200px) {
			display: grid;
			grid-template-columns: 30% 70%;
		}
	}
</style>
