<script>
	import { page } from '$app/stores';
</script>

<h1>Error from slug</h1>
<h2>{$page.status}</h2>
<h2>{$page.error?.message}</h2>

<style>
	h1,
	h2 {
		color: red;
	}
</style>
