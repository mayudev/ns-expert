<script lang="ts">
	import Button from '$lib/components/atoms/Button.svelte';
	import StationInput from '$lib/components/organisms/StationInput.svelte';
	import { DateInput } from 'date-picker-svelte';
	import Favorites from './Favorites.svelte';
	import Timetables from './Timetables.svelte';

	import IconArrows from 'virtual:icons/material-symbols/compare-arrows';

	let stationFrom = '';
	let stationTo = '';
	let stationFromRaw = '';
	let stationToRaw = '';
	let date = new Date();

	const renderDate = new Date();

	function reverseDirections() {
		const from = stationFrom;
		const fromRaw = stationFromRaw;

		stationFrom = stationTo;
		stationTo = from;

		stationFromRaw = stationToRaw;
		stationToRaw = fromRaw;
	}

	$: isoString = date.toISOString();

	function setTime(offset: number) {
		date = new Date(Date.now() + offset * 60000);
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
			<input type="hidden" value={stationTo} name="stationTo" />
			<input type="hidden" value={isoString} name="dateTime" />
		</div>

		<div class="dates">
			<DateInput
				timePrecision="minute"
				format="yyyy-MM-dd HH:mm"
				min={renderDate}
				bind:value={date}
			/>
			<Button type="button" on:click={() => setTime(0)}>Now</Button>
			<Button type="button" on:click={() => setTime(15)}>in 15 minutes</Button>
			<Button type="button" on:click={() => setTime(60)}>in 1 hour</Button>
		</div>

		<div class="controls">
			<Button primary wide>Search</Button>
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

	.controls,
	.dates {
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

	.dates {
		display: flex;
		justify-content: center;
		gap: 6px;
	}

	.offergrid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 16px;

		margin-top: 4rem;
	}
</style>
