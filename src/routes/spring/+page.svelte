<script>
	import { spring } from 'svelte/motion';
	const coords = spring({ x: 300, y: 200 }, { stiffness: 0.15, damping: 0.8, precision: 0.01 });
	const size = spring(30);
</script>

<h1>The spring</h1>
<svg
	role="presentation"
	on:mousemove={(e) => {
		coords.set({ x: e.clientX, y: e.clientY }, { soft: 1 });
	}}
	on:mousedown={() => {
		size.set(70, { hard: true });
	}}
	on:mouseup={() => {
		size.set(30, { soft: 1 });
	}}
>
	<circle cx={$coords.x} cy={$coords.y} r={$size}></circle>
</svg>

<style>
	svg {
		position: absolute;
		width: 100%;
		height: 100%;
		left: 12rem;
		top: 0;
	}
	circle {
		fill: crimson;
	}
</style>
