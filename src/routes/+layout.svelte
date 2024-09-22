<script>
	// @ts-nocheck
	import { setContext, getContext } from 'svelte';
	import { writable } from 'svelte/store';
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
	setContext('commonMessage', 'I am context for all routes!');
	let commonMessage = getContext('commonMessage');
	const changingContext = writable(setContext('changingMessage', 'I can change!!!'));
	let getChangingMessage = getContext('changingMessage');
</script>

<main>
	<nav style="--toggle:{toggle}; --pointer:{disabled}">
		<button class="spred" on:click={toggleDisplay}>Client Nav</button>
		<a href="/">main</a>
		<a href="plotly">plotly</a>
		<a href="/flip">flip</a>
		<a href="/tweened">tweened</a>
		<a href="/interpolate">interpolate</a>
		<a href="/spring">spring</a>
		<a href="/tick">tick</a>
		<a href="/stores">stores</a>
		<a href="/about/?size=43">about</a>
		<a href="/slots">slots</a>
		<a href="/dispatch">dispatch</a>
		<a href="/receive">receive</a>
		<a href="/transition">trans</a>
		<a href="/1234">1234</a>
		<a href="/groups">groups</a>
		<a href="/request">request</a>
		<a href="/svelte">svelte</a>
		<a href="/radio">radio</a>
		<a href="/use_action">use_action</a>
		<a href="/searcher">searcher</a>
		<a href="/special">special elems</a>
		<a href="/login" class="login">login/out</a>
	</nav>
	<div>
		<slot></slot>
	</div>
</main>
<h3>{commonMessage}</h3>
<h2>{$changingContext}</h2>
<h2>{getChangingMessage}</h2>
<button on:click={() => changingContext.update((m) => (m = 'I have been changed!!!'))}
	>Change writable context</button
>

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
	main {
		display: inline-flex;
		justify-content: flex-start;
		gap: 5vw;
	}
	h3 {
		color: green;
	}
	nav {
		display: inline-flex;
		flex-direction: column;

		flex-wrap: wrap;
		gap: 1rem;
		position: relative;
		left: 0;
		top: 0;
		background-color: bisque;
		border-radius: 2rem;
		width: 12rem;
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
	}
</style>
