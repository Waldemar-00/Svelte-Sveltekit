<script>
	import { tweened } from 'svelte/motion';
	import { interpolateLab } from 'd3-interpolate';
	let colors = ['rgb(255, 62, 0)', 'rgb(64, 179, 255)', 'rgb(103, 103, 120)'];
	let color = 0;
	const tween = tweened(colors[color], {
		duration: 700,
		interpolate: interpolateLab
	});
	let count = 1;
	function changeColor() {
		count === 2 ? (count = 0) : (count += 1);
		color === 2 ? (color = 0) : (color += 1);
		tween.set(colors[color]);
	}
</script>

<h1>Itrepolate Lab</h1>
<button style="--btnColor: {colors[count]}" on:click={changeColor}>Change color</button>
<div style="--color: {$tween}"></div>

<style>
	div {
		width: 100vw;
		height: 100vh;
		background-color: var(--color);
		margin-top: 1.5rem;
	}
	button {
		background-color: var(--btnColor);
		border: none;
		border-radius: 0.5rem;
		padding: 1rem 4rem;
		color: #fff;
		font-weight: bold;
		transition: all 0.7s;
	}
</style>
