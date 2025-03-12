<script lang="ts">
	import IconFavorite from 'virtual:icons/material-symbols/kid-star';
	import Section from '../lib/components/organisms/Section.svelte';
</script>

<Section title="Favorite stations">
	{#snippet icon()}
		<IconFavorite  />
	{/snippet}
	<div>You don't have favorite stations yet</div>
</Section>
