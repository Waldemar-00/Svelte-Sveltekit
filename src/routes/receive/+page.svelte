<script>
	// @ts-nocheck
	import { fade, crossfade } from 'svelte/transition';
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

<main>
	<ul>
		{#each db.filter((deal) => deal.done) as deal (deal.id)}
			<li in:fade|global={{ duration: 1000 }} out:fade={{ duration: 1000 }}>
				<button on:click={() => toggleDone(deal.id)}>{deal.do}</button>
			</li>
		{/each}
	</ul>

	<ul>
		{#each db.filter((deal) => !deal.done) as deal (deal.id)}
			<li in:fade|global={{ duration: 1000 }} out:fade={{ duration: 1000 }}>
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
