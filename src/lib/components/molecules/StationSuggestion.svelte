<script lang="ts">
	import type { Station } from '../../server/types/stations';
	import IconTrain from 'virtual:icons/material-symbols/train-outline';
	import { mapStationType } from '../../util/stations';
	import type { SvelteHTMLElements } from 'svelte/elements';

	interface Props extends Pick<SvelteHTMLElements['div'], 'onclick' | 'onmouseover'> {
		station: Station;
		active: boolean;
	}

	let { station, active, onclick, onmouseover }: Props = $props();
</script>

<div class="station" {onclick} {onmouseover} role="button" tabindex={0} class:active>
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
