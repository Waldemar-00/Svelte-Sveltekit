<script>
	// @ts-nocheck

	import { crossfade } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	const [send, receive] = crossfade({
		delay: 500,
		duration: 700,
		easing: quintOut
	});
	let show = false;
	function toggleShow() {
		show = !show;
	}
</script>

{#if show}
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<h1 in:send out:receive on:click={toggleShow}>Hi, show is TRUE</h1>
{:else}
	<h1 in:send out:receive on:click={toggleShow}>There will be no SHOW</h1>
{/if}
