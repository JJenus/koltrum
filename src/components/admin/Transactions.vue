<script setup>
	import { onBeforeMount, ref } from "vue";
	import axios from "axios";
	import { alert, util } from "@/stores/utility";
	import moment from "moment";

	const env = import.meta.env;

	const props = defineProps({
		userId: {
			required: true,
		},
	});

	const loading = ref(true);
	const saving = ref(false);
	const transactions = ref([]);
	const withdrawals = ref([]);

	function confirm(withdrawal) {
		const update = JSON.parse(JSON.stringify(withdrawal));
		update.status = "completed";

		const config = {
			method: "PUT",
			url: `${env.VITE_BE_API}/users/withdraw`,
			data: update,
		};

		saving.value = true;

		axios
			.request(config)
			.then((res) => {
				alert.success();
				window.debug.log(res.data);
				withdrawal.status = "completed";
			})
			.catch((e) => {
				alert.error();
			})
			.finally(() => {
				saving.value = false;
			});
	}

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

	function loadTransactions() {
		const config = {
			method: "GET",
			url: `${env.VITE_BE_API}/users/${props.userId}/transactions`,
		};

		axios
			.request(config)
			.then((response) => {
				transactions.value = response.data;
				withdrawals.value = transactions.value.withdrawals;
				console.log("transactions", response.data);
			})
			.catch((error) => {
				window.debug.log(error);
			})
			.finally(() => {
				loading.value = false;
			});
	}

	onBeforeMount(() => {
		loadTransactions();
	});
</script>

<template>
	<div class="table-responsive">
		<div v-if="withdrawals.length == 0" class="text-center">
			<span v-if="loading" class="spinner-border"></span>
			<span v-else class="text-muted">No withdrawal history</span>
		</div>
		<table class="table table-sm table-borderlessi text-700">
			<thead class="fs--2 text-900">
				<tr class="bg-grey-200">
					<th scope="col">Time</th>
					<th scope="col">Destination</th>
					<th scope="col">amount</th>
					<th scope="col">status</th>
					<th></th>
				</tr>
			</thead>
			<tbody class="fs--1">
				<tr v-for="withdrawal in withdrawals" class="align-middle">
					<td class="fs--2">{{ fDate(withdrawal.createdAt) }}</td>
					<td
						style="text-transform: capitalize"
						class="text-capitalised"
					>
						{{ withdrawal.destinationType }}
					</td>
					<td
						class="align-middle text-end fw-semi-bold pe-7 text-1000"
					>
						{{ withdrawal.currency }}{{ withdrawal.amount }}
					</td>
					<td class="align-middle">
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
					<td>
						<button
							v-if="status(withdrawal.status) === 'pending'"
							@click="confirm(withdrawal)"
							:class="saving ? 'disabled' : ''"
							class="btn btn-phoenix-primary btn-sm"
						>
							<span v-if="!saving" class="label">Confirm</span>
							<span
								v-else
								class="spinner spinner-border spinner-border-sm"
							></span>
						</button>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<style scoped>
	th {
		text-transform: uppercase;
	}
</style>
