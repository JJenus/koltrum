<script setup>
	import { ref } from "vue";
	import Plan from "./Plan.vue";

	const crypto = ref([
		{
			symbol: "BTC",
			name: "Bitcoin",
			imageUrl:
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
			imageUrl:
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
			imageUrl:
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

	function selectCoin(coin) {
		showCoin.value = coin;
	}
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
		<div class="modal-dialog modal-md">
			<div class="modal-content overflow-hidden">
				<div
					class="modal-header p-5 px-md-6 pb-0 position-relative border-0"
				>
					<h2>Create New Project</h2>
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
							Select a coin and start creating wealth.
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
											:src="coin.imageUrl"
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
							<div class="row g-3">
								<div
									v-for="(plan, i) in showCoin.plans"
									class="col-12 col-md-6 col-lg-12 col-xl-6"
								>
									<Plan :plan="plan" :index="i" />
								</div>
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
