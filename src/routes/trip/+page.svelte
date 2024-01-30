<script lang="ts">
	export let data;
</script>

{#each data.trips as trip}
	<div>{trip.routeId}</div>
	<ul>
		{#each trip.legs as leg}
			<li>
				{leg.name}:
				{leg.origin.name} ->
				{leg.destination.name} (to {leg.direction})
				{leg.origin.plannedDateTime} -> {leg.destination.plannedDateTime}
			</li>
		{/each}
	</ul>
{/each}
