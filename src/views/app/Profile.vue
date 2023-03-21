<script setup>
	import { computed, inject, onMounted, ref } from "vue";
	import * as filestack from "filestack-js";
	import axios from "axios";
	import { alert, util } from "../../stores/utility";

	const AppName = import.meta.env.VITE_APP_NAME;
	const env = import.meta.env;
	const user = inject("user");

	// const projects = [
	// 	{
	// 		value: 60,
	// 		name: "BTC",
	// 		status: "completed",
	// 		plan: {
	// 			name: "Premium",
	// 			amount: 3000,
	// 			returns: 10000,
	// 		},
	// 		itemStyle: {
	// 			color: "#f2a900",
	// 		},
	// 	},
	// 	{
	// 		value: 2538,
	// 		name: "ETH",
	// 		status: "cancelled",
	// 		plan: {
	// 			name: "Starter",
	// 			amount: 500,
	// 			returns: 3000,
	// 		},
	// 		itemStyle: {
	// 			color: "#c99d66",
	// 		},
	// 	},
	// 	{
	// 		value: 1562,
	// 		name: "XRP",
	// 		status: "ongoing",
	// 		plan: {
	// 			name: "Standard",
	// 			amount: 1000,
	// 			returns: 6000,
	// 		},
	// 		itemStyle: {
	// 			color: "#006097",
	// 		},
	// 	},
	// ];

	const form = ref({
		name: user.value.name,
		email: user.value.email,
		address: user.value.address,
		phone: user.value.phone,
		country: user.value.country,
		imgUrl: null,
	});

	const tempImg = ref(
		"https://icon-library.com/images/user-image-icon/user-image-icon-19.jpg"
	);
	const changed = ref(false);

	const apikey = env.VITE_FSHARE_KEY;
	const client = filestack.init(apikey);

	const loading = ref(false);
	const imgFile = ref(null);
	const savedImg = ref(false);

	const showImage = computed(() => {
		if (changed.value || !user.value.imgUrl) {
			return tempImg.value;
		}
		return user.value.imgUrl;
	});

	function saveImage() {
		changed.value = false;
		client
			.upload(imgFile.value)
			.then((res) => {
				console.log("success: ", res);
				form.value.imgUrl = res.url;
				save();
				savedImg.value = true;
			})
			.catch((err) => {
				console.log(err);
				alert.error("Failed", "Please check your connection.");
			});
	}

	function revert() {
		changed.value = false;
		savedImg.value = false;
		// user.value.imgUrl = user.getUser().imgUrl;
	}

	function selectImage() {
		const input = document.querySelector("#select-profile-image");
		input.click();
	}

	function newImage(evt) {
		const input = evt.target;

		if (input.files && input.files[0]) {
			imgFile.value = input.files[0];
			tempImg.value = URL.createObjectURL(input.files[0]);
			changed.value = true;
		}
	}

	function submit($evt) {
		if (!$evt.target.checkValidity()) return;
		loading.value = true;
		if (changed.value) {
			saveImage();
		} else save();
	}

	function save() {
		const saveData = user.value;

		saveData.name = form.value.name;
		saveData.email = form.value.email;
		saveData.country = form.value.country;
		saveData.phone = form.value.phone;
		saveData.address = form.value.address;
		if (form.value.imgUrl) saveData.imgUrl = form.value.imgUrl;

		console.log("SAVE DATA: ", saveData);

		let config = {
			method: "PUT",
			url: `${env.VITE_BE_API}/users`,
			data: saveData,
		};
		axios
			.request(config)
			.then((res) => {
				const data = res.data;
				user.value = data;
				console.log(data);

				alert.success("Success");
			})
			.catch((err) => {
				alert.error("Failed");
				console.log(err);
			})
			.finally(() => {
				loading.value = false;
			});
	}

	function total(type = "all") {
		return projects.reduce((p, c) => {
			let val = 0;
			if (type == "all" || type == c.status) val = p + 1;
			else val = p;

			return val;
		}, 0);
	}

	onMounted(() => {});
</script>

