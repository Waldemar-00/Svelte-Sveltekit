<script>
	// @ts-nocheck

	let number = 1000;
	let color = 'aquamarine';
	function foo(node, { color }) {
		node.style.backgroundColor = color;
		node.addEventListener('click', () => console.log(number));
		return {
			update({ color }) {
				node.style.backgroundColor = color;
			},
			destroy() {
				node.removeEventListener('click', () => console.log(number));
			}
		};
	}
	function mathAction() {
		if (number >= 1000 && number <= 1900) number = number + 100;
		else number = number - 200;
		if (number > 1200) color = 'lightgreen';
		if (number > 1500) color = 'lightblue';
		if (number >= 2000) color = 'red';
	}
</script>

<main use:foo={{ color }}>
	<h1>USE:ACTION</h1>
	<h2>{number}</h2>
	<button on:click={mathAction}>Math action</button>
</main>

<style>
	main {
		width: 100vw;
		height: 100vh;
		background-color: aliceblue;
		padding: 1rem 2rem;
	}
	button {
		padding: 0.5rem 2rem;
		border: none;
		background-color: cadetblue;
		color: #fff;
		border-radius: 0.5rem;
	}
</style>
