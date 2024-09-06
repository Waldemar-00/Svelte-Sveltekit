<script>
	// @ts-nocheck

	import { fade, fly } from 'svelte/transition';
</script>

<main in:fade={{ duration: 2000 }} out:fade={{ duration: 1000 }}>
	<h1 in:fly={{ x: -100, duration: 500, delay: 2000 }}>Transition</h1>
	<h2 in:fly={{ y: 400, duration: 1800 }}>Transition</h2>
	<h3 in:fly={{ y: 400, duration: 1600 }}>Transition</h3>
	<h4 in:fly={{ y: 400, duration: 1400 }}>Transition</h4>
	<h5 in:fly={{ y: 400, duration: 1200 }}>Transition</h5>
	<h6 in:fly={{ y: 400, duration: 1000 }}>Transition</h6>
</main>

<style>
	main {
		background-color: aquamarine;
		width: 100vw;
		height: 100vh;
		border-radius: 2rem;
		padding: 2rem 4rem;
	}
</style>
