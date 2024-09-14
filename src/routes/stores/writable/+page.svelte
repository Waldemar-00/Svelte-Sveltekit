<script>
	// @ts-nocheck
	import { onDestroy } from 'svelte';
	import { writable, get } from 'svelte/store';
	const store = writable({ a: 1 }, (set) => {
		console.log('SUBSCRIBE'); //first
		return () => console.log('UNSUBSCRIBE');
	});
	const startA = get(store);
	const store_1 = writable(250);
	const unsubscribe = store.subscribe((store) => {
		console.log(store.a); //second
	});
	unsubscribe();
	store.set({ ...store, a: 2 });
	store.update((a) => {
		const res = a.a * 100;
		return { ...a, a: res };
	});
	onDestroy(() => {
		const endA = get(store);
		alert(endA.a);
	});
</script>

<h1>Writable</h1>
<h2>{$store.a}</h2>
<button
	on:click={() => {
		const res = $store.a + $store_1;
		store.set({ ...store, a: res });
	}}>increasing</button
>
<h2>Start A: {startA.a}</h2>
