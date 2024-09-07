<script>
	// @ts-nocheck

	import Content from './Content.svelte';
	let message = '';
	let value = 0;
	let red = 'red';
	let blue = 'blue';
	let component = '';
	function handlerEvent(e) {
		console.log(e.detail);
		console.log(component, 'COMPONENT');
		message = e.detail.message;
	}
</script>

<main>
	<Content
		on:customEvent={handlerEvent}
		--main-color={red}
		--bgc-color={blue}
		bind:value
		bind:this={component}
	/>
	<h2>{message}</h2>
	<input type="range" bind:value min="0" step="any" max="100" list="markers" />
	<datalist id="markers">
		<option value="0"></option>
		<option value="25"></option>
		<option value="50"></option>
		<option value="75"></option>
		<option value="100"></option>
	</datalist>
	<h2>{value}</h2>
</main>

<style>
	input {
		width: 20vw;
	}
</style>
