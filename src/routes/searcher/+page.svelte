<script>
	// @ts-nocheck
	import { getContext, setContext } from 'svelte';
	import { browser } from '$app/environment';
	import { page, navigating, updated } from '$app/stores';
	export let data;
	let header = 'Some';
	async function inBrowser() {
		const response = await fetch(window.location.href);
		header = await response.headers.get('x-custom-header');
	}
	$: if (browser) {
		inBrowser();
	}
	setContext('commonMessage', 'I changed the common message');
	//!Context will be changed only for this component which it is binding!!!!!!!!!!!
	let commonMessage = getContext('commonMessage');
</script>

<svelte:head
	><title>searcher</title>
	<meta
		name="description"
		content="Mary's simple recipe for maple bacon donuts
    makes a sticky, sweet treat with just a hint
    of salt that you'll keep coming back for."
	/></svelte:head
>
<h1>{header}</h1>
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
<h2>{commonMessage}</h2>

<style>
	form {
		margin: 4rem auto;
	}
	h2 {
		color: red;
	}
</style>
