<script setup>
	import axios from "axios";
	import { alert, util } from "@/stores/utility";
	import moment from "moment";
	import { onBeforeMount, ref } from "vue";

	const env = import.meta.env;
	const props = defineProps({
		projectId: {
			required: true,
		},
	});

	const loading = ref(true);
	const withdrawals = ref([]);

	function status(val) {
		if (val === "seen" || val === "success") return "completed";
		return val;
	}
	function badge(val) {
		if (val === "pending") return "badge-phoenix-warning";
		if (val === "failed") return "badge-phoenix-danger";
		return "badge-phoenix-success";
	}

	function fDate(val) {
		return moment(val).format("lll");
	}

	function loadHistory() {
		const config = {
			method: "GET",
			url: `${env.VITE_BE_API}/users/withdrawals/${props.projectId}`,
		};

		axios
			.request(config)
			.then((response) => {
				withdrawals.value = response.data;
				console.log("Withdrawals", response.data);
			})
			.catch((error) => {
				window.debug.log(error);
			})
			.finally(() => {
				loading.value = false;
			});
	}

	onBeforeMount(() => {
		loadHistory();
	});
</script>

<template>
	<div class="table-responsive">
		<table class="table table-sm table-borderlessi text-700">
			<thead class="fs--2 text-900">
				<tr class="bg-grey-200">
					<th scope="col">Time</th>
					<th scope="col">Destination</th>
					<th scope="col">amount</th>
					<th scope="col">status</th>
				</tr>
			</thead>
			<tbody class="fs--1">
				<tr v-for="withdrawal in withdrawals" class="">
					<td>{{ fDate(withdrawal.createdAt) }}</td>
					<td>{{ withdrawal.destinationType }}</td>
					<td
						class="align-middle text-end fw-semi-bold pe-9 text-1000"
					>
						{{ withdrawal.currency }}{{ withdrawal.amount }}
					</td>
					<td>
						<span
							:class="badge(status(withdrawal.status))"
							class="badge badge-phoenix fs--2"
						>
							<span class="badge-label">
								{{ status(withdrawal.status) }}
							</span>
							<span
								v-if="status(withdrawal.status) === 'completed'"
								class="ms-2"
							>
								<i class="far fa-check-circle"></i>
							</span>
							<span
								v-else-if="
									status(withdrawal.status) === 'pending'
								"
								class="ms-2"
							>
								<i class="fas fa-circle-exclamation"></i>
							</span>
							<span v-else class="ms-2">
								<i class="far fa-check-circle"></i>
							</span>
						</span>
					</td>
				</tr>
			</tbody>
		</table>
		<div v-if="withdrawals.length == 0" class="text-center">
			<span v-if="loading" class="spinner-border"></span>
			<span v-else class="text-muted">No withdrawal history</span>
		</div>
	</div>
</template>

<style scoped>
	th {
		text-transform: uppercase;
	}
</style>
