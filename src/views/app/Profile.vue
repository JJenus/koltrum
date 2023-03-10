<script setup>
	import { computed, onMounted, ref } from "vue";

	const AppName = import.meta.env.VITE_APP_NAME;

	const projects = [
		{
			value: 60,
			name: "BTC",
			status: "completed",
			plan: {
				name: "Premium",
				amount: 3000,
				returns: 10000,
			},
			itemStyle: {
				color: "#f2a900",
			},
		},
		{
			value: 2538,
			name: "ETH",
			status: "cancelled",
			plan: {
				name: "Starter",
				amount: 500,
				returns: 3000,
			},
			itemStyle: {
				color: "#c99d66",
			},
		},
		{
			value: 1562,
			name: "XRP",
			status: "ongoing",
			plan: {
				name: "Standard",
				amount: 1000,
				returns: 6000,
			},
			itemStyle: {
				color: "#006097",
			},
		},
	];

	const form = ref({
		name: null,
		email: null,
		address: null,
		phone: null,
		country: null,
	});

	function total(type = "all") {
		return projects.reduce((p, c) => {
			let val = 0;
			if (type == "all" || type == c.status) val = p + 1;
			else val = p;

			return val;
		}, 0);
	}

	function save() {
		console.log("Yes");
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
									class="card-body d-flex flex-column justify-content-between pb-3"
								>
									<div
										class="row align-items-center g-5 mb-3 text-center text-sm-start"
									>
										<div class="col-12 col-sm-auto mb-sm-2">
											<div class="avatar avatar-5xl">
												<img
													class="rounded-circle"
													src="/assets/img/team/15.png"
													alt=""
												/>
											</div>
										</div>
										<div class="col-12 col-sm-auto flex-1">
											<h3>Ansolo Lazinatov</h3>
											<p class="text-800">
												Joined 3 months ago
											</p>
										</div>
									</div>
									<div
										class="d-flex flex-between-center border-top border-dashed border-300 pt-4"
									>
										<div>
											<h6>Projects</h6>
											<p class="fs-1 text-800 mb-0">
												{{ total() }}
											</p>
										</div>
										<div>
											<h6>Completed</h6>
											<p
												class="fs-1 text-800 mb-0 text-success"
											>
												{{ total("completed") }}
											</p>
										</div>
										<div>
											<h6>Cancelled</h6>
											<p
												class="fs-1 text-800 mb-0 text-danger"
											>
												{{ total("cancelled") }}
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
										Shatinon Mekalan<br />Vancouver, British
										Columbia<br />Canada
									</p>
									<div class="mb-3">
										<h5 class="text-800">Email</h5>
										<a href="mailto:shatinon@jeemail.com"
											>shatinon@jeemail.com</a
										>
									</div>
									<h5 class="text-800">Phone</h5>
									<a class="text-800" href="tel:+1234567890"
										>+1234567890</a
									>
								</div>
							</div>
						</div>
						<div class="col-12">
							<div class="card h-100">
								<div class="card-body">
									<h3 class="mb-4">Edit Details</h3>

									<!-- FORM -->

									<form @submit.prevent="save()">
										<div class="form-floating mb-3">
											<input
												class="form-control"
												id="name"
												name="name"
												type="text"
												:value="form.name"
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
												:value="form.email"
											/>
											<label for="email">Email</label>
										</div>
										<div class="form-floating mb-3">
											<input
												class="form-control"
												id="phone"
												name="phone"
												type="text"
												:value="form.phone"
											/>
											<label for="phone">Phone</label>
										</div>
										<div class="form-floating mb-3">
											<input
												class="form-control"
												id="country"
												name="country"
												type="text"
												:value="form.country"
											/>
											<label for="country">Country</label>
										</div>

										<div class="form-floating mb-3">
											<textarea
												class="form-control"
												id="address"
												style="height: 100px"
												:value="form.address"
											></textarea>
											<label for="address">Address</label>
										</div>

										<div>
											<button
												type="submit"
												class="btn btn-primary w-100"
											>
												Save
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
