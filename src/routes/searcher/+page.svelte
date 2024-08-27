<script>
	// @ts-nocheck

	import { page } from '$app/stores';
	export let data;
</script>

<form action="/searcher">
	<!-- svelte-ignore a11y-autofocus -->
	<input
		name="q"
		on:input={() => document.querySelector('[action="/searcher"]').requestSubmit()}
		autofocus
	/>
</form>
<ul>
	{#if typeof data?.q === 'object'}
		{#each data?.q as item, index (index)}
			<li><a href={`${item.toLowerCase()}`}>{item}</a></li>
		{/each}
	{:else}
		<li><h3>{data?.q}</h3></li>
	{/if}
</ul>

<style>
	form {
		margin: 4rem auto;
	}
</style>
