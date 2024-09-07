<script>
	// @ts-nocheck

	import Content from './Content.svelte';
	let message = '';
	function handlerEvent(e) {
		console.log(e.detail);
		message = e.detail.message;
	}
</script>

<main>
	<Content on:customEvent={handlerEvent} />
	<h2>{message}</h2>
</main>
