<script>
	// @ts-nocheck

	import { writable } from 'svelte/store';
	const store = writable({ a: 1 }, (set) => {
		console.log('SUBSCRIBE'); //first
		return () => console.log('UNSUBSCRIBE');
	});
	const unsubscribe = store.subscribe((store) => {
		console.log(store.a); //second
	});
	unsubscribe();
	store.set({ ...store, a: 2 });
	store.update((a) => {
		const res = a.a * 10;
		return { ...a, a: res };
	});
</script>

<h1>Writable</h1>
<h2>{$store.a}</h2>
