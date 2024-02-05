<script lang="ts">
	import Trip from '../../lib/components/organisms/Trip.svelte';

	export let data;
</script>

<div class="page">
	<div class="trips">
		{#each data.trips as trip}
			<Trip {trip} />
		{/each}
	</div>
	<div></div>
</div>

<style lang="scss">
	.page {
		display: grid;
		grid-template-columns: 30% 70%;
	}
</style>
