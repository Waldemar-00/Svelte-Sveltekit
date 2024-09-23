<script>
	// @ts-nocheck
	import Plotly from 'plotly.js-dist-min';
	import { onMount, afterUpdate } from 'svelte';
	// let range = 2;
	let settings = [
		{ foo: 'sin', id: 'tester', range: 2 },
		{ foo: 'cos', id: 'tester_2', range: 2 },
		{ foo: 'sin', id: 'tester_3', range: 2, result: true }
	];
	let commonData = {};
	async function changeRange({ foo, id, range, result = false }) {
		let x = [];
		let y = [];
		if (!result) {
			for (let i = 0; i <= range * Math.PI; i += 0.1) {
				x = [...x, i];
				y = [...y, Math[foo](i)];
			}
			commonData[id] = { x: x, y: y };
		}
		if (result) {
			const tester_x = commonData['tester'].x;
			const tester_2_x = commonData['tester_2'].x;
			const tester_y = commonData['tester'].y;
			const tester_2_y = commonData['tester_2'].y;
			x = tester_x.map((x, i) => x + tester_2_x[i]);
			y = tester_y.map((y, i) => y + tester_2_y[i]);
		}
		console.log(commonData);
		let trace = [
			{
				x,
				y,
				mode: 'lines+markers',
				name: 'The sine wave'
			}
		];
		const TESTER = await document.getElementById(id);
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
		settings.forEach((object) => changeRange(object));
	});
	afterUpdate(() => {
		commonData = {};
		settings.forEach((object) => changeRange(object));
	});
</script>

<h1>Plotly</h1>
{#each settings as sett (sett.id)}
	<hr />
	<div class="wrap">
		<div id={sett.id}></div>
		{#if !sett.result}
			<label>
				<input
					type="range"
					min="1"
					step="0.1"
					max="10"
					bind:value={sett.range}
					on:input={() => changeRange(sett)}
				/>
				<div>{sett.range}</div>
			</label>
		{/if}
	</div>
{/each}

<style>
	.wrap {
		display: flex;
		gap: 5rem;
		margin-top: 2rem;
	}
	.wrap input {
		align-self: self-start;
		width: 200px;
	}
	#tester,
	#tester_2,
	#tester_3 {
		width: 900px;
		height: 700px;
	}
</style>
