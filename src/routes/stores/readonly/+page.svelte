<script>
	// @ts-nocheck

	import { readonly, writable, get } from 'svelte/store';
	const count = writable(100);
	const forReading = readonly(count);
	forReading.subscribe(console.log);
	const startCount = get(count);
</script>

<h1>Read only</h1>
<h2>{$forReading}</h2>
<button on:click={() => count.update(() => $count + 100)}>Change count</button>
<h2>Start count: {startCount}</h2>
