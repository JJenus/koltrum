<script setup>
	import { onMounted, ref } from "vue";
	import axios from "axios";

	import { alert } from "@/stores/utility";

	const env = import.meta.env;
	const settings = ref({
		currency: "USD",
		language: "en",
		currencySymbol: "$",
		walletAddress: "unknown",
		cryptoName: "BTC",
	});

	const currencies = {
		USD: {
			code: "USD",
			symbol: "$",
		},
		GBR: {
			code: "GBR",
			symbol: "£",
		},
		EUR: {
			code: "EUR",
			symbol: "€",
		},
	};
	const selectedCurrency = ref(null);
	const selectedLang = ref(null);

	const lang = ref();
	const currency = ref();

	const searchKey = ref(null);

	const loading = ref(false);

	function save($event) {
		if (!$event.target.checkValidity()) {
			return;
		}

		settings.value.currency = currencies[selectedCurrency.value].code;
		settings.value.currencySymbol =
			currencies[selectedCurrency.value].symbol;

		// console.log(settings.value);

		loading.value = true;

		let config = {
			method: "POST",
			url: `${env.VITE_BE_API}/settings`,
			data: settings.value,
		};

		axios
			.request(config)
			.then((response) => {
				console.log(response.data);
				settings.value = response.data;
				alert.success();
			})
			.catch(function (error) {
				alert.error("Failed");
			})
			.finally(() => {
				loading.value = false;
			});
	}

	async function loadSettings() {
		let config = {
			method: "GET",
			url: `${env.VITE_BE_API}/settings`,
		};

		axios
			.request(config)
			.then((response) => {
				settings.value = response.data;
				selectedCurrency.value = settings.value.currency;
			})
			.catch(function (error) {
				console.log(error);
			});
	}

	onMounted(() => {
		loadSettings();
	});
</script>

<template>
	<div class="row mb-6 justify-content-between">
		<div class="col-md-9 col-auto">
			<h2 class="mb-2 text-1100">Settings</h2>
			<h5 class="text-700 fw-semi-bold">Make quick settings</h5>
		</div>
		<div class="col-md-3 col-auto"></div>
	</div>
	<div>
		<form
			@submit.prevent="save($event)"
			class="needs-validation border-bottom pb-3 pb-lg-4"
			novalidate
		>
			<div class="row pb-2 my-3">
				<div class="col-sm-8 mb-4">
					<label for="walletAddress" class="form-label fs-base"
						>Wallet Address</label
					>
					<input
						v-model="settings.walletAddress"
						id="walletAddress"
						type="text"
						class="form-control"
					/>
					<div
						class="invalid-tooltip position-absolute top-100 start-0"
					>
						Enter valid address
					</div>
				</div>
				<div class="col-sm-4 mb-4">
					<label for="cpt" class="form-label fs-base">Crypto</label>
					<input
						v-model="settings.cryptoName"
						id="cpt"
						type="text"
						class="form-control"
					/>
					<div
						class="invalid-tooltip position-absolute top-100 start-0"
					>
						Enter crypto name
					</div>
				</div>
				<div class="col-sm-6 mb-4">
					<label for="np" class="form-label fs-base">Currency</label>
					<select
						ref="currency"
						v-model="selectedCurrency"
						class="form-select"
					>
						<option value="USD">USD ($)</option>
						<option value="GBR">GBR (£)</option>
						<option value="EUR">EUR (€)</option>
					</select>

					<div
						class="invalid-tooltip position-absolute top-100 start-0"
					>
						Please select currency!
					</div>
				</div>
				<div class="col-sm-6 mb-4">
					<label for="np" class="form-label fs-base"
						>Default Language</label
					>
					<select
						ref="lang"
						v-model="settings.language"
						class="form-select"
					>
						<option value="en" selected>English (en)</option>
						<option value="fr">French (fr)</option>
						<option value="es">Spanish (es)</option>
					</select>
					<div
						class="invalid-tooltip position-absolute top-100 start-0"
					>
						Select a language
					</div>
				</div>
			</div>
			<div class="d-flex mb-3">
				<button type="reset" class="btn btn-secondary me-3">
					Cancel
				</button>
				<button
					:class="loading ? 'disabled' : ''"
					type="submit"
					class="btn btn-primary"
				>
					<span v-if="!loading"> Save changes </span>
					<span v-else>
						<span
							class="spinner-grow spinner-grow-sm"
							role="status"
							aria-hidden="true"
						></span>
						Please wait...
					</span>
				</button>
			</div>
		</form>
	</div>
</template>
