<script lang="ts">
	import '../app.scss';
	import '@fontsource/outfit';
	import Header from './Header.svelte';
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();

	const currentYear = new Date().getFullYear();
</script>

<Header />

<div class="container">
	{@render children?.()}

	<footer>&copy; mayu {currentYear}</footer>
</div>

<style lang="scss">
	.container {
		@media screen and (min-width: 600px) {
			margin: 1rem;
		}
	}
</style>
