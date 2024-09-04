<script>
	// @ts-nocheck
	let div;
	let food = 'meat';
	let names = ['Mike'];
	$: console.log(food);
	$: console.log(names);
	$: console.log(div);
</script>

<div bind:this={div}>
	<label><input type="radio" bind:group={food} value="milk" /> milk</label>
	<label><input type="radio" bind:group={food} value="nuts" /> nuts</label>
	<label><input type="radio" bind:group={food} value="corn" /> corn</label>
	<label><input type="radio" bind:group={food} value="meat" /> meat</label>
</div>
<hr />
<div>
	<label><input type="checkbox" bind:group={names} value="Mike" /> Mike</label>
	<label><input type="checkbox" bind:group={names} value="Laura" /> Laura</label>
	<label><input type="checkbox" bind:group={names} value="Anjey" /> Anjey</label>
	<label><input type="checkbox" bind:group={names} value="Tom" /> Tom</label>
</div>

<style>
	div {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 1rem;
		margin-left: 3rem;
	}
</style>
