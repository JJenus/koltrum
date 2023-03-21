<script setup>
	const props = defineProps({
		plan: {
			required: true,
		},
		index: {
			required: true,
		},
	});
</script>

<template>
	<div class="h-100">
		<input
			:class="
				plan.priority == 'recommended' ? 'pricing-plan-recommended' : ''
			"
			class="pricing-plan-radio d-none"
			type="radio"
			name="pricingMonthly"
			:id="'plan-' + index"
		/>
		<div class="position-relative h-100">
			<label class="stretched-link" :for="'plan-' + index"></label>
			<div
				:class="
					plan.priority == 'recommended'
						? 'bg-warning-soft border-warning warning-boxshadow light'
						: ''
				"
				class="card h-100 overflow-hidden cursor-pointer"
			>
				<div
					v-if="plan.priority == 'recommended'"
					class="bg-holder"
					style="
						background-image: url(/assets/img/bg/bg-11.png);
						background-position: left bottom;
						background-size: auto;
					"
				></div>
				<div
					v-else
					class="bg-holder"
					style="
						background-image: url(/assets/img/bg/9.png);
						background-position: left bottom;
						background-size: auto;
					"
				></div>
				<!--/.bg-holder-->
				<div
					class="card-body d-flex flex-column justify-content-between position-relative"
				>
					<div class="d-flex justify-content-between">
						<div class="mb-5 mb-md-0 mb-lg-5 me-3">
							<div class="d-sm-flex align-items-center mb-3">
								<h3 class="mb-0">{{ plan.title }}</h3>
								<span
									v-if="plan.priority == 'recommended'"
									class="badge ms-sm-3 text-uppercase fs--2 bg-warning"
									>recommended</span
								>
							</div>
							<p class="fs--1 text-700">
								{{ plan.description }}
							</p>
							<div class="d-flex align-items-end mb-md-5 mb-lg-0">
								<h4 class="fw-bolder me-1">
									${{ plan.amount }}
								</h4>
								<h5 class="fs--1 fw-normal text-700 ms-1">
									Per month
								</h5>
							</div>
						</div>
						<img
							:src="
								'/assets/img/spot-illustrations/' +
								(plan.priority == 'recommended'
									? 'star.png'
									: 'shield-2.png')
							"
							width="54"
							height="54"
							alt=""
						/>
					</div>
					<div class="row flex-1 justify-content-end">
						<div class="col-sm-8 col-md-12">
							<div
								class="d-sm-flex d-md-block d-lg-flex justify-content-end align-items-end h-100"
							>
								<ul
									:class="
										plan.priority == 'recommended'
											? 'border-warning-300'
											: ''
									"
									class="list-unstyled mb-0 border-start-sm border-start-md-0 border-start-lg ps-sm-5 ps-md-0 ps-lg-5"
								>
									<li class="d-flex align-items-center">
										<span
											class="uil uil-check-circle text-success me-2"
										></span
										><span class="text-700 fw-semi-bold">
											<span class="fw-bolder text-primary"
												>${{ plan.returns }}</span
											>
											possible returns
										</span>
									</li>
									<li
										v-for="benefit in plan.benefits"
										class="d-flex align-items-center"
									>
										<span
											class="uil uil-check-circle text-success me-2"
										>
										</span>
										<span class="text-700 fw-semi-bold">
											{{ benefit.name }}
										</span>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
