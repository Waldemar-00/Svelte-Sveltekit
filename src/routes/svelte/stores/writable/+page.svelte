<script>
	import { writable } from 'svelte/store';
	const number = writable(100);
	function increment() {
		$number++;
	}
</script>

<h1>Writable</h1>
<h2>{$number}</h2>
<button on:click={increment}> increment + 1 </button>

<style>
	button {
		padding: 0.5em 1rem;
		border: none;
		border-radius: 1rem;
	}
</style>
