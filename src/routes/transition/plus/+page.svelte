<script>
	import { blur, slide } from 'svelte/transition';
	import { cubicOut, linear, quintOut } from 'svelte/easing';
</script>

<h1
	in:blur={{ delay: 0, duration: 400, opacity: 0, amount: '17rem', easing: linear }}
	out:blur={{ amount: '17rem', easing: cubicOut }}
>
	Blur
</h1>
<ul in:slide={{ duration: 1000, axis: 'y', easing: quintOut }}>
	<li><h2>Hello</h2></li>
	<li><h2>Hello Hello</h2></li>
	<li><h2>Hello Hello Hello</h2></li>
	<li><h2>Hello, Great SLIDE!</h2></li>
</ul>

<!--default amount in px, you can use 'rem' -->
<a href="/transition">Back to transition</a>

<style>
	ul {
		list-style: none;
	}
</style>
