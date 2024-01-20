<script lang="ts">
	import type { HTMLInputAttributes } from 'svelte/elements';

	interface $$Props extends HTMLInputAttributes {
		value: string;
	}

	export let value = '';
</script>

<input class="input" bind:value on:input {...$$restProps} />

<style lang="scss">
	.input {
		font: inherit;

		width: 100%;
		border-radius: 8px;
		outline: none;
		border: none;

		background: var(--nse-background10);
		color: inherit;

		border-bottom: 2px solid transparent;

		padding: 1rem;

		&:focus {
			border-bottom: 2px solid var(--nse-primary);
			border-bottom-left-radius: 0;
			border-bottom-right-radius: 0;
		}

		&::placeholder {
			opacity: 0.6;
			font-weight: 300;
		}
	}
</style>
