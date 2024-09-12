<script>
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
	function handlerDispatcher() {
		const isEvent = dispatch(
			'customEvent',
			{
				message: 'You can create a custom event via createEventDispatcher from Svelte'
			},
			{ cancelable: true }
		);
		if (isEvent) console.log(isEvent);
	}
	export let value;
</script>

<h1>Something important</h1>

<input type="text" {value} />
<br />
<br />
<button on:click={handlerDispatcher}>dispatch</button>

<style>
	button {
		padding: 0.5rem 2rem;
		border: none;
		border-radius: 0.5rem;
		cursor: pointer;
		background-color: var(--bgc-color);
		color: var(--main-color);
	}
</style>
