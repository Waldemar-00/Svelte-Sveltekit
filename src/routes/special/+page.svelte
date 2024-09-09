<script>
	// @ts-nocheck

	import FirstElem from './FirstElem.svelte';
	import SecondElem from './SecondElem.svelte';
	import { onMount, afterUpdate } from 'svelte';
	let component;
	function toggleComponent(num) {
		num % 2 === 0 ? (component = SecondElem) : (component = FirstElem);
	}
	let tag = 'h2';
	// let tag;
	function toggleElement(num) {
		num % 2 === 0 ? (tag = 'h3') : (tag = 'h4');
	}
	onMount(() => {
		document.querySelector('h2').textContent = 'Header 2';
	});
	afterUpdate(() => {
		if (tag === 'h3') document.querySelector('h3').textContent = 'Header 3';
		if (tag === 'h4') document.querySelector('h4').textContent = 'Header 4';
	});
</script>

<div>
	<button on:click={() => toggleComponent(1)}>First component</button>
	<button on:click={() => toggleComponent(2)}>Second component</button>
</div>
<svelte:component this={component} />
<br />
<div>
	<button on:click={() => toggleElement(1)}>header 'h4'</button>
	<button on:click={() => toggleElement(2)}>header 'h3'</button>
</div>
<svelte:element this={tag} />

<style>
	div {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		align-items: center;
		width: 20vw;
		height: 4vw;
		padding: 1rem 4rem;
		background-color: aquamarine;
	}
</style>
