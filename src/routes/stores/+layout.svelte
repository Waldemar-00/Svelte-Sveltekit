<nav>
	<a href="/stores/writable">writable</a>
	<a href="/stores/readable">readable</a>
	<a href="/stores/derived">derived</a>
	<a href="/stores/readonly">readonly</a>
</nav>
<slot></slot>

<style>
	nav {
		display: flex;
		padding: 1rem 4rem;
		background-color: rgb(217, 255, 255);
		border-radius: 1rem;
	}
	a {
		padding: 0.5rem 2rem;
		text-decoration: underline;
		font-size: 2rem;
	}
</style>