<template>
	<div class="content container">
		<div class="mb-9">
			<div
				class="row align-items-center justify-content-between g-3 mb-4"
			>
				<div class="col-auto">
					<h2 class="mb-0">Profile</h2>
				</div>
				<div class="col-auto">
					<div class="row g-3">
						<div class="col-auto">
							<button class="btn btn-phoenix-danger">
								<span class="fa-solid fa-trash-can me-2"></span
								>Delete account
							</button>
						</div>
						<div class="col-auto">
							<button class="btn btn-phoenix-secondary">
								<span class="fas fa-key me-2"></span>Reset
								password
							</button>
						</div>
					</div>
				</div>
			</div>
			<div class="row g-5">
				<div class="col-12 col-xxl-4">
					<div class="row g-3 g-xxl-0 h-100">
						<div class="col-12 col-md-7 col-xxl-12 mb-xxl-3">
							<div class="card h-100">
								<div
									class="card-body d-flex flex-column justify-content-center align-items-center pb-3"
								>
									<div
										class="row align-items-center g-5 mb-3 text-center text-sm-start"
									>
										<div
											class="col-12 col-sm-auto mb-sm-2 position-relative"
										>
											<div class="avatar avatar-5xl">
												<img
													class="rounded-circle"
													:src="showImage"
													alt="DP"
												/>
												<div
													class="w-100 h-100 position-absolute top-0 left-0 bg-transparent d-flex align-items-center justify-content-center"
												>
													<button
														@click="selectImage()"
														:class="user.imgUrl? '':'opacity-50' "
														class="btn btn-outline-secondary rounded-circle px-3 py-3"
													>
														<i
															class="fa fa-plus"
														></i>
													</button>
													<input
														type="file"
														id="select-profile-image"
														class="d-none"
														accept="image/png, image/gif, image/jpeg"
														@change="
															newImage($event)
														"
													/>
												</div>
											</div>
										</div>
										<div class="col-12 col-sm-auto flex-1">
											<h3>{{ user.name }}</h3>
											<p class="text-800">
												{{
													util.timeAgo(user.createdAt)
												}}
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="col-12 col-md-5 col-xxl-12 mb-xxl-3">
							<div class="card h-100">
								<div class="card-body pb-3">
									<div class="d-flex align-items-center mb-3">
										<h3 class="me-1">Default Address</h3>
										<button class="btn btn-link p-0">
											<span
												class="fas fa-pen fs-0 ms-3 text-500"
											></span>
										</button>
									</div>
									<h5 class="text-800">Address</h5>
									<p class="text-800">
										{{ user.address }}
										<span
											v-if="!user.address"
											class="muted small"
											>(No address added)</span
										>
										<br />{{ user.country }}
									</p>
									<div class="mb-3">
										<h5 class="text-800">Email</h5>
										<a :href="'mailto:' + user.email">
											{{ user.email }}
										</a>
									</div>
									<h5 class="text-800">Phone</h5>
									<a
										class="text-800"
										:href="'tel:' + user.phone"
									>
										{{ user.phone }}
										<span
											v-if="!user.phone"
											class="muted small"
											>(No phone number added)</span
										>
									</a>
								</div>
							</div>
						</div>
						<div class="col-12">
							<div class="card h-100">
								<div class="card-body">
									<h3 class="mb-4">Edit Details</h3>

									<!-- FORM -->

									<form @submit.prevent="submit($event)">
										<div class="form-floating mb-3">
											<input
												class="form-control"
												id="name"
												name="name"
												type="text"
												v-model="form.name"
											/>
											<label for="floatingInputValid"
												>Name</label
											>
										</div>
										<div class="form-floating">
											<input
												class="form-control mb-3"
												name="email"
												id="email"
												type="email"
												v-model="form.email"
											/>
											<label for="email">Email</label>
										</div>
										<div class="form-floating mb-3">
											<input
												class="form-control"
												id="phone"
												name="phone"
												type="text"
												v-model="form.phone"
											/>
											<label for="phone">Phone</label>
										</div>
										<div class="form-floating mb-3">
											<input
												class="form-control"
												id="country"
												name="country"
												type="text"
												v-model="form.country"
											/>
											<label for="country">Country</label>
										</div>

										<div class="form-floating mb-3">
											<textarea
												class="form-control"
												id="address"
												style="height: 100px"
												v-model="form.address"
											></textarea>
											<label for="address">Address</label>
										</div>

										<div>
											<button
												type="submit"
												class="btn btn-primary w-100"
												:class="
													loading ? 'disabled' : ''
												"
											>
												<span v-if="!loading">
													Save changes
												</span>
												<span v-else>
													<span
														class="spinner-border spinner-border-sm me-1"
														role="status"
														aria-hidden="true"
													></span>
													Saving...
												</span>
											</button>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
