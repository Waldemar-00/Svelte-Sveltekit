<script>
	// @ts-nocheck

	import { fade, fly } from 'svelte/transition';
	import { linear, quintOut } from 'svelte/easing';
</script>

<!--out:fade={{ duration: 1000 }}-->
<main in:fade={{ duration: 2000, easing: linear }}>
	<h1 in:fly={{ x: -100, duration: 500, delay: 2000, easing: quintOut }}>
		<a href="/transition/plus">Transition +</a>
		<hr />
		<a href="/transition/crossfade">Crossfade</a>
	</h1>
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
