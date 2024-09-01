<script>
	// @ts-nocheck
	// import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	import { page, navigating, updated } from '$app/stores';
	// console.log($navigating);
	// console.log($updated);

	export let data;
	let header = 'Some';
	//! Why the code below don't return the headers?
	// onMount(async () => {
	// 	const response = await fetch(window.location.href);
	// 	header = await response.headers.get('x-custom-header');
	// });
	async function inBrowser() {
		const response = await fetch(window.location.href);
		header = await response.headers.get('x-custom-header');
	}
	$: if (browser) {
		inBrowser();
	}
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
<!--for availability and SEO on each page!-->
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

<style>
	form {
		margin: 4rem auto;
	}
</style>
