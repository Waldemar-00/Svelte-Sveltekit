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

<style>
	h2 pre {
		display: inline;
		color: red;
		font-size: 3rem;
	}
</style>
