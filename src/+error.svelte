<script>
	import { page } from '$app/stores';
</script>

<h1>Root error page</h1>
<h2>{$page.status}</h2>
<h2>{$page.error?.message}</h2>

<style>
	h1,
	h2 {
		color: rgb(98, 9, 98);
	}
</style>
