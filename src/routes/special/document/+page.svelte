<script>
	// @ts-nocheck
	let fullscreenElement;
	let visibilityState;
	function handleContextMenu(e) {
		e.preventDefault();
		alert('Context Menu is not opened after right click!');
	}
	let count = 0;
	function foo(node, { count }) {
		alert('use:action');
		return {
			update({ count }) {
				if (count > 7) document.body.style.backgroundColor = 'lightblue';
			},
			destroy() {
				alert('Destroy');
				node.body.style.backgroundColor = '#fff';
			}
		};
	}
</script>

<svelte:head><title>svelte:document</title></svelte:head>
<h1>svelte:document</h1>
<svelte:document
	bind:fullscreenElement
	bind:visibilityState
	on:contextmenu={handleContextMenu}
	use:foo={{ count }}
/>
<button on:click={() => console.log(fullscreenElement)}>fullscreenElement</button>
<button on:click={() => console.log(visibilityState)}>visibilitySate</button>
<button on:click={() => count++}>Change count and see via use:action</button>
<h2>{count}</h2>
<!--USE:ACTION!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!-->
