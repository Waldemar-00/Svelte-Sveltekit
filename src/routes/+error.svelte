<script>
	import { page } from '$app/stores';
</script>

<h1>Routes error page</h1>
<h2>{$page.status}</h2>
<h2>{$page.error?.message}</h2>

<style>
	h1,
	h2 {
		color: green;
	}
</style>
