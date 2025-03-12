<script lang="ts">
	import { afterNavigate, beforeNavigate } from '$app/navigation';
	import Trip from '../../lib/components/organisms/Trip.svelte';
	import TripDetails from '../../lib/components/organisms/TripDetails.svelte';
	import type { NSTrip } from '../../lib/server/types/ns/trips';

	export let data;
	let current: NSTrip | null = null;

	function show(trip: NSTrip) {
		current = trip;
	}

	afterNavigate(() => {
		console.log("after navigate")
	})
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
		max-width: 1200px;
		margin: auto;

		@media screen and (min-width: 700px) {
			display: grid;
			grid-template-columns: 50% 50%;
		}

		@media screen and (min-width: 1200px) {
			display: grid;
			grid-template-columns: 40% 60%;
		}
	}
</style>
