<script setup>
	import { onMounted } from "vue";
	import * as echarts from "echarts";

	const props = defineProps({
		projects: {
			required: true,
		},
	});

	const crypto = props.projects.sort(function (a, b) {
		return a.value - b.value;
	});

	const options = {
		legend: {
			top: "bottom",
		},
		toolbox: {
			show: true,
			feature: {
				mark: { show: true },
				dataView: { show: false, readOnly: true },
				restore: { show: false },
				saveAsImage: { show: false },
			},
		},
		series: [
			{
				name: "Nightingale Chart",
				type: "pie",
				radius: [40, 140],
				center: ["50%", "50%"],
				roseType: "radius",
				label: {
					color: "rgba(255, 255, 255, 0.3)",
				},

				labelLine: {
					lineStyle: {
						color: "rgba(255, 255, 255, 0.3)",
					},
					smooth: 0.2,
					length: 10,
					length2: 20,
				},
				itemStyle: {
					// color: "#c23531",
					shadowBlur: 200,
					shadowColor: "rgba(0, 0, 0, 0.5)",
					borderRadius: 8,
				},
				data: crypto.sort(function (a, b) {
					return a.value - b.value;
				}),
			},
		],
	};

	function total() {
		return crypto.reduce((p, c) => p + c.value, 0);
	}

	function createDonought() {
		var chartDom = document.getElementById("donought");
		var myChart = echarts.init(chartDom);

		options && myChart.setOption(options);
	}

	onMounted(() => {
		createDonought();
	});
</script>

<template>
	<div class="mx-n4 px-4 mx-lg-n6 px-lg-6 pt-7 pb-3">
		<div class="row">
			<div class="col-12">
				<div class="row g-3 mb-3">
					<div class="col-12 col-md-4">
						<h3 class="text-1100 text-nowrap">Possible Earnings</h3>
						<p class="text-700 mb-md-7">
							Generated based on project plans and live data
						</p>
						<div
							class="d-flex align-items-center justify-content-between"
						>
							<p class="mb-0 fw-bold">Crypto</p>
							<p class="mb-0 fs--1">
								Total amount ($)
								<span class="fw-bold">{{ total() }}</span>
							</p>
						</div>
						<hr class="bg-200 mb-2 mt-2" />
						<div v-if="crypto.length < 1" class="text-center">
							No projects created
						</div>
						<div
							v-else
							v-for="coin in crypto"
							class="d-flex align-items-center mb-1"
						>
							<span
								class="d-inline-block bg-info-300i bullet-item me-2"
								:style="
									'background-color:' + coin.itemStyle.color
								"
							></span>
							<p class="mb-0 fw-semi-bold text-900 lh-sm flex-1">
								{{ coin.name }}
							</p>
							<h5 class="mb-0 text-900">
								{{ coin.value }}
							</h5>
						</div>

						<button class="btn d-none btn-outline-primary mt-5">
							See Details<span
								class="fas fa-angle-right ms-2 fs--2 text-center"
							></span>
						</button>
					</div>
					<div class="col-12 col-md-8">
						<div class="position-relative umb-sm-4 mb-xl-0 h-100">
							<div
								v-if="crypto.length < 1"
								style="z-index: 1000;"
								class="text-center bg-transparent w-100 position-absolute top-0 start-0 h-100 d-flex align-items-center justify-content-center"
							>
								Create projects to visualize
							</div>
							<div
								class="position-relative m-0"
								style="min-height: 390px; width: 100%"
								id="donought"
							></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
