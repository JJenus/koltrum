<script setup>
	import { inject, onMounted, ref } from "vue";
	import Plan from "./Plan.vue";
	import { alert, koltrum } from "@/stores/utility";
	import axios from "axios";

	const env = import.meta.env;

	const crypto = ref([]);

	const showCoin = ref(null);
	const makePay = ref(null);
	const settings = inject("settings");
	const loading = ref(null);
	const transactionId = ref(null);

	const user = inject("user");

	const subscribe = ref({
		userId: user.value.id,
		status: "pending",
		transactionId: null,
		plan: null,
		project: null,
	});

	function selectCoin(coin) {
		showCoin.value = coin;
	}

	function makePayAndSave(e) {
		if (!e.target.checkValidity()) {
			alert.error("Form Error", "Please enter a valid transaction ID");
			return;
		}

		subscribe.value.transactionId = transactionId.value;
		subscribe.value.plan = makePay.value;
		subscribe.value.project = showCoin.value;
		loading.value = true;

		let config = {
			method: "POST",
			url: `${env.VITE_BE_API}/users/subscribe`,
			data: subscribe.value,
		};

		axios
			.request(config)
			.then((response) => {
				console.log("user projects", response.data);
				alert.success();
			})
			.catch(function (error) {
				console.log(error);
			})
			.finally(() => {
				loading.value = false;
			});
	}

	onMounted(async () => {
		crypto.value = await koltrum.loadProjects();
		console.log(settings.value);
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
						<div
							v-if="crypto.length == 0"
							class="text-center text-muted fs-sm"
						>
							<span
								class="spinner-border spinner-border-sm me-2"
							></span
							>{{ $t("loading") + "..." }}
						</div>
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
									{{ $t("app.project.pay.amount") }}:
									{{ makePay.amount }}
								</div>
								<div class="border rounded p-3 fs-xs mb-4">
									{{ $t("app.project.pay.dir") }}
									<h5 class="mt-3">
										{{ settings.cryptoName }}:
										{{ settings.walletAddress }}
									</h5>
								</div>
								<form
									action=""
									@submit.prevent="makePayAndSave($event)"
								>
									<div class="mb-3">
										<label for="transactionId">{{
											$t("app.project.pay.transid")
										}}</label>
										<input
											type="text"
											class="form-control"
											placeholder="Enter transaction"
											v-model="transactionId"
											required
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
