<script lang="ts">
	import type { Station } from '../../api/types/stations';
	import IconTrain from 'virtual:icons/material-symbols/train-outline';
	import { mapStationType } from '../../util/stations';

	export let station: Station;
</script>

<div class="station" on:click>
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

		&:hover {
			background: var(--nse-primary);
		}

		.name {
			font-weight: 700;
		}

		.description {
			font-size: 0.9rem;
		}
	}
</style>
