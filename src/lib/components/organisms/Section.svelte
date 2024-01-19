<script lang="ts">
	export let title: string;
</script>

<section class="section">
	<div class="header">
		<slot name="icon" />
		<div class="title">{title}</div>
	</div>
	<div>
		<slot />
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
