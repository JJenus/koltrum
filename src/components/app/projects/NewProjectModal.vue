<script setup>
	import { inject, onMounted, ref } from "vue";
	import Plan from "./Plan.vue";
	import axios from "axios";

	const AppName = import.meta.env.VITE_APP_NAME;
	const env = import.meta.env;

	const crypto = ref([
		{
			symbol: "BTC",
			name: "Bitcoin",
			logoUrl:
				"https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png",
			plans: [
				{
					title: "Starter",
					amount: 500,
					returns: 3000,
					priority: "starter",
					description: "Starter plan for everyone at the right price",
					benefits: [
						"Withraw on maturity",
						"Full support",
						"2 plans max",
					],
				},
				{
					title: "Standard",
					amount: 3200,
					returns: 10000,
					priority: "recommended",
					description: "Starter plan for everyone at the right price",
					benefits: [
						"Withraw from 60% maturity",
						"Full support",
						"Up to 5 plans",
					],
				},
				{
					title: "Premium",
					amount: 5000,
					returns: 17000,
					priority: "premium",
					description: "Starter plan for everyone at the right price",
					benefits: [
						"Withraw at anytime",
						"Full support",
						"Unlimited plans",
					],
				},
			],
		},
		{
			symbol: "ETH",
			name: "Ethereum",
			logoUrl:
				"https://thegivingblock.com/wp-content/uploads/2021/07/Ethereum-ETH-Logo.png",
			plans: [
				{
					title: "Starter",
					amount: 200,
					returns: 1000,
					priority: "starter",
					description: "Starter plan for everyone at the right price",
					benefits: [
						"Withraw on maturity",
						"Full support",
						"2 plans max",
					],
				},
				{
					title: "Standard",
					amount: 1000,
					returns: 5000,
					priority: "standard",
					description: "Starter plan for everyone at the right price",
					benefits: [
						"Withraw from 60% maturity",
						"Full support",
						"Up to 5 plans",
					],
				},
				{
					title: "Premium",
					amount: 3000,
					returns: 12000,
					priority: "recommended",
					description: "Starter plan for everyone at the right price",
					benefits: [
						"Withraw at anytime",
						"Full support",
						"Unlimited plans",
					],
				},
			],
		},
		{
			symbol: "XRP",
			name: "Ripple",
			logoUrl:
				"https://www.pngkey.com/png/full/442-4424596_ripple-ripple-crypto-logo.png",
			plans: [
				{
					title: "Basic",
					amount: 50,
					returns: 200,
					priority: "basic",
					description: "Starter plan for everyone at the right price",
					benefits: [
						"Withraw on maturity",
						"Full support",
						"2 plans max",
					],
				},
				{
					title: "Standard",
					amount: 500,
					returns: 1000,
					priority: "standard",
					description: "Starter plan for everyone at the right price",
					benefits: [
						"Withraw from 60% maturity",
						"Full support",
						"Up to 5 plans",
					],
				},
				{
					title: "Premium",
					amount: 1200,
					returns: 5000,
					priority: "recommended",
					description: "Starter plan for everyone at the right price",
					benefits: [
						"Withraw at anytime",
						"Full support",
						"Unlimited plans",
					],
				},
			],
		},
	]);

	const showCoin = ref(null);
	const makePay = ref(null);
	const settings = inject("settings");
	const loading = ref(null);
	const transactionId = ref(null);

	function selectCoin(coin) {
		showCoin.value = coin;
	}

	function makePayAndSave($event) {
		makePay.value.transactionId = transactionId.value;
	}

	function loadProjects() {
		let config = {
			method: "GET",
			url: `${env.VITE_BE_API}/projects`,
		};

		axios
			.request(config)
			.then((response) => {
				console.log("Available projects", response.data);
				crypto.value = response.data;
			})
			.catch(function (error) {
				console.log(error);
			});
	}

	onMounted(() => {
		// loadProjects();
	});
</script>

<template>
	<!-- Modal -->
	<div
		class="modal fade"
		id="projectsCardViewModal"
		tabindex="-1"
		aria-labelledby="projectsCardViewModal"
		aria-hidden="true"
	>
		<div class="modal-dialog modal-fullscreen-sm-down">
			<div class="modal-content overflow-hidden">
				<div
					class="modal-header p-5 px-md-6 pb-0 position-relative border-0"
				>
					<h2>{{ $t("app.project.cpj") }}</h2>
					<button
						class="btn btn-circle btn-outline-secondary border-0 position-absolute end-0 top-0 mt-3 me-3"
						style="--phoenix-bg-opacity: 0.64"
						data-bs-dismiss="modal"
					>
						<i class="fa-solid fa-times fs-2"></i>
					</button>
				</div>
				<div class="modal-body p-5 px-md-6 pt-0 mb-4">
					<div v-if="!showCoin">
						<p class="mb-4">
							{{ $t("app.project.slc") }}
						</p>
						<div class="row">
							<div
								v-for="coin in crypto"
								class="col-6 col-md-4 mb-4"
							>
								<button
									class="w-100 btn d-flex fw-bold py-3 fs-1 flex-column justify-items-center align-items-center btn-outline-secondary"
									@click="selectCoin(coin)"
								>
									<div class="mb-2">
										<img
											:src="coin.logoUrl"
											class="w-100 crypto"
										/>
									</div>
									<span class="">{{ coin.symbol }}</span>
								</button>
							</div>
						</div>
					</div>

					<!-- Select plan -->
					<div v-else>
						<p class="mb-4">
							<a
								@click="showCoin = null"
								class="me-4 ms-1 fs-1"
								href="#"
							>
								<i class="fa-solid fa-arrow-left"></i>
							</a>
							Select prefered plan
						</p>

						<div>
							<h5 class="">
								{{ showCoin?.name }} ({{ showCoin?.symbol }})
							</h5>
							<hr class="mb-2" />
							<div class="row g-3" v-if="!makePay">
								<div
									v-for="(plan, i) in showCoin.plans"
									class="col-12 col-md-6 col-lg-12 col-xl-6"
								>
									<Plan
										:plan="plan"
										:index="i"
										@click="makePay = plan"
									/>
								</div>
							</div>
							<div v-else>
								<div>Plan: {{ makePay.title }}</div>
								<div class="mb-3">
									{{ $t("app.project.pay.amount") }}: {{ makePay.amount }}
								</div>
								<div class="border rounded p-3 fs-xs mb-4">
									{{ $t("app.project.pay.dir") }}
									<h5 class="mt-3">
										BTC: {{ "10kkXghst4jhdjfh" }}
									</h5>
								</div>
								<form
									action=""
									@submit.prevent="makePayAndSave($event)"
								>
									<div class="mb-3">
										<label for="transactionId"
											>{{ $t("app.project.pay.transid") }}</label
										>
										<input
											type="text"
											class="form-control"
											placeholder="Enter transaction"
											v-model="transactionId"
										/>
									</div>
									<div>
										<button
											@click="makePay = null"
											class="btn btn-secondary me-2"
										>
											{{ $t("back") }}
										</button>
										<button class="btn btn-primary">
											<span v-if="!loading">{{
												$t("submit")
											}}</span>
											<span
												v-else
												class="spinner-border spinner-border-sm"
											></span>
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
</template>

<style scoped>
	.crypto {
		height: 70px;
	}
</style>
