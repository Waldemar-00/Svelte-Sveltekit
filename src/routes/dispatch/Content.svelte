<script>
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
	function handlerDispatcher() {
		const isEvent = dispatch('customEvent', {
			message: 'You can create a custom event via createEventDispatcher from Svelte'
		});
		console.log(isEvent);
	}
</script>

<h1>Something important</h1>
<button on:click={handlerDispatcher}>dispatch</button>

<style>
	button {
		padding: 0.5rem 2rem;
		border: none;
		border-radius: 0.5rem;
		cursor: pointer;
		background-color: rgb(28, 123, 91);
		color: #fff;
	}
</style>
