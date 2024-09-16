<script>
	import { blur } from 'svelte/transition';
	import { cubicOut, linear } from 'svelte/easing';
</script>

<h1
	in:blur={{ delay: 0, duration: 400, opacity: 0, amount: '17rem', easing: linear }}
	out:blur={{ amount: '17rem', easing: cubicOut }}
>
	Blur
</h1>
<!--default amount in px, you can use 'rem' -->
<a href="/transition">Back to transition</a>
