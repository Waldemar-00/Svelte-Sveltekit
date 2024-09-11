<nav>
	<a href="/special/window">svelte:window</a>
	<a href="/special/document">svelte:document</a>
	<a href="/special/body">svelte:body</a>
</nav>
<slot></slot>

<style>
	nav {
		display: flex;
		padding: 1rem 4rem;
		gap: 2rem;
		border-radius: 1rem;
		background-color: aqua;
		margin-bottom: 2rem;
	}
	a {
		background-color: aliceblue;
		padding: 0.5rem 4rem 0.5rem 0.7rem;
		border-radius: 1rem;
	}
</style>
