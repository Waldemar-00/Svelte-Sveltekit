<script>
	// @ts-nocheck
	import { crossfade, fade } from 'svelte/transition';
	import { flip } from 'svelte/animate';
	import { quintOut } from 'svelte/easing';
	const [send, receive] = crossfade({ duration: 1000 });
	let db = [
		{ done: false, do: 'deal_0', id: 100 },
		{ done: true, do: 'deal_1', id: 200 },
		{ done: true, do: 'deal_2', id: 300 }
	];
	function toggleDone(id) {
		db = db.map((deal) => {
			if (deal.id === id) return { ...deal, done: !deal.done };
			return deal;
		});
	}
</script>

<main transition:fade={{ duration: 1000 }}>
	<ul>
		{#each db.filter((deal) => deal.done) as deal (deal.id)}
			<li
				animate:flip={{ delay: 250, duration: 2000, easing: quintOut }}
				in:receive
				out:send
				on:introstart={() => console.log('introstart')}
				on:introend={() => console.log('introend')}
				on:outrostart={() => console.log('outrostart')}
				on:outroend={() => console.log('outroend')}
			>
				<button on:click={() => toggleDone(deal.id)}>{deal.do}</button>
			</li>
		{/each}
	</ul>

	<ul>
		{#each db.filter((deal) => !deal.done) as deal (deal.id)}
			<li
				animate:flip={{ delay: 250, duration: 500, easing: quintOut }}
				in:receive
				out:send
				on:introstart={() => console.log('introstart')}
				on:introend={() => console.log('introend')}
				on:outrostart={() => console.log('outrostart')}
				on:outroend={() => console.log('outroend')}
			>
				<button on:click={() => toggleDone(deal.id)}>{deal.do}</button>
			</li>
		{/each}
	</ul>
</main>

<style>
	main {
		display: flex;
		justify-content: center;
		gap: 5rem;
	}
	ul {
		list-style: none;
	}
	button {
		padding: 0.5rem 3rem;
		border-radius: 0.5rem;
		border: none;
		background-color: aquamarine;
		margin-bottom: 0.9rem;
		cursor: pointer;
	}
</style>
