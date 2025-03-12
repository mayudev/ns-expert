<script lang="ts">
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>

<div class="legbox">
	{@render children?.()}
</div>

<style lang="scss">
	.legbox {
		border-radius: 6px;
		background: var(--nse-border);
		flex-grow: 1;

		display: flex;
		align-items: center;
		justify-content: center;

		text-align: center;
	}
</style>
