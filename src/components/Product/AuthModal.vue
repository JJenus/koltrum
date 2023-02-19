<script setup>
	import { ref } from "vue";
	import axios from "axios";
	import { user } from "@/stores/user";
	import { util, userIp } from "@/stores/utility";

	const env = import.meta.env;
	env.VITE_BE_API = util.backendApi;

	console.log(env.VITE_BE_API);

	const signIn = ref(true);

	const loadingReg = ref(false);

	const form = ref({
		name: null,
		email: null,
		password: null,
		cPassword: null,
	});

	const regError = ref(null);
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

	async function register() {
		regError.value = null;

		if (loadingReg.value) {
			return;
		}
		if (
			!form.value.email ||
			!form.value.name ||
			!form.value.password ||
			!form.value.cPassword
		) {
			regError.value = "Please fill form correctly";
			return;
		}

		console.log(regError.value);

		if (form.value.password !== form.value.cPassword) {
			regError.value = "Passwords don't match";
			return;
		}

		loadingReg.value = true;

		const { name, email, password } = form.value;
		console.log(email);

		const ip = await getIP();

		let config = {
			method: "Post",
			url: `${env.VITE_BE_API}/auth/register`,
			data: {
				name,
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
					regError.value = response.data.error;
				} else {
					user.login(response.data);
					window.location.href = "/app";
				}
			})
			.catch(function (error) {
				console.log(error);
			})
			.finally(() => {
				loadingReg.value = false;
			});
	}

	async function sumitLogin() {
		if (loadingReg.value) {
			return;
		}
		if (!form.value.email || !form.value.password) {
			loginError.value = "Please fill form correctly";
			return;
		}

		console.log(loginError.value);

		loadingReg.value = true;

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
					window.location.href = "/app";
				}
			})
			.catch(function (error) {
				console.log(error);
			})
			.finally(() => {
				loadingReg.value = false;
			});
	}

	function toggleSignIn() {
		signIn.value = !signIn.value;
	}
</script>

<template>
	<!-- Modal with tabs and forms -->
	<div class="modal" id="auth-modal" tabindex="-1" role="dialog">
		<div class="modal-dialog modal-fullscreen-sm-downi" role="document">
			<div class="modal-content position-relative">
				<button
					class="btn-close position-absolute m-3"
					style="right: 0; z-index: 2000"
					type="button"
					aria-label="Close"
					data-bs-dismiss="modal"
				></button>
				<!-- Modal body with tab panes -->
				<div class="modal-body py-4">
					<div class="row flex-center py-5">
						<div class="col-sm-10">
							<div class="d-flex flex-center mb-4">
								<div
									class="d-flex align-items-center fw-bolder fs-5 d-inline-block"
								>
									<img
										src="/assets/img/icons/logo.png"
										alt="koltrum"
										width="58"
									/>
								</div>
							</div>

							<div v-if="signIn">
								<div class="text-center mb-5">
									<h3 class="text-1000">Sign In</h3>
									<p class="text-700">
										Get access to your account
									</p>
								</div>

								<form
									class="needs-validation"
									novalidate
									@submit.prevent="sumitLogin()"
								>
									<div class="mb-3 text-start">
										<label class="form-label" for="email"
											>Email address</label
										>
										<div class="form-icon-container">
											<input
												required
												class="form-control form-icon-input"
												id="email"
												type="email"
												placeholder="name@example.com"
											/><span
												class="fas fa-user text-900 fs--1 form-icon"
											></span>
										</div>
									</div>
									<div class="mb-3 text-start">
										<label class="form-label" for="password"
											>Password</label
										>
										<div class="form-icon-container">
											<input
												required
												class="form-control form-icon-input"
												id="password"
												type="password"
												placeholder="Password"
											/><span
												class="fas fa-key text-900 fs--1 form-icon"
											></span>
										</div>
									</div>
									<div class="row flex-between-center mb-7">
										<div class="col-auto">
											<div class="form-check mb-0">
												<input
													required
													class="form-check-input"
													id="basic-checkbox"
													type="checkbox"
													checked="checked"
												/><label
													class="form-check-label mb-0"
													for="basic-checkbox"
													>Remember me</label
												>
											</div>
										</div>
										<div class="col-auto">
											<a
												class="fs--1 fw-semi-bold"
												href="forgot-password.html"
												>Forgot Password?</a
											>
										</div>
									</div>
									<button class="btn btn-primary w-100 mb-3">
										Sign In
									</button>
									<div class="text-center">
										<a
											class="fs--1 fw-bold"
											href="#"
											@click="toggleSignIn()"
										>
											Create an account
										</a>
									</div>
								</form>
							</div>

							<div v-else>
								<div class="text-center mb-7">
									<h3 class="text-1000">Sign Up</h3>
									<p class="text-700">
										Create your account today
									</p>
								</div>

								<form
									class="needs-validation"
									novalidate
									@submit.prevent="register()"
								>
									<div class="mb-3 text-start">
										<label class="form-label" for="name"
											>Name</label
										>
										<input
											required
											class="form-control"
											id="name"
											type="text"
											placeholder="Name"
										/>
									</div>
									<div class="mb-3 text-start">
										<label class="form-label" for="email"
											>Email address</label
										>
                                        <input
											required
											class="form-control"
											id="email"
											type="email"
											placeholder="name@example.com"
										/>
									</div>
									<div class="row g-3 mb-3">
										<div class="col-md-6">
											<label
												class="form-label"
												for="password"
												>Password</label
											>
											<input
												required
												class="form-control form-icon-input"
												id="password"
												type="password"
												placeholder="Password"
											/>
										</div>
										<div class="col-md-6">
											<label
												class="form-label"
												for="confirmPassword"
												>Confirm Password</label
											><input
												required
												class="form-control form-icon-input"
												id="confirmPassword"
												type="password"
												placeholder="Confirm Password"
											/>
										</div>
									</div>
									<div class="form-check mb-3">
										<input
											required
											class="form-check-input"
											id="termsService"
											type="checkbox"
										/><label
											class="form-label fs--1 text-none"
											for="termsService"
											>I accept the
											<a href="#!">terms </a>and
											<a href="#!"
												>privacy policy</a
											></label
										>
									</div>
									<button
										type="submit"
										class="btn btn-primary w-100 mb-3"
									>
										Sign up
									</button>
									<div class="text-center">
										<a
											class="fs--1 fw-bold"
											@click="toggleSignIn()"
											href="#"
											>Sign in to an existing account</a
										>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
