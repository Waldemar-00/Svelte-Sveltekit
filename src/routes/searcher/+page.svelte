<script>
	import { page } from '$app/stores';
</script>

<form action="/searcher">
	<!-- svelte-ignore a11y-autofocus -->
	<input name="q" autofocus />
</form>
<h1>{$page?.data?.q}</h1>

<style>
	form {
		margin: 4rem auto;
	}
</style>
