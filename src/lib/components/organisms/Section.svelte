<script lang="ts">
	interface Props {
		title: string;
		icon?: import('svelte').Snippet;
		children?: import('svelte').Snippet;
	}

	let { title, icon, children }: Props = $props();
</script>

<section class="section">
	<div class="header">
		{@render icon?.()}
		<div class="title">{title}</div>
	</div>
	<div>
		{@render children?.()}
	</div>
</section>

<style lang="scss">
	.section {
		background: var(--nse-background20);

		border: 1px solid var(--nse-border);

		padding: 20px;
		border-radius: 12px;
	}

	.header {
		font-size: 1.5rem;
		height: 1.3em;

		gap: 8px;

		margin-bottom: 12px;

		display: flex;
		align-items: center;
		justify-content: center;
	}

	.title {
		font-size: 1.3rem;
		font-weight: 700;
	}
</style>
