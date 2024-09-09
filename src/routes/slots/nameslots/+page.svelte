<script>
	// @ts-nocheck
	import ContentPattern from './ContentPattern.svelte';
	let notes = [
		'one',
		'two',
		'three',
		'four',
		'five',
		'six',
		'seven',
		'eight',
		'nine',
		['ten', 'eleven', 'twenty', 'thirty', ['1', '2', '3', '4', '5', '6', '7']]
	];
</script>

<h1>Name slots</h1>
<ContentPattern let:content>
	<h2 slot="header" let:header>{header}</h2>
	<p>
		{content}
	</p>
	<h2 slot="footer" let:footer>{footer}</h2>
</ContentPattern>
<!--How it does work???????????????????-->
<!-- <ul>
	{#each notes as note, index (self.crypto.randomUUID())}
		<li>
			{#if Array.isArray(note)}
				{console.log('FUCK!!!!!!!!!!!!!!!!!!!!!!!!')}
				<svelte:self notes={note} />
			{:else}
				{console.log('NOTE_______________________')}
				<h2>{note}</h2>
			{/if}
		</li>
	{/each}
</ul> -->
<!--How it does work???????????????????-->

<!-- {#if count > 0}
	<h2>counting down... {count}</h2>
	<svelte:self count={count - 1} />
{:else}
	<h2>lift-off!</h2>
{/if} -->
