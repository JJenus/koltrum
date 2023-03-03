<script setup>
	import Symbols from "@/components/cryptoWidget/Symbols.vue";
	import { onMounted } from "vue";
	import StatsPie from "@/components/app/StatsPie.vue";

	const AppName = import.meta.env.VITE_APP_NAME;

	onMounted(() => {});
</script>

<template>
	<div class="content container">
		<div class="pb-5">
			<div class="row g-4">
				<div class="col-12 col-xxl-6">
					<div class="mb-8">
						<h2 class="mb-2">Dashboard</h2>
						<h5 class="text-700 fw-semi-bold">
							Here’s what’s going on in your portfolio.
						</h5>
					</div>
					<div class="row align-items-center g-4">
						<div class="col-12 col-md-auto">
							<div class="d-flex align-items-center">
								<img
									src="/assets/img/icons/illustrations/4l.png"
									alt=""
									height="46"
									width="46"
								/>
								<div class="ms-3">
									<h4 class="mb-0">BTC</h4>
									<p class="text-800 fs--1 mb-0">
										0.0000434
										<span class="badge bg-primary badge-sm"
											>Premium</span
										>
									</p>
								</div>
							</div>
						</div>
						<div class="col-12 col-md-auto">
							<div class="d-flex align-items-center">
								<img
									src="/assets/img/icons/illustrations/3l.png"
									alt=""
									height="46"
									width="46"
								/>
								<div class="ms-3">
									<h4 class="mb-0">ETH</h4>
									<p class="text-800 fs--1 mb-0">
										0.0000434
										<span class="badge bg-primary badge-sm"
											>Standard</span
										>
									</p>
								</div>
							</div>
						</div>
						<div class="col-12 col-md-auto">
							<div class="d-flex align-items-center">
								<img
									src="/assets/img/icons/illustrations/2l.png"
									alt=""
									height="46"
									width="46"
								/>
								<div class="ms-3">
									<h4 class="mb-0">XRP</h4>
									<p class="text-800 fs--1 mb-0">
										0.0000434
										<span class="badge bg-primary badge-sm"
											>Starter</span
										>
									</p>
								</div>
							</div>
						</div>
					</div>
					<hr class="bg-200 mb-6 mt-4" />
					<div class="row flex-between-center mb-4 g-3">
						<div class="col-auto">
							<h3>Trends</h3>
							<p class="text-700 lh-sm mb-0">
								Current crypto trends in the globe.
							</p>
						</div>
						<div class="col-8 col-sm-4">
							<select
								class="form-select form-select-sm mt-2 d-none"
								id="select-gross-revenue-month"
							>
								<option>Mar 1 - 31, 2022</option>
								<option>April 1 - 30, 2022</option>
								<option>May 1 - 31, 2022</option>
							</select>
						</div>
					</div>

					<!-- CHART Symbo -->
					<Symbols></Symbols>
				</div>
			</div>
		</div>

		<StatsPie />
	</div>
</template>
