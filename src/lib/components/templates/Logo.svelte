<script lang="ts">
	import { page } from '$app/state';
	import IconBack from 'virtual:icons/material-symbols/arrow-back-ios-new';

	const isNotRoot = $derived(page.route.id !== '/');
</script>

<div class="container">
	{#if isNotRoot}
		<IconBack />{/if}
	<div class="logo">
		<span class="row-first">expert</span>
		<span class="row-second">for NS</span>
	</div>
</div>

<style lang="scss">
	.container {
		display: flex;
		align-items: center;
		gap: 8px;
	}

	.logo {
		display: inline-flex;
		flex-direction: column;

		align-items: flex-start;
	}

	.row-first {
		font-size: 110%;
	}

	.row-second {
		font-size: 90%;
		border-bottom: 2px solid;
		color: #f5eb8f;
	}
</style>
