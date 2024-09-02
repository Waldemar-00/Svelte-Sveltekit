<script>
	// @ts-nocheck
	let toggle = 'none';
	let check = false;
	let disabled = 'auto';
	function toggleDisplay() {
		if (toggle === '0') {
			toggle = '1';
			disabled = 'auto';
		} else {
			toggle = '0';
			disabled = 'none';
		}
	}
</script>

<nav style="--toggle:{toggle}; --pointer:{disabled}">
	<button class="spred" on:click={toggleDisplay}>Client Nav</button>
	<a href="/">main</a>
	<a href="/about/?size=43">about</a>
	<a href="/1234">1234</a>
	<a href="/groups">groups</a>
	<a href="/request">request</a>
	<a href="/svelte">svelte</a>
	<a href="/">main</a>
	<a href="/">main</a>
	<a href="/searcher">searcher</a>
	<a href="/login" class="login">login/out</a>
</nav>
<slot></slot>

<!-- <dialog>
	<form action="">
		<label>
			allow
			<input type="checkbox" checked={check} />
		</label>
		<p>
			We want to use cookies for stable site work. <br /> You can allow the cookies or disagree.
		</p>
		<button>disagree</button>
	</form>
</dialog> -->

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
		pointer-events: var(--pointer);
		padding: 0.2rem 1.5rem;
		transition: all 700ms;
	}
	nav {
		margin-bottom: 1.5rem;
	}
	.login {
		opacity: 1;
		pointer-events: inherit;
		position: relative;
		left: 100px;
	}
</style>
