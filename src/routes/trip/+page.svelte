<script lang="ts">
	import { afterNavigate } from '$app/navigation';
	import { searchLoading } from '$lib/stores/loading.svelte';
	import { fly } from 'svelte/transition';
	import Trip from '../../lib/components/organisms/Trip.svelte';
	import TripDetails from '../../lib/components/organisms/TripDetails.svelte';
	import type { NSTrip } from '../../lib/server/types/ns/trips';

	let { data } = $props();
	let current: NSTrip | null = $state(null);

	function show(trip: NSTrip) {
		current = trip;
	}

	afterNavigate(() => {
		searchLoading.loading = false;
	});
</script>

<div class="page" in:fly={{ y: 50, duration: 500 }}>
	<div class="trips">
		{#each data.trips as trip}
			<Trip {trip} onclick={() => show(trip)} />
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
