<script lang="ts">
	import '../app.scss';
	import '@fontsource/nunito';
	import Header from './Header.svelte';

	const currentYear = new Date().getFullYear();
</script>

<Header />

<div class="container">
	<slot />

	<footer>&copy; mayu {currentYear}</footer>
</div>

<style lang="scss">
	.container {
		@media screen and (min-width: 600px) {
			margin: 1rem;
		}
	}
</style>
