<script>
	function mouseLeave() {
		document.body.style.backgroundColor = '#eee';
	}
	function mouseEnter() {
		document.body.style.backgroundColor = '#ffedf0';
	}
</script>

<h1>svelte:body</h1>
<svelte:head>
	<title>Head and body</title>
</svelte:head>
<svelte:body on:mouseleave={mouseLeave} on:mouseenter={mouseEnter} />
