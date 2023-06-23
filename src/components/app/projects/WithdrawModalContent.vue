<script setup>
	import { computed, inject, onMounted, ref } from "vue";
	import { alert, util } from "@/stores/utility";

	const props = defineProps({
		project: {
			required: true,
		},
	});

	const env = import.meta.env;
	const AppName = env.VITE_APP_NAME;
	const method = ref("bank");
	const user = inject("user");
	const makePayment = ref(null);
	const maxValue = ref(props.project.value);
	const pending = ref(false);

	const form = ref({
		userId: user.id,
		amount: 0,
		currency: "",
		transactionRef: "",
		status: "pending",
		destinationType: "",
		destinationId: "",
	});

	const icon = computed(() => {
		let s = "fas fa-bank";
		if (method == "skrill") return "fab fa-skrill-s";
		else if (method == "bank") return "fas fa-bank";
		else "fab fa-" + method;

		return s;
	});

	function changeMethod(action) {
		if (action === method.value) {
			return "btn-phoenix-primary";
		}

		return "btn-phoenix-secondary";
	}

	function next() {
		if (method.value === null) {
			alert.error("Payment method", "Select preferred method");
			return;
		} else if (
			Number(form.value.amount) <= 0 ||
			Number(form.value.amount) > maxValue.value
		) {
			// console.log(form.value.amount);
			const formated = maxValue.value;
			alert.error(
				"Invalid amount",
				`Amount must be greater than 0 and not be more than current balance (${formated})`
			);
			return;
		}

		if (!form.value.destinationId) {
			alert.error("All fields are required");
			return;
		}
		if (method.value === "bank") {
			if (!form.value.destinationType || !form.value.transactionRef) {
				alert.error("All fields are required");
				return;
			}
		}

		pending.value = true;
		alert.success("Pending withdrawal", "Please contact support");
		props.project.value =
			Number(props.project.value) - Number(form.value.amount);
		maxValue.value = props.project.value;
		props.project.plan.returns =
			Number(props.project.plan.returns) - Number(form.value.amount);

		// if (method.value === AppName) {
		// 	makePayment.value = true;
		// } else if (user.value.status === "pending") {
		// 	alert.info(
		// 		"Pending verification",
		// 		"Your verification is being processed. Please contact support if it's more than 48 hours."
		// 	);
		// } else if (user.value.status !== "verified") {
		// 	alert.verify();
		// } else {
		// 	makePayment.value = true;
		// }
	}

	onMounted(() => {
		window.debug.log(props.project);
	});
</script>

<template>
	<div class="modal-content border rounded-4">
		<div class="modal-header position-relative border-0">
			<div
				class="d-flex justify-content-center align-items-end w-100 fs-2"
				id="staticBackdropLabel"
			>
				<i :class="icon" class="me-2 fs-1 mb-2 pb-1"></i>
				<span class="">Withdraw</span>
			</div>
			<div class="position-absolute p-0 m-3 top-0 end-0">
				<button
					class="btn btn-circle btn-outline-secondary border-0"
					style="--phoenix-bg-opacity: 0.64"
					data-bs-dismiss="modal"
				>
					<i class="fa-solid fa-times fs-2"></i>
				</button>
			</div>
		</div>
		<div class="modal-body">
			<div class="d-flex justify-content-center">
				<div v-show="makePayment">
					<h5 class="text-capitalize ms-n3">
						<a
							class="btn-link"
							href="#"
							@click="makePayment = false"
						>
							<i class="bx bx-left-arrow-alt me-2"></i>
						</a>
						{{ method }}
					</h5>
				</div>

				<div v-show="!makePayment">
					<div class="mb-3">
						<div class="text-end small fw-bold">
							<a
								@click="form.amount = maxValue"
								role="button"
								class="btn-link"
							>
								Max</a
							>: {{ util.money(maxValue) }}
						</div>
						<input
							class="form-control text-dark text-center fw-bold form-control-lg"
							data-format='{"numeral": true}'
							type="text"
							v-model="form.amount"
						/>
					</div>
					<div class="mb-3">
						<div class="mb-2 fw-bold">
							Withdraw to:
							<span class="text-primary">{{ method }}</span>
						</div>
						<div v-if="method == 'bank'">
							<div
								class="form-floating mb-3"
								bis_skin_checked="1"
							>
								<input
									class="form-control"
									id="bank"
									type="text"
									placeholder="Barckleys"
									v-model="form.destinationType"
								/>
								<label for="bank">Bank </label>
							</div>
							<div
								class="form-floating mb-3"
								bis_skin_checked="1"
							>
								<input
									class="form-control"
									id="beneficiary"
									type="text"
									placeholder="beneficiary name"
									v-model="form.transactionRef"
								/>
								<label for="beneficiary"> Account name </label>
							</div>
							<div class="form-floating" bis_skin_checked="1">
								<input
									class="form-control"
									id="account-number"
									type="number"
									placeholder="1234567890"
									v-model="form.destinationId"
								/>
								<label for="account-number">
									Account number
								</label>
							</div>
						</div>
						<div v-else>
							<div class="form-floating" bis_skin_checked="1">
								<input
									class="form-control is-inivalid"
									id="email"
									type="email"
									placeholder="beneficiary name"
									v-model="form.destinationId"
								/>
								<label for="email"> {{ method }} email </label>
							</div>
						</div>
					</div>

					<div class="mb-5">
						<div class="mb-2 fw-bold">Or</div>
						<div class="d-flex">
							<button
								@click="method = 'bank'"
								:class="changeMethod('bank')"
								class="btn rounded-pill me-1 mb-1"
								type="button"
							>
								<span
									class="fas fa-bank me-1"
									data-fa-transform="shrink-3"
								>
								</span>
								Bank
							</button>

							<button
								@click="method = 'paypal'"
								:class="changeMethod('paypal')"
								class="btn rounded-pill me-1 mb-1"
								type="button"
							>
								<span
									class="fab fa-paypal me-1"
									data-fa-transform="shreink-2u"
								>
								</span>
								Paypal
							</button>

							<button
								@click="method = 'skrill'"
								:class="changeMethod('skrill')"
								class="btn rounded-pill me-1 mb-1"
								type="button"
							>
								<span
									class="fab fa-stripe-s me-1"
									data-fa-transform="shrink-3"
								>
								</span>
								Skrill
							</button>
						</div>
					</div>
					<button
						class="btn btn-secondary d-block w-100"
						type="submit"
						@click="next()"
					>
						<span>
							Send
							<span v-if="method">
								to
								<span class="text-capitalize">
									{{ method }}
								</span>
							</span>
						</span>
					</button>
				</div>
			</div>
		</div>
	</div>
</template>
