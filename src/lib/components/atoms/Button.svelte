<script lang="ts">
	import type { HTMLButtonAttributes } from 'svelte/elements';

	interface $$Props extends HTMLButtonAttributes {
		icon?: boolean;
	}

	export let icon = false;
</script>

<button class="btn" class:icon on:click>
	<slot />
</button>

<style lang="scss">
	.btn {
		display: inline-block;
		width: 100%;

		font: inherit;
		outline: none;
		border: none;

		color: inherit;
		background: var(--nse-primary100);

		padding: 0.75rem 1.25rem;
		font-weight: 700;
		border-radius: 500px;

		transition: 200ms ease;
		cursor: pointer;

		&:hover {
			background: var(--nse-primary);
		}
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
