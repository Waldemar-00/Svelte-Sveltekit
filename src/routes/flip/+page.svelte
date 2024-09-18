<script>
	import { flip } from 'svelte/animate';
	import { linear } from 'svelte/easing';
	let flag = false;
	let notes = [
		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam quidem commodi repellendus voluptates exercitationem ab saepe in aspernatur ratione, accusantium quam nihil culpa perferendis natus voluptatibus minima aperiam corporis recusandae! Suscipit sequi porro fuga, unde quisquam, amet quod ullam iure quaerat eaque facere delectus in alias ratione a odit maxime harum iste necessitatibus sunt voluptatibus, rem et! Ducimus, officiis magnam. Deserunt in hic vero beatae fuga tenetur iure blanditiis. Placeat inventore necessitatibus sed consequatur deleniti labore, atque alias sit magnam et dignissimos tempora neque minima animi ex velit. Incidunt, excepturi! Architecto autem libero, assumenda asperiores earum vitae dolorum quod. Voluptas quidem architecto iste modi molestiae soluta quaerat error reiciendis assumenda sed laboriosam eligendi aliquam delectus magnam cumque alias, odit quibusdam.'
	];
</script>

<h1>Flip</h1>
<button on:click={() => (flag = !flag)}> Change flag </button>
{#if flag}
	<ul>
		{#each notes as note (note)}
			<li id={note} animate:flip={{ delay: 200, duration: 700, easing: linear }}>{note}</li>
		{/each}
	</ul>
{/if}
<hr />
{#if !flag}
	<ul>
		{#each notes as note (note)}
			<li id={note} animate:flip={{ delay: 200, duration: 700, easing: linear }}>{note}</li>
		{/each}
	</ul>
{/if}

<style>
	ul {
		width: 700px;
		font-size: 1.2rem;
		list-style: none;
	}
</style>
