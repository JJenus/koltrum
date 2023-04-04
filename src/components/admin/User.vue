<script setup>
	import { onMounted, ref } from "vue";
	import Project from "../app/projects/project.vue";

	const props = defineProps({
		user: {
			required: true,
		},
	});

	const loading = ref(true);

	const projects = ref([
		{
			value: 60,
			name: "BTC",
			status: "completed",
			plan: {
				name: "Premium",
				amount: 3000,
				returns: 10000,
			},
			itemStyle: {
				color: "#f2a900",
			},
		},
		{
			value: 2538,
			name: "ETH",
			status: "cancelled",
			plan: {
				name: "Starter",
				amount: 500,
				returns: 3000,
			},
			itemStyle: {
				color: "#c99d66",
			},
		},
		{
			value: 1562,
			name: "XRP",
			status: "ongoing",
			plan: {
				name: "Standard",
				amount: 1000,
				returns: 6000,
			},
			itemStyle: {
				color: "#006097",
			},
		},
	]);

	function loadProjects() {
		let config = {
			method: "GET",
			url: `${env.VITE_BE_API}/users/${props.user.value.id}/projects`,
		};

		axios
			.request(config)
			.then((response) => {
				console.log("user projects", response.data);
				projects.value = response.data;
				loading.value = false;
			})
			.catch(function (error) {
				console.log(error);
			});
	}

	onMounted(() => {
		loadProjects();
	});
</script>

<template>
	<div class="avatar-dropdown-menu p-0 overflow-hidden rounded-3">
		<div class="position-relative">
			<div
				class="bg-holder z-index--1"
				style="
					background-image: url(/assets/img/bg/bg-32.png);
					background-size: auto;
				"
			></div>
			<!--/.bg-holder-->
			<div class="p-3">
				<div class="text-end d-none">
					<button class="btn p-0 me-2">
						<span
							class="fa-solid fa-user-plus text-white"
						></span></button
					><button class="btn p-0">
						<span class="fa-solid fa-ellipsis text-white"></span>
					</button>
				</div>
				<div class="text-center">
					<div
						class="avatar avatar-xl status-online position-relative me-2 me-sm-0 me-xl-2 mb-2"
					>
						<img
							class="rounded-circle border border-white"
							:src="user.url || '/assets/img/avatar.png'"
							alt=""
						/>
					</div>
					<h6 class="text-white">{{ user.name }}</h6>
					<p class="text-600 fw-semi-bold fs--2 mb-2">
						{{ user.email }}
					</p>
					<div class="d-flex flex-center mb-3">
						<h6 class="text-white mb-0">
							{{ projects.length }}
							<span class="fw-normal text-300"
								>subscriptions</span
							>
						</h6>
						<span
							class="fa-solid fa-circle text-700 mx-1"
							data-fa-transform="shrink-10 up-2"
						></span>
						<h6 class="text-white mb-0">
							{{ 0 }}
							<span class="fw-normal text-300">total paid</span>
						</h6>
					</div>
				</div>
			</div>
		</div>
		<div class="bg-whited">
			<div class="p-3 border-bottom">
				<div class="d-flex justify-content-between">
					<div class="d-flex">
						<a
							:href="`tel:${user.phone}`"
							class="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2"
						>
							<span class="fa-solid fa-phone"></span>
						</a>
						<button
							class="btn d-none btn-phoenix-secondary btn-icon btn-icon-lg me-2"
						>
							<span class="fa-solid fa-message"></span>
						</button>
						<button
							class="btn d-none btn-phoenix-secondary btn-icon btn-icon-lg"
						>
							<span class="fa-solid fa-video"></span>
						</button>
					</div>
					<a
						:href="`mailto:${user.email}`"
						class="btn btn-phoenix-primary"
					>
						<span class="fa-solid fa-envelope me-2"></span>Send
						Email
					</a>
				</div>
			</div>
			<ul class="nav d-flex flex-column py-3 border-bottom">
				<li class="nav-item">
					<a
						v-if="loading"
						class="nav-link text-muted text-center position-relative px-3 d-flex flex-between-center"
						role="button"
					>
						<span
							class="me-2 opacity-50 d-inline-block"
							data-feather="clipboard"
						></span>
						<span class="text-muted flex-1 fs-xs"
							>Assigned Projects</span
						>
						<div
							class="position-absolute top-0 left-0 w-100 h-100 d-flex align-items-center justify-content-center"
						>
							<span
								class="spinner-border end-0 me-5 text-muted spinner-border-sm"
							></span>
						</div>
					</a>
					<a
						v-else
						class="nav-link px-3 d-flex flex-between-center"
						data-bs-toggle="modal"
						:href="`#user-modal-${user.id}`"
						role="button"
					>
						<span
							class="me-2 text-900 d-inline-block"
							data-feather="clipboard"
						></span
						><span class="text-1000 flex-1">Assigned Projects</span
						><span class="fa-solid fa-chevron-right fs--3"></span
					></a>
				</li>
				<li class="nav-item d-none">
					<a
						class="nav-link px-3 d-flex flex-between-center"
						href="#!"
					>
						<span
							class="me-2 text-900"
							data-feather="pie-chart"
						></span
						><span class="text-1000 flex-1">View activiy</span
						><span class="fa-solid fa-chevron-right fs--3"></span
					></a>
				</li>
			</ul>
			<div class="p-3 d-flex justify-content-between">
				<a class="btn btn-link p-0 text-decoration-none" href="#!"
					>Details </a
				><a
					class="btn btn-link p-0 text-decoration-none text-danger"
					href="#!"
					>Unassign
				</a>
			</div>
		</div>
	</div>

	<div
		class="modal fade"
		:id="`user-modal-${user.id}`"
		tabindex="-1"
		:aria-labelledby="`user-modal-${user.id}`"
		aria-hidden="true"
	>
		<div class="modal-dialog modal-lg modal-fullscreen-sm-down">
			<div class="modal-content">
				<div class="modal-body position-relative">
					<div class="position-absolute top-0 end-0 m-2">
						<button
							type="button"
							class="btn btn-outline-danger btn-icon fs-1 border-0"
							data-bs-dismiss="modal"
							aria-label="Close"
						>
							<i class="fa-solid fa-times"></i>
						</button>
					</div>

					<div class="mb-5 text-center">
						<h1 class="h3">
							{{ user.name }}
							<span class="text-muted">subscriptions</span>
						</h1>
					</div>

					<div class="row g-4 row-cols-1 row-cols-md-2">
						<div v-for="project in projects" class="col">
							<Project :admin="true" :project="project" />
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
