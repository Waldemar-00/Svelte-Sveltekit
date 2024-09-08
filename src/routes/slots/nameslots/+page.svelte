<script>
	// @ts-nocheck
	import ContentPattern from './ContentPattern.svelte';
</script>

<h1>Name slots</h1>
<ContentPattern let:content>
	<h2 slot="header" let:header>{header}</h2>
	<p>
		{content}
	</p>
	<h2 slot="footer" let:footer>{footer}</h2>
</ContentPattern>
