<script>
	// @ts-nocheck

	import { derived, writable } from 'svelte/store';
	const a = writable(200);
	const b = writable(300);
	const summed = derived([a, b], ([$a, $b]) => $a + $b);
</script>

<h1>Derived</h1>
<h2>{$summed}</h2>
<button
	on:click={() => {
		a.update((a) => a + 100);
	}}>increase A</button
>
<button
	on:click={() => {
		b.update((b) => b + 200);
	}}>increase B</button
>
