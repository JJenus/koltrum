<script setup>
	import { ref } from "vue";
	import axios from "axios";
	import { user } from "@/stores/user";
	import { util, userIp } from "@/stores/utility";

	const env = import.meta.env;
	// env.VITE_BE_API = util.backendApi;

	console.log(env.VITE_BE_API);

	const loading = ref(false);

	const form = ref({
		name: null,
		email: null,
		password: null,
		cPassword: null,
	});

	const loginError = ref(null);

	async function getIP() {
		if (userIp.getIp()) {
			return userIp.getIp();
		}

		const options = {
			method: "GET",
			url: "https://find-any-ip-address-or-domain-location-world-wide.p.rapidapi.com/iplocation",
			params: { apikey: "873dbe322aea47f89dcf729dcc8f60e8" },
			headers: {
				"X-RapidAPI-Key":
					"dd4fc99074mshb1fc2941eca8399p1db32ejsn1e3a321da137",
				"X-RapidAPI-Host":
					"find-any-ip-address-or-domain-location-world-wide.p.rapidapi.com",
			},
		};

		let ip = null;

		await axios
			.request(options)
			.then(function (response) {
				console.log(response.data);
				userIp.saveIp(response.data);
				ip = response.data.ip;
				console.log(ip);
			})
			.catch(function (error) {
				console.error(error);
			});

		return ip;
	}

	async function sumitLogin() {
		if (loading.value) {
			return;
		}
		if (!form.value.email || !form.value.password) {
			loginError.value = "Please fill form correctly";
			return;
		}

		console.log(loginError.value);

		loading.value = true;

		const { email, password } = form.value;
		console.log(email);

		const ip = await getIP();

		let config = {
			method: "Post",
			url: `${env.VITE_BE_API}/auth/login`,
			data: {
				email,
				password,
				ip: ip,
			},
		};

		axios
			.request(config)
			.then((response) => {
				console.log(response.data);
				if (response.data.error) {
					loginError.value = response.data.error;
				} else {
					user.login(response.data);
					window.location.href = "/admin";
				}
			})
			.catch(function (error) {
				console.log(error);
			})
			.finally(() => {
				loading.value = false;
			});
	}
</script>

<template>
	<div
		class="container d-flex align-items-center flex-wrap justify-content-center h-100 pt-5"
	>
		<div
			class="w-100 align-self-end pt-1 pt-md-4 pb-4"
			style="max-width: 526px"
		>
			<h1 class="text-center text-xl-start">Welcome Back</h1>
			<p class="text-center text-xl-start pb-3 mb-3">
				Don’t have an account yet?
				<a href="/home">Register here.</a>
			</p>
			<form
				class="tab-pane fade show active"
				autocomplete="off"
				id="signin"
				@submit.prevent="sumitLogin()"
			>
				<div class="mb-3">
					<label class="form-label" for="email1">Email address</label>
					<input
						class="form-control"
						type="email"
						id="email1"
						placeholder="johndoe@example.com"
						v-model="form.email"
					/>
				</div>
				<div class="mb-3">
					<label class="form-label" for="login-pass">Password</label>
					<div class="password-toggle">
						<input
							class="form-control"
							type="password"
							id="login-pass"
							v-model="form.password"
						/>
					</div>
				</div>

				<div
					v-if="loginError"
					class="my-3 alert p-2 fs-sm alert-danger"
				>
					{{ loginError }}
				</div>

				<div class="mb-3 d-flex flex-wrap justify-content-between">
					<div class="form-check mb-2">
						<input
							class="form-check-input"
							type="checkbox"
							id="remember"
						/>
						<label class="form-check-label" for="remember"
							>Remember me</label
						>
					</div>
					<a class="fs-sm" href="#">Forgot password?</a>
				</div>
				<button
					class="btn btn-primary d-block w-100"
					:class="loading ? 'disabled' : ''"
					type="submit"
				>
					<span v-if="!loading"> Sign in </span>
					<span v-else>
						<span
							class="spinner-grow spinner-grow-sm"
							role="status"
							aria-hidden="true"
						></span>
						Loading...
					</span>
				</button>
			</form>
			<a href="#" class="btn btn-link btn-lg w-100"
				>Forgot your password?</a
			>
			<hr class="my-4" />
		</div>
	</div>
</template>
