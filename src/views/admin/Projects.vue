<script setup>
	import { onMounted, ref } from "vue";
	import CreateProjectModal from "../../components/admin/CreateProjectModal.vue";
	import Plan from "../../components/app/projects/Plan.vue";
	import axios from "axios";
	import { alert, koltrum } from "@/stores/utility";

	const env = import.meta.env;

	const active = ref(true);
	const activeCoin = ref(null);

	const crypto = ref([]);

	function selectCoin(coin) {
		activeCoin.value = coin;
	}

	function deleCoin(index, id) {
		let config = {
			method: "DELETE",
			url: `${env.VITE_BE_API}/projects/${id}`,
		};

		axios
			.request(config)
			.then((response) => {
				// console.log(response.data);
				alert.success("Deleted");
				crypto.value.splice(index, 1);
			})
			.catch(function (error) {
				alert.error("Failed");
			});
	}

	onMounted(async () => {
		crypto.value = await koltrum.loadProjects();
	});
</script>

<template>
	<div>
		<div class="row mb-3 mb-md-6 justify-content-between align-items-start">
			<div class="col-md-9 col-auto mb-3">
				<div class="row mb-3">
					<div class="col col-md-5">
						<div class="d-flex">
							<button
								v-if="!active"
								@click="active = true"
								class="me-3 btn p-0 text-dark fs-2"
							>
								<i class="fa-solid fa-arrow-left"></i>
							</button>
							<h2 class="mb-2 text-1100">
								Projects
								<span class="fw-normal text-700 ms-3"
									>({{ crypto.length }})</span
								>
							</h2>
						</div>
					</div>
					<div class="col">
						<button
							v-if="active"
							class="btn btn-primary px-3 btn-sm align-items-center"
							@click="active = false"
						>
							<i class="fa-solid fa-plus me-2"></i>
							<span>Add new project</span>
						</button>
					</div>
				</div>

				<h5 class="text-700 fw-semi-bold">
					Add projects here. Users can only select from the list of
					projects (Crypto currencies) created here.
				</h5>
			</div>
			<div class="col-md-3 col-auto mb-3">
				<div
					class="search-box w-100 mb-2 mb-sm-0"
					style="max-width: 30rem"
				>
					<form
						class="position-relative"
						data-bs-toggle="search"
						data-bs-display="static"
					>
						<input
							class="form-control search-input search"
							type="search"
							placeholder="Search users"
							aria-label="Search"
						/>
						<span class="fas fa-search search-box-icon"></span>
					</form>
				</div>
			</div>
		</div>
		<!-- Project content -->
		<div v-if="active" class="border-bottomf pb-1 mb-5">
			<h1 class="fs-1 text-800 mb-4">Existing projects</h1>

			<div v-if="!activeCoin">
				<div
					v-if="crypto.length == 0"
					class="w-100 text-center text-muted"
				>
					No project created
				</div>
				<div class="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-3">
					<div
						v-for="(coin, i) in crypto"
						class="col position-relative"
					>
						<div
							class="w-100 h-100 btn d-flex fw-bold py-3 fs-1 flex-column justify-items-center align-items-center btn-outline-secondary"
							@click="selectCoin(coin)"
						>
							<div class="mb-2">
								<img :src="coin.logoUrl" class="w-100 crypto" />
							</div>
							<span class="">{{ coin.symbol }}</span>
						</div>
						<div class="position-absolute bottom-0 end-0 m-3 mb-2">
							<button
								@click="deleCoin(i, coin.id)"
								class="btn btn-icon btn-outline-danger"
							>
								<i class="fa-solid fa-trash"></i>
							</button>
						</div>
					</div>
				</div>
			</div>

			<div v-else>
				<p class="mb-4">
					<a
						@click="activeCoin = null"
						class="me-4 ms-1 fs-1"
						href="#"
					>
						<i class="fa-solid fa-arrow-left"></i>
					</a>
					Available plans
				</p>

				<div>
					<h5 class="">
						{{ activeCoin?.name }} ({{ activeCoin?.symbol }})
					</h5>
					<hr class="mb-2" />
					<div
						class="row g-3 row-cols-1 row-cols-md-2 row-cols-lg-3 align-items-fill"
					>
						<div v-for="(plan, i) in activeCoin.plans" class="col">
							<Plan :plan="plan" :index="i" />
						</div>
					</div>
				</div>
			</div>
		</div>
		<CreateProjectModal v-else />
	</div>
</template>
