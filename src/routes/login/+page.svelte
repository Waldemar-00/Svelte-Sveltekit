<script>
	// @ts-nocheck

	import { afterNavigate } from '$app/navigation';
	export let data;
	let email = '';
	afterNavigate(() => {
		const dialog = document.querySelector('dialog');
		dialog?.showModal();
		dialog?.addEventListener('click', (e) => {
			if (e.target === e.currentTarget) {
				dialog?.close();
			}
		});
	});
	export const snapshot = {
		capture: () => email,
		restore: (value) => (email = value)
	};
</script>

{#if !data?.email}
	<dialog>
		<form action="?/post" method="POST">
			<label title="email"
				><input type="email" name="email" placeholder="...@example.com" bind:value={email} /></label
			>
			<label title="password"
				><input type="password" name="password" placeholder="password" /></label
			>
			<button>submit</button>
		</form>
	</dialog>
{:else}
	<h1>'Welcome, Bro!'</h1>
	<h2>Your email: {data?.email}</h2>
	<form action="?/delete" method="POST">
		<button class="delete">Logout</button>
	</form>
{/if}

<style>
	dialog {
		width: 50vw;
		height: 20vh;
		border: none;
		border-radius: 2rem;
		padding: 0;
	}
	form {
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		flex-wrap: wrap;
		height: 100%;
		width: 100%;
	}
	input,
	button {
		padding: 0.5rem 2rem;
		border: none;
		background-color: antiquewhite;
		border-radius: 0.2rem;
		outline-color: darkslategray;
	}
	button {
		text-align: center;
		color: #757575;
		cursor: pointer;
		/* display: none; */
	}
	button:hover {
		border-radius: 0.4rem;
		background-color: rgb(177, 217, 177);
	}
	.delete:hover {
		color: #fff;
		background-color: red;
	}
</style>
