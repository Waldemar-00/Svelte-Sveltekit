<script>
	// @ts-nocheck

	let toggle = 'none';
	let around = '0';
	function toggleDisplay() {
		if (toggle === 'none') {
			toggle = 'flex';
			around = '0.8rem 1.5rem';
		} else {
			toggle = 'none';
			around = '0';
		}
	}
</script>

<button class="spred" on:click={toggleDisplay}>Navigation</button>
<nav style="--toggle:{toggle}; --around:{around}">
	<a href="/about/?size=43" on:click={toggleDisplay}>about</a>
	<a href="/" on:click={toggleDisplay}>main</a>
	<a href="/" on:click={toggleDisplay}>main</a>
	<a href="/" on:click={toggleDisplay}>main</a>
	<a href="/" on:click={toggleDisplay}>main</a>
	<a href="/" on:click={toggleDisplay}>main</a>
	<a href="/" on:click={toggleDisplay}>main</a>
</nav>
<slot></slot>

<style>
	nav {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		position: absolute;
		left: 0;
		background-color: bisque;
		padding: var(--around);
		border-radius: 2rem;
		width: 90vw;
	}
	nav a,
	.spred {
		padding: 0.5rem 1.5rem;
		background-color: #eee;
		border-radius: 2rem;
		border: none;
		width: 15vw;
		font-size: 1.5rem;
		text-decoration: none;
	}
	nav a {
		display: var(--toggle);
	}
	.spred {
		margin-bottom: 1rem;
	}
</style>
