<script lang="ts">
	import Button from '$lib/components/atoms/Button.svelte';
	import StationInput from '$lib/components/organisms/StationInput.svelte';
	import { DateInput } from 'date-picker-svelte';

	import IconArrows from 'virtual:icons/material-symbols/compare-arrows';
	import { search } from '../lib/stores/search';
	import { beforeNavigate } from '$app/navigation';
	import { searchLoading } from '$lib/stores/loading.svelte';
	import Spinner from '$lib/components/atoms/Spinner.svelte';

	const renderDate = new Date();

	function reverseDirections() {
		const from = $search.from;
		const fromRaw = $search.fromRaw;

		$search.from = $search.to;
		$search.to = from;

		$search.fromRaw = $search.toRaw;
		$search.toRaw = fromRaw;
	}

	let isoString = $derived($search.date.toISOString());

	function setTime(offset: number) {
		$search.date = new Date(Date.now() + offset * 60000);
	}

	beforeNavigate((navigation) => {
		if (navigation.to?.route.id === '/trip') {
			searchLoading.loading = true;
		}
	});
</script>

<div class="landing">
	<h2>Hello, where do you want to go?</h2>

	<form action="/trip">
		<div class="form">
			<StationInput
				placeholder="From..."
				bind:value={$search.from}
				bind:innerValue={$search.fromRaw}
			/>
			<span class="button">
				<Button type="button" icon title="Reverse directions" onclick={reverseDirections}>
					<IconArrows />
				</Button>
			</span>

			<StationInput placeholder="To..." bind:value={$search.to} bind:innerValue={$search.toRaw} />
			<input type="hidden" value={$search.from} name="stationFrom" />
			<input type="hidden" value={$search.to} name="stationTo" />
			<input type="hidden" value={isoString} name="dateTime" />
		</div>

		<div class="dates">
			<DateInput
				timePrecision="minute"
				format="yyyy-MM-dd HH:mm"
				min={renderDate}
				bind:value={$search.date}
			/>
			<Button type="button" onclick={() => setTime(0)}>Now</Button>
			<Button type="button" onclick={() => setTime(15)}>in 15 minutes</Button>
			<Button type="button" onclick={() => setTime(60)}>in 1 hour</Button>
		</div>

		<div class="controls">
			<Button primary wide disabled={$search.from === '' || $search.to === ''}
				>{#if searchLoading.loading}
					<Spinner />
				{:else}Search{/if}
			</Button>
		</div>
	</form>

	<div class="offergrid"></div>
</div>

<style lang="scss">
	.landing {
		padding-left: 2rem;

		max-width: 900px;
		margin: auto;
		margin-top: 10vh;
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
