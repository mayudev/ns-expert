<script lang="ts">
	import { createBubbler } from 'svelte/legacy';

	const bubble = createBubbler();
	import type { Station } from '../../server/types/stations';
	import IconTrain from 'virtual:icons/material-symbols/train-outline';
	import { mapStationType } from '../../util/stations';

	interface Props {
		station: Station;
		active: boolean;
	}

	let { station, active }: Props = $props();
</script>

<div class="station" onclick={bubble('click')} onmouseover={bubble('mouseover')} class:active>
	<IconTrain />
	<div class="right">
		<div class="name">{station.name}</div>
		<div class="description">{mapStationType(station.stationType)}</div>
	</div>
</div>

<style lang="scss">
	.station {
		padding: 12px 12px;

		overflow: hidden;
		background-clip: content-box;
		cursor: pointer;

		display: flex;
		gap: 8px;

		.name {
			font-weight: 700;
		}

		.description {
			font-size: 0.9rem;
		}
	}

	.active {
		background: var(--nse-primary);
	}
</style>
