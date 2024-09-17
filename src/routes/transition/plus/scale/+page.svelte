<script>
	import { scale } from 'svelte/transition';
	import { cubicOut, quintOut, linear } from 'svelte/easing';
	import { draw } from 'svelte/transition';
</script>

<div in:scale={{ delay: 200, duration: 1200, easing: linear, opacity: 1, start: 0 }}></div>

<a href="/transition/plus">Plus</a>

<style>
	div {
		width: 100vw;
		height: 4rem;
		background-color: red;
	}
</style>
