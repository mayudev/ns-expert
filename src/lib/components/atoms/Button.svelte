<script lang="ts">
	import type { HTMLButtonAttributes } from 'svelte/elements';

	interface $$Props extends HTMLButtonAttributes {
		primary?: boolean;
		wide?: boolean;
		icon?: boolean;
	}

	export let icon = false;
	export let primary = false;
	export let wide = false;
</script>

<button class="btn" class:icon class:primary class:wide on:click {...$$restProps}>
	<slot />
</button>

<style lang="scss">
	.btn {
		display: inline-block;

		font: inherit;
		outline: none;
		border: none;

		color: inherit;

		padding: 0.75rem 1.25rem;
		font-weight: 700;

		border-radius: 6px;
		background: var(--nse-background100);

		transition: 200ms ease;
		cursor: pointer;

		&:hover {
			color: var(--nse-primary);
		}
	}

	.primary {
		background: var(--nse-primary100);

		&:hover {
			background: var(--nse-primary);
			color: inherit;
		}
	}

	.wide {
		width: 100%;
	}

	.icon {
		display: flex;
		align-items: center;
		justify-content: center;

		background: none;
		padding: 4px;

		&:hover {
			background: none;
			color: var(--nse-primary);
		}
	}
</style>
