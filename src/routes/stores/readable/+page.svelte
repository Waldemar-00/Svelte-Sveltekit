<script>
	// @ts-nocheck

	import { readable, get } from 'svelte/store';
	const time = readable(0, (set) => {
		set(`${new Date().getHours()} : ${new Date().getMinutes()} : ${new Date().getSeconds()}`);
		const interval = setInterval(() => {
			set(`${new Date().getHours()} : ${new Date().getMinutes()} : ${new Date().getSeconds()}`);
		}, 1000);
		return () => clearInterval(interval);
	});
	const startTime = get(time);
	const clock = readable('tick', (set, update) => {
		const interval = setInterval(() => {
			update((sound) => (sound === 'tick' ? 'tock' : 'tick'));
		}, 1000);
		return () => clearInterval(interval);
	});
</script>

<h1>Readable</h1>

<h2>Time: {$time} {$clock}</h2>
<h2>Start time: {startTime}</h2>
