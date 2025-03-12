<script lang="ts">
	import IconTrain from 'virtual:icons/material-symbols/train';
	import Section from '../lib/components/organisms/Section.svelte';
	import Input from '../lib/components/atoms/Input.svelte';
	import Button from '../lib/components/atoms/Button.svelte';

	let station = $state('');
</script>

<Section title="Timetables">
	{#snippet icon()}
		<IconTrain  />
	{/snippet}
	<Input bind:value={station} placeholder="Look for station..." />
	<div class="buttons">
		<Button>Departures</Button>
		<Button>Arrivals</Button>
	</div>
</Section>

<style lang="scss">
	.buttons {
		display: flex;
		gap: 12px;
		margin-top: 1rem;
	}
</style>
