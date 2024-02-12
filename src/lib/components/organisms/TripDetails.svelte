<script lang="ts">
	import type { NSTrip } from '../../server/types/ns/trips';
	import { discount40, formatCents } from '../../util/currency';
	import TripLeg from './TripLeg.svelte';

	export let trip: NSTrip;
</script>

<div class="details">
	<div class="title">Trip details</div>
	{#each trip.legs as leg}
		<TripLeg {leg} />
	{/each}
	<div class="title">Pricing</div>
	<div class="prices">
		<div class="pricing">
			<div>Basic fare</div>
			<div class="price">{formatCents(trip.productFare.priceInCents)}</div>
		</div>
		<div class="pricing">
			<div>40% fare</div>
			<div class="price">{formatCents(discount40(trip.productFare.priceInCents))}</div>
		</div>
	</div>
</div>

<style lang="scss">
	.details {
		margin: 12px;
	}

	.title {
		font-size: 150%;
		margin-bottom: 16px;
		margin-top: 16px;
	}

	.pricing {
		display: inline-flex;
		flex-direction: column;

		gap: 4px;
	}

	.prices {
		display: grid;
		grid-template-columns: 1fr 1fr;
	}

	.price {
		font-size: 200%;
		font-weight: 700;
	}
</style>
