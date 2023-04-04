<script setup>
	const props = defineProps({
		project: {
			required: true,
		},
		admin: {
			required: false,
		},
	});

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
						17th Nov. 2020</span
					>
				</p>
			</div>
			<div v-if="!admin">
				<div class="d-flex align-items-center mt-2">
					<p class="mb-0 fw-bold fs--1">
						End :
						<span class="fw-semi-bold text-600 ms-1">
							21st May 2028</span
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
				<button class="btn btn-primary">Confirm pay</button>
			</div>
		</div>
	</div>
</template>
