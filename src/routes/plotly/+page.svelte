<script>
	// @ts-nocheck
	import Plotly from 'plotly.js-dist-min';
	import { onMount } from 'svelte';

	let range = 2;
	async function changeRange() {
		let x = [];
		let y = [];
		let trace = [];
		for (let i = 0; i <= range * Math.PI; i += 0.1) {
			x = [...x, i];
			y = [...y, Math.sin(i)];
		}
		trace = [
			{
				x,
				y,
				mode: 'lines+markers',
				name: 'The sine wave'
			}
		];
		const TESTER = await document.querySelector('#tester');
		Plotly.newPlot(TESTER, trace, {
			margin: { t: 20 },
			updatemenus: [
				{
					buttons: [
						{
							args: ['y', [y.map((val) => val * 2)]],
							label: 'Amplitude * 2',
							method: 'restyle'
						},
						{
							args: ['y', [y.map((val) => val * 4)]],
							label: 'Amplitude * 4',
							method: 'restyle'
						},
						{
							args: ['y', [y]],
							label: 'Inherited amplitude',
							method: 'restyle'
						}
					],
					direction: 'left',
					pad: { r: 10, t: 10 },
					showactive: true,
					type: 'buttons',
					x: 0.1,
					xanchor: 'left',
					y: 1.1,
					yanchor: 'top'
				}
			]
		});
		// Plotly.restyle(TESTER, 'visible', 'legendonly');
	}

	onMount(() => {
		changeRange();
	});
</script>

<h1>Plotly</h1>
<div class="wrap">
	<div id="tester"></div>
	<label>
		<input type="range" min="1" step="any" max="10" bind:value={range} on:input={changeRange} />
		<div>{range}</div>
	</label>
</div>

<style>
	.wrap {
		display: flex;
		gap: 5rem;
	}
	.wrap input {
		align-self: self-start;
		width: 200px;
	}
	#tester {
		width: 900px;
		height: 700px;
	}
</style>
