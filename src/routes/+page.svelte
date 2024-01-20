<script>
	import Button from '$lib/components/atoms/Button.svelte';
	import Input from '$lib/components/atoms/Input.svelte';
	import StationInput from '$lib/components/organisms/StationInput.svelte';
	import Favorites from './Favorites.svelte';
	import Timetables from './Timetables.svelte';

	let stationFrom = '';
	let stationTo = '';
</script>

<div class="landing">
	<h2>Hello, where do you want to go?</h2>

	<div class="form">
		<StationInput placeholder="From..." bind:value={stationFrom} />
		<StationInput placeholder="To..." bind:value={stationTo} />
	</div>

	<div class="controls">
		<Button>Search</Button>
	</div>

	<div class="offergrid">
		<Favorites />
		<Timetables />
	</div>
</div>

<style lang="scss">
	.landing {
		padding-left: 2rem;

		max-width: 900px;
		margin: auto;
	}

	.controls {
		margin: 1rem 0;
	}

	h2 {
		font-size: 200%;
	}

	.form {
		display: flex;
		gap: 10px;
	}

	.offergrid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 16px;

		margin-top: 4rem;
	}
</style>
