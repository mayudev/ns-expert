<script lang="ts">
	import '../app.scss';
	import '@fontsource/nunito';
	import Header from './Header.svelte';
</script>

<Header />

<div class="container">
	<slot />
</div>

<style lang="scss">
	.container {
		@media screen and (min-width: 600px) {
			margin: 1rem;
		}
	}
</style>
