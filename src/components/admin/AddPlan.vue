<script setup>
	import { onMounted, ref } from "vue";
	import axios from "axios";
	import { alert } from "@/stores/utility";

	const env = import.meta.env;

	const props = defineProps({
		project: {
			required: true,
		},
	});

	const crypto = ref(props.project);

	const plan = ref({
		id: null,
		title: null,
		amount: 0,
		returns: 0,
		description: null,
		priority: null,
		benefits: [
			{
				name: "",
			},
		],
	});

	const loading = ref(false);

	const recommended = ref(false);

	function addBenefit() {
		plan.value.benefits.push({
			name: "",
		});
	}

	function save($evt) {
		// props.project.plans.push(plan.value);
		// console.log(props.project);

		// return;
		if (!$evt.target.checkValidity()) {
			return;
		}

		if (recommended.value) {
			plan.value.priority = "recommended";
		}

		crypto.value.plans.push(plan.value);
		// console.log(settings.value);

		loading.value = true;

		let config = {
			method: "POST",
			url: `${env.VITE_BE_API}/projects`,
			data: crypto.value,
		};

		axios
			.request(config)
			.then((response) => {
				console.log(response.data);
				crypto.value = response.data;
				console.log(crypto.value);
				alert.success();
			})
			.catch((error) => {
				alert.error("Failed");
			})
			.finally(() => {
				loading.value = false;
			});
	}

	onMounted(() => {
		// if (props.project.benefits.length > 0) {
		// 	plan.benefits = props.project.benefits;
		// }
	});
</script>

<template>
	<form action="" @submit.prevent="save($event)">
		<div class="row g-3 mb-6 align-items-end">
			<div class="col-sm-6 col-md-4">
				<h5 class="mb-5">Add Subscription Plan</h5>
				<div class="form-floating">
					<input
						class="form-control"
						id="title"
						type="text"
						v-model="plan.title"
					/><label for="title">Plan title</label>
				</div>
			</div>
			<div class="col-sm-6 col-md-4">
				<div class="form-floating">
					<input
						class="form-control"
						id="amount"
						type="text"
						v-model="plan.amount"
					/><label for="amount">Amount ($)</label>
				</div>
			</div>
			<div class="col-sm-6 col-md-4">
				<div class="form-floating">
					<input
						class="form-control"
						id="floatingInputGrid"
						type="text"
						v-model="plan.returns"
					/><label for="floatingInputGrid">Returns ($)</label>
				</div>
			</div>
			<div class="col-12 gy-3">
				<div class="form-floating">
					<textarea
						class="form-control"
						id="floatingProjectOverview"
						v-model="plan.description"
						style="height: 100px"
					></textarea
					><label for="floatingProjectOverview"
						>Plan Description</label
					>
				</div>
			</div>

			<div class="col-sm-6 col-md-4 gy-3">
				<div class="form-floating">
					<select class="form-select" name="" id="">
						<option value="month">month</option>
						<option value="year">Year</option>
					</select>
					<label for="floatingProjectOverview">Duration</label>
				</div>
			</div>

			<div class="col-sm-6 col-md-4">
				<div class="form-check form-switch">
					<input
						v-model="recommended"
						class="form-check-input"
						id="flexSwitchCheckDefault222"
						type="checkbox"
					/>
					<label
						class="form-check-label"
						for="flexSwitchCheckDefault222"
						>Recommended?</label
					>
				</div>
			</div>

			<div class="col-12 gy-6">
				<label class="mb-3">Benefits</label>
				<div class="row g-3 align-items-end">
					<div class="col-10 col-md-8">
						<div class="row g-3">
							<div
								v-for="(bnft, i) in plan.benefits"
								class="col-12"
							>
								<div class="form-floating">
									<input
										class="form-control"
										:id="'benefit' + i"
										type="text"
										v-model="bnft.name"
									/><label for="floatingInputGrid"
										>Enter benefit</label
									>
								</div>
							</div>
						</div>
					</div>
					<div class="col-2 col-md-1">
						<button
							@click="addBenefit()"
							type="button"
							class="btn btn-primary btn-icon w-100"
						>
							<i class="fa-solid fa-plus"></i>
						</button>
					</div>

					<div class="col-md-2">
						<button
							type="submit"
							class="btn btn-primary px-5 px-sm-10"
						>
							<span
								v-if="loading"
								class="spinner-border spinner-border-sm"
							></span>
							<span v-else>Save</span>
						</button>
					</div>
				</div>
			</div>
		</div>
	</form>
</template>
