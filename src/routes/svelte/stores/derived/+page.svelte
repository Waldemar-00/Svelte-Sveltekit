<script>
	// @ts-nocheck

	import { writable, derived } from 'svelte/store';
	const number = writable(100);
	const number_2 = writable(200);
	const amount = derived([number, number_2], ([$number, $number_2]) => $number + $number_2);
	function increment(value) {
		$number += value;
	}
</script>

<h1>Derived</h1>
<h2>{$amount}</h2>
<button on:click={() => increment(1)}> increment + 1 </button>
<button on:click={() => increment(2)}> increment + 2 </button>

<style>
	button {
		padding: 0.5em 1rem;
		border: none;
		border-radius: 1rem;
	}
</style>
