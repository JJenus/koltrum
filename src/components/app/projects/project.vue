<script setup>
	import { onMounted, ref } from "vue";
	import axios from "axios";
	import moment from "moment";
	import { alert } from "@/stores/utility";

	const env = import.meta.env;
	const loading = ref(false);

	const props = defineProps({
		project: {
			required: true,
		},
		admin: {
			required: false,
		},
	});

	const returns = ref("");

	function statusBadge() {
		const status = props.project.status;
		return status == "completed"
			? "badge-phoenix-success"
			: status === "ongoing"
			? "badge-phoenix-warning"
			: "badge-phoenix-danger";
	}

	function rate() {
		let r = 100 * (props.project.value / props.project.plan.returns);
		return r.toFixed(2);
	}

	function rateColor() {
		const per = rate();
		return per >= 75
			? "bg-success"
			: per >= 50
			? "bg-info"
			: per >= 25
			? "bg-warning"
			: "bg-danger";
	}

	function confirmPay() {
		loading.value = true;
		props.project.status = "ongoing";

		let config = {
			method: "POST",
			url: `${env.VITE_BE_API}/users/subscribe`,
			data: props.project,
		};

		axios
			.request(config)
			.then((response) => {
				// console.log("Confirm pay", response.data);
				// projects.value = response.data;
				alert.success();
			})
			.catch(function (error) {
				// console.log(error);
			})
			.finally(() => {
				loading.value = false;
			});
	}

	function save() {
		if (!returns.value || !returns.value.trim()) {
			alert.error("Form error", "Enter a valid amount");
			return;
		}

		props.project.value = Number(props.project.value) + Number(returns.value);

		confirmPay();
	}

	function fDate(dtime) {
		if (!dtime || !dtime.trim()) return moment().format("LLL");
		return moment(dtime).format("LLL");
	}

	onMounted(() => {
		if (!props.project.value) {
			props.project.value = 0;
		}
	});
</script>
<template>
	<div class="card h-100 hover-actions-trigger">
		<div class="card-body">
			<div class="d-flex align-items-center">
				<h4 class="mb-2 line-clamp-1 lh-sm flex-1 me-5">
					{{ project.name }}
				</h4>

				<div class="hover-actions top-0 end-0 mt-4 me-4">
					<button
						v-if="admin"
						class="btn btn-primary me-3 btn-icon flex-shrink-0"
					>
						<span class="fa-solid fa-money-check"></span>
					</button>
					<button
						v-else
						class="btn btn-primary btn-icon flex-shrink-0"
					>
						<span class="fa-solid fa-wallet"></span>
					</button>
				</div>
			</div>
			<span :class="statusBadge()" class="badge badge-phoenix fs--2 mb-4"
				><span class="badge-label">{{ project.status }}</span></span
			>
			<div class="d-flex align-items-center mb-2">
				<span
					class="fa-solid fa-credit-card me-2 text-700 fs--1 fw-extra-bold"
				></span>
				<p class="fw-bold mb-0 lh-1">
					Budget :
					<span class="ms-1 text-1100"
						>${{ project.plan.amount }}</span
					>
				</p>
			</div>
			<div class="d-flex align-items-center mb-2">
				<span
					class="fas fa-dollar me-2 text-700 fs--1 fw-extra-bold"
				></span>
				<p class="fw-bold mb-0 lh-1">
					Current value :
					<span class="ms-1 text-1100 text-success"
						>${{ project.value }}</span
					>
				</p>
			</div>
			<div class="d-flex align-items-center mb-4">
				<span
					class="fas fa-dollar me-2 text-700 fs--1 fw-extra-bold"
				></span>
				<p class="fw-bold mb-0 text-truncate lh-1">
					Possible Returns :
					<span class="fw-semi-bold text-primary ms-1">
						{{ project.plan.returns }}
					</span>
				</p>
			</div>

			<div v-if="!admin">
				<div
					class="d-flex justify-content-between text-700 fw-semi-bold"
				>
					<p class="mb-2">Progress</p>
					<p class="mb-2 text-1100">{{ rate() }}%</p>
				</div>
				<div :class="rateColor() + '-100'" class="progress">
					<div
						:class="rateColor()"
						class="progress-bar rounded"
						role="progressbar"
						aria-label="Success example"
						:style="'width:' + rate() + '%'"
						aria-valuenow="25"
						aria-valuemin="0"
						aria-valuemax="100"
					></div>
				</div>
			</div>

			<div class="d-flex align-items-center mt-4 mb-2">
				<p class="mb-0 fw-bold fs--1">
					Started :<span class="fw-semi-bold text-600 ms-1">
						{{ fDate(project.createdAt) }}</span
					>
				</p>
			</div>
			<div v-if="!admin">
				<div class="d-flex align-items-center mt-2">
					<p class="mb-0 fw-bold fs--1">
						End :
						<span class="fw-semi-bold text-600 ms-1">
							{{ fDate(project.expiresAt) }}</span
						>
					</p>
				</div>
				<div
					class="d-flex d-lg-block d-xl-flex justify-content-end align-items-center mt-3"
				>
					<div class="mt-lg-3 mt-xl-0">
						<i class="fa-solid fa-list-check me-1"></i>
						<p class="d-inline-block fw-bold mb-0">
							{{ project.plan.name }}
						</p>
					</div>
				</div>
			</div>

			<div v-else>
				<div class="mb-3">
					<div class="mb-3">
						<label for="">Enter amount</label>
						<input
							v-model="returns"
							type="number"
							class="me-2 form-control"
						/>
					</div>
					<button
						:class="loading ? 'disabled' : ''"
						class="btn btn-outline-primary w-100"
						@click="save()"
					>
						<span
							v-if="loading"
							class="spinner-border spinner-border-sm"
						></span>
						<span v-else>Save</span>
					</button>
				</div>
				<button
					:class="loading ? 'disabled' : ''"
					class="btn btn-primary"
					@click="confirmPay()"
				>
					<span
						v-if="loading"
						class="spinner-border spinner-border-sm"
					></span>
					<span v-else>Confirm pay</span>
				</button>
			</div>
		</div>
	</div>
</template>
