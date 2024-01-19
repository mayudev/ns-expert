<script>
	import Input from '$lib/components/atoms/Input.svelte';

	let stationFrom = '';
	let stationTo = '';
</script>

<div class="landing">
	<h2>Hello, where do you want to go?</h2>

	<div class="form">
		<Input bind:value={stationFrom} placeholder="From..." />
		<Input bind:value={stationTo} placeholder="To..." />
	</div>
</div>

<style lang="scss">
	.landing {
		padding-left: 2rem;
	}

	h2 {
		font-size: 200%;
	}

	.form {
		display: flex;
		gap: 10px;
	}
</style>
