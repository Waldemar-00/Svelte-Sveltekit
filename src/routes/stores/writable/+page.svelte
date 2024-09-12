<script>
	import { writable } from 'svelte/store';
	const store = writable({ a: 1 }, () => {
		console.log('SUBSCRIBE');
		return () => console.log('UNSUBSCRIBE');
	});
	store.set({ ...store, a: 2 });
	const unsubscribe = store.subscribe((store) => {
		console.log(store.a);
	});
	unsubscribe();
</script>

<h1>Writable</h1>
