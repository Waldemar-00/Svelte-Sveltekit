<script>
	// @ts-nocheck

	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	export let data;
	onMount(() => {
		if (navigator.connection.saveData) alert('Turn off the data-savings mode for more quick work!');
	});
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<h2>data.uuid: {data.uuid}</h2>
<h2>page.data.uuid: {$page.data.uuid}</h2>
<h2>
	Is the data equal to the $page.data? <pre> {data === $page.data}</pre>
	<!--&nbsp;-->
</h2>
<svg>
	<g>
		<circle cx="20" cy="20" r="20" fill="red"></circle>
		<text y="24" x="20" fill="#000" text-anchor="start">Some text in the tag text, WOW</text>
		<text fill="red" y="48" x="64">This text has a red color</text>
		<text fill="purple" y="72" x="64" text-anchor="center">This text is purple</text>
	</g>
</svg>

<style>
	h2 pre {
		display: inline;
		color: red;
		font-size: 3rem;
	}
</style>
