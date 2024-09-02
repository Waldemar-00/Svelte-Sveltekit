<script>
	import { readable } from 'svelte/store';
	const number = readable(100);
	function increment() {
		alert($number); //! number will increase
		$number++; //! it's calls error: 'Uncaught TypeError: store.set is not a function'
	}
</script>

<h1>Readable</h1>
<h2>{$number}</h2>
<button on:click={increment}> increment + 1 </button>

<style>
	button {
		padding: 0.5em 1rem;
		border: none;
		border-radius: 1rem;
	}
</style>
