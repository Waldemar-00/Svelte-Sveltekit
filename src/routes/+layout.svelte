<script>
	// @ts-nocheck
	let toggle = 'none';
	function toggleDisplay() {
		if (toggle === '0') toggle = '1';
		else toggle = '0';
	}
</script>

<nav style="--toggle:{toggle}">
	<button class="spred" on:click={toggleDisplay}>Client Nav</button>
	<a href="/about/?size=43">about</a>
	<a href="/">main</a>
	<a href="/">main</a>
	<a href="/">main</a>
	<a href="/">main</a>
	<a href="/">main</a>
	<a href="/">main</a>
</nav>
<slot></slot>

<style>
	nav {
		display: inline-flex;
		align-items: center;
		gap: 1rem;
		position: relative;
		left: 0;
		top: 0;
		background-color: bisque;
		border-radius: 2rem;
		width: 99vw;
	}
	:global(a) {
		text-decoration: none;
	}
	nav a,
	.spred {
		padding: 0.5rem 1.5rem;
		background-color: #eee;
		border-radius: 2rem;
		border: none;
		font-size: 1.5rem;
		color: rgb(42, 42, 42);
	}
	nav a {
		opacity: var(--toggle);
		padding: 0.2rem 1.5rem;
		transition: all 700ms;
	}
	nav {
		margin-bottom: 1.5rem;
	}
</style>
