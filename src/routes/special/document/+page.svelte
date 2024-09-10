<script>
	// @ts-nocheck
	let visibilityState = false;
	function handleContextMenu(e) {
		e.preventDefault();
		alert('Context Menu is not opened after right click!');
	}
</script>

<h1>svelte:document</h1>
<svelte:document bind:visibilityState on:contextmenu={handleContextMenu} />
