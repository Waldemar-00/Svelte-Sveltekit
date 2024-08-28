<script>
	// @ts-nocheck

	import { afterNavigate, invalidateAll } from '$app/navigation';
	import { page } from '$app/stores';
	import { applyAction, enhance } from '$app/forms';
	import { goto } from '$app/navigation';
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

<p>{data?.message}</p>
{#if $page.status === 401}
	<h1 class="fail">{@html $page.form.message}</h1>
{/if}
{#if !data?.email}
	<dialog>
		<form
			action="?/post"
			method="POST"
			use:enhance={async ({ formData, action, cancel, form, submitter }) => {
				// console.log(formData);
				// console.log(action);
				// console.log(cancel);
				// console.log(form);
				// console.log(submitter);
				//! You can change the formData here before sending!
				//___________________________________
				//After request. Result.data contains status, success, message from server.
				return async ({ result, update }) => {
					console.log(result);
					if (result.type === 'success') {
						update(result);
						// invalidateAll(); ???????????????
					} else await applyAction(result);
				};
			}}
		>
			<label title="email"
				><input
					type="email"
					name="email"
					placeholder="...@example.com"
					bind:value={email}
					required
				/></label
			>
			<label title="password"
				><input type="password" name="password" placeholder="password" required /></label
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
	.fail {
		text-align: center;
	}
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
