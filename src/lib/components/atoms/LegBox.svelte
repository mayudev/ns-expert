<div class="legbox">
	<slot />
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
