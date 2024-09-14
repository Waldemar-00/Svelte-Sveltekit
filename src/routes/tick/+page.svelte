<script>
	// @ts-nocheck

	import { tick } from 'svelte';
	let count = 1000;
	let text = '';
	async function usingTick() {
		count = count + 4000;
		await tick(); //await DOM update!!!
		text = document.querySelector('h2')?.textContent;
		count = count + 1000;
	}
</script>

<h1>tick()</h1>
<button on:click={usingTick}>Use tick to get biggest amount</button>
<h2>{count}</h2>
<h2>{text}</h2>
