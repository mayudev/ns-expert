<script lang="ts">
	import type { HTMLButtonAttributes } from 'svelte/elements';

	interface Props extends HTMLButtonAttributes {
		primary?: boolean;
		wide?: boolean;
		icon?: boolean;
		children?: import('svelte').Snippet;
	}

	let { primary = false, wide = false, icon = false, children, onclick, ...rest }: Props = $props();
</script>

<button class="btn" class:icon class:primary class:wide {onclick} {...rest}>
	{@render children?.()}
</button>

<style lang="scss">
	.btn {
		display: inline-flex;
		align-items: center;
		justify-content: center;

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

		&:enabled:hover {
			color: var(--nse-primary);
		}

		&:disabled {
			opacity: 0.5;
			cursor: not-allowed;
		}
	}

	.primary {
		background: var(--nse-primary100);

		&:enabled:hover {
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
