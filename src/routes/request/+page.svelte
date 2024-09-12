<script>
	import { getContext } from 'svelte';
	export let data;
	let commonMessage = getContext('commonMessage');
	function changeContext() {
		commonMessage = 'New text of common message!';
		//!Context will be changed only for this component which it is binding!!!!!!!!!!!
	}
	let getChangingMessage = getContext('changingMessage');
</script>

<h1>Request page</h1>
<h2>{data?.message}</h2>
<h2>{data?.header}</h2>
<h2>{data.handleFetchHearders}</h2>

<h2 style="color:red">{commonMessage}</h2>
<h2 style="color:green">{getChangingMessage}</h2>

<button on:click={changeContext}>Change common context</button>
