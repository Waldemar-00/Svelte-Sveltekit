<script>
	// @ts-nocheck
	import { page } from '$app/stores';
	export let data;
</script>

<h1>About</h1>
<h3>Slug: {data.slug}</h3>
<h3>Search: {data.search}</h3>
<h2>{$page?.data?.search}</h2>
