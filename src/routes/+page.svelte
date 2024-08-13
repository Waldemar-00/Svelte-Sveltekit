<script>
	import { page } from '$app/stores';
	export let data;
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<h2>data.result: {data.result}</h2>
<h2>page.data.result: {$page.data.result}</h2>
<h2>
	Is the data equal to the $page.data? <pre> {data === $page.data}</pre>
	<!--&nbsp;-->
</h2>
<nav>
	<a href="/about/?size=7">about</a>
</nav>

<style>
	h2 pre {
		display: inline;
		color: red;
		font-size: 3rem;
	}
</style>
