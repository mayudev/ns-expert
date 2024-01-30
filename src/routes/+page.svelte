<script>
	import Button from '$lib/components/atoms/Button.svelte';
	import StationInput from '$lib/components/organisms/StationInput.svelte';
	import Favorites from './Favorites.svelte';
	import Timetables from './Timetables.svelte';

	import IconArrows from 'virtual:icons/material-symbols/compare-arrows';

	let stationFrom = '';
	let stationTo = '';
	let stationFromRaw = '';
	let stationToRaw = '';

	function reverseDirections() {
		const from = stationFrom;
		const fromRaw = stationFromRaw;

		stationFrom = stationTo;
		stationTo = from;

		stationFromRaw = stationToRaw;
		stationToRaw = fromRaw;
	}
</script>

<div class="landing">
	<h2>Hello, where do you want to go?</h2>

	<form action="/trip">
		<div class="form">
			<StationInput
				placeholder="From..."
				bind:value={stationFrom}
				bind:innerValue={stationFromRaw}
			/>
			<span class="button">
				<Button icon title="Reverse directions" on:click={reverseDirections}>
					<IconArrows />
				</Button>
			</span>

			<StationInput placeholder="To..." bind:value={stationTo} bind:innerValue={stationToRaw} />
			<input type="hidden" value={stationFrom} name="stationFrom" />
			<input type="hidden" value={stationTo} name="stationTo" />
		</div>

		<div class="controls">
			<Button>Search</Button>
		</div>
	</form>

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

	.button {
		flex-grow: 0;
		font-size: 1.5rem;
	}

	.controls {
		margin: 1rem 0;
	}

	h2 {
		font-size: 200%;
	}

	.form {
		display: flex;
		align-items: center;
		gap: 10px;
	}

	.offergrid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 16px;

		margin-top: 4rem;
	}
</style>
