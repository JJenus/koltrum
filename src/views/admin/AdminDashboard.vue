<script setup>
	import Footer from "../../components/app/Footer.vue";
</script>

<template>
	<div class="row mb-6 justify-content-between">
		<div class="col-md-9 col-auto">
			<h2 class="mb-2 text-1100">Admin Dashboard</h2>
			<h5 class="text-700 fw-semi-bold">
				Here’s what’s going on at your business right now
			</h5>
		</div>
		<div class="col-md-3 col-auto"></div>
	</div>
	<div class="row align-items-center g-4">
		<div class="col-12 col-md-4">
			<div class="card">
				<div class="card-body d-flex align-items-center">
					<i class="fa-solid fa-coins"></i>
					<div class="ms-3">
						<h4 class="mb-0">108</h4>
						<p class="text-800 fs--1 mb-0">Projects</p>
					</div>
				</div>
			</div>
		</div>
		<div class="col-12 col-md-4">
			<div class="card">
				<div class="card-body d-flex align-items-center">
					<i class="fa-solid fa-money-check"></i>
					<div class="ms-3">
						<h4 class="mb-0">108</h4>
						<p class="text-800 fs--1 mb-0">Subscription Plans</p>
					</div>
				</div>
			</div>
		</div>
		<div class="col-12 col-md-4">
			<div class="card">
				<div class="card-body d-flex align-items-center">
					<i class="fa-solid fa-money-bill-trend-up"></i>
					<div class="ms-3">
						<h4 class="mb-0">108</h4>
						<p class="text-800 fs--1 mb-0">Ongoing Projects</p>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="row mt-4">
		<div class="col-lg-4 col-md-12 col-12">
			<div class="card mb-4">
				<div class="p-4">
					<span class="btn-icon btn btn-outline-primary rounded-3">
						<i class="fa-solid fa-dollar"></i>
					</span>
					<h2 class="h1 fw-bold mb-0 mt-4 lh-1">€2,316,032.00</h2>
					<p>Total Subscriptions</p>
					<div class="progress bg-light-primary" style="height: 2px">
						<div
							class="progress-bar"
							role="progressbar"
							aria-valuenow="65"
							aria-valuemin="0"
							aria-valuemax="100"
							style="width: 65%"
						></div>
					</div>
				</div>
			</div>
		</div>
		<div class="col-lg-4 col-md-12 col-12">
			<div class="card mb-4">
				<div class="p-4">
					<span class="btn-icon btn btn-outline-info rounded-3">
						<i class="fa-solid fa-user-group text-primary"></i>
					</span>
					<h2 class="h1 fw-bold mb-0 mt-4 lh-1">16</h2>
					<p>Total Users</p>
					<div class="progress bg-light-danger" style="height: 2px">
						<div
							class="progress-bar bg-info"
							role="progressbar"
							aria-valuenow="45"
							aria-valuemin="0"
							aria-valuemax="100"
							style="width: 45%"
						></div>
					</div>
				</div>
			</div>
		</div>
		<div class="col-lg-4 col-md-12 col-12">
			<div class="card mb-4">
				<div class="p-4">
					<span class="btn-icon btn btn-outline-warning rounded-3">
						<i class="fa-solid fa-circle-dollar-to-slot"></i>
					</span>
					<h2 class="h1 fw-bold mb-0 mt-4 lh-1">€0.00</h2>
					<p>Confirmed Subscriptions</p>
					<div class="progress bg-light-warning" style="height: 2px">
						<div
							class="progress-bar bg-warning"
							role="progressbar"
							aria-valuenow="35"
							aria-valuemin="0"
							aria-valuemax="100"
							style="width: 35%"
						></div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped></style>
