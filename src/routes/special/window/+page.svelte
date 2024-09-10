<script>
	// @ts-nocheck

	function handleResize() {
		if (window.innerWidth < 1200) document.body.style.backgroundColor = 'pink';
		if (window.innerWidth > 1200) document.body.style.backgroundColor = '#fff';
		window.scrollTo(0, 0);
	}
</script>

<h1>svelte:window</h1>
<svelte:window on:resize={handleResize} />
