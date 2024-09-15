<script>
	import { tweened } from 'svelte/motion';
	import { linear } from 'svelte/easing';
	const size = tweened(1, {
		duration: 700,
		easing: linear
	});
</script>

<h1>Tweened</h1>

<button on:click={() => ($size += 1)}>Scale + </button>

<div style="--scale:{$size}"></div>

<style>
	div {
		margin-top: 2rem;
		transform: scale(var(--scale));
		transform-origin: 0 0;
		width: 10px;
		height: 10px;
		background-color: peru;
	}
</style>
