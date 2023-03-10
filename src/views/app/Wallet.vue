<script setup>
	import { computed, onMounted, ref } from "vue";

	const AppName = import.meta.env.VITE_APP_NAME;

	onMounted(() => {});
</script>

<template>
	<div class="content container">
		<div
			class="row gx-6 gy-3 mb-5 align-items-center justify-content-between"
		>
			<div class="col-auto">
				<h2 class="mb-0">
					Wallets
					<span class="fw-normal d-none text-700 ms-3">(3)</span>
				</h2>
			</div>
			<div class="col-12 col-sm-auto">
				<div class="d-flex align-items-center">
					<div class="search-box me-3">
						<form
							class="position-relative"
							data-bs-toggle="search"
							data-bs-display="static"
						>
							<input
								class="form-control search-input search"
								type="search"
								placeholder="Search projects"
								aria-label="Search"
							/>
							<span class="fas fa-search search-box-icon"></span>
						</form>
					</div>
				</div>
			</div>
		</div>

		<div class="row align-items-center g-3">
			<div class="col-12 card">
				<div class="d-flex align-items-center card-body">
					<img
						src="/assets/img/icons/illustrations/4l.png"
						alt=""
						height="46"
						width="46"
					/>
					<div class="ms-3">
						<h5 class="mb-1">
							BTC
							<span class="text-800 fs--1 mb-0 fw-light"
								>0.02300434</span
							>
						</h5>
						<p class="text-800 fw-bold fs--1 mb-0">$157,071</p>
					</div>
				</div>
			</div>
			<div class="col-12 card">
				<div class="d-flex align-items-center card-body">
					<img
						src="/assets/img/icons/illustrations/3l.png"
						alt=""
						height="46"
						width="46"
					/>
					<div class="ms-3">
						<h5 class="mb-1">
							ETH
							<span class="text-800 fs--1 mb-0 fw-light"
								>0.0000434</span
							>
						</h5>
						<p class="text-800 fw-bold fs--1 mb-0">$14,000</p>
					</div>
				</div>
			</div>
			<div class="col-12 card">
				<div class="d-flex align-items-center card-body">
					<img
						src="/assets/img/icons/illustrations/2l.png"
						alt=""
						height="46"
						width="46"
					/>
					<div class="ms-3">
						<h5 class="mb-1">
							XRP
							<span class="text-800 fs--1 mb-0 fw-light"
								>0.0000434</span
							>
						</h5>
						<p class="text-800 fw-bold fs--1 mb-0">$24,000</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
