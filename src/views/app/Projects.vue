<script setup>
	import { computed, onMounted, ref, inject } from "vue";
	import Project from "../../components/app/projects/project.vue";
	import NewProjectModal from "../../components/app/projects/NewProjectModal.vue";
	import axios from "axios";

	const AppName = import.meta.env.VITE_APP_NAME;
	const env = import.meta.env;

	const filter = ref("all");

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

	const user = inject("user");

	const showProjects = computed(() => {
		return filter.value == "all"
			? projects.value
			: projects.value.filter(
					(project) => project.status == filter.value
			  );
	});

	function total(type = "all") {
		return projects.value.reduce((p, c) => {
			let val = 0;
			if (type == "all" || type == c.status) val = p + 1;
			else val = p;

			return val;
		}, 0);
	}

	function loadProjects() {
		let config = {
			method: "GET",
			url: `${env.VITE_BE_API}/users/${user.value.id}/projects`,
		};

		axios
			.request(config)
			.then((response) => {
				console.log("user projects", response.data);
				projects.value = response.data;
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
	<div class="content container">
		<div class="row gx-6 gy-3 mb-4 align-items-center">
			<div class="col-auto">
				<h2 class="mb-0">
					Projects
					<span class="fw-normal text-700 ms-3"
						>({{ projects.length }})</span
					>
				</h2>
			</div>
			<div class="col-auto">
				<button
					class="btn btn-primary px-5"
					data-bs-toggle="modal"
					data-bs-target="#projectsCardViewModal"
				>
					<i class="fa-solid fa-plus me-2"></i>Start new project
				</button>
			</div>
		</div>
		<div class="row justify-content-between align-items-end mb-4 g-3">
			<div class="col-12 col-sm-auto">
				<ul class="nav nav-links mx-n2">
					<li class="nav-item">
						<a
							@click="filter = 'all'"
							class="nav-link px-2 py-1 active"
							aria-current="page"
							href="#"
							>All<span class="text-700 fw-semi-bold">
								({{ total("all") }})
							</span></a
						>
					</li>
					<li class="nav-item">
						<a
							@click="filter = 'ongoing'"
							class="nav-link px-2 py-1"
							href="#"
							>Ongoing<span class="text-700 fw-semi-bold"
								>({{ total("ongoing") }})</span
							></a
						>
					</li>
					<li class="nav-item">
						<a
							@click="filter = 'cancelled'"
							class="nav-link px-2 py-1"
							href="#"
							>Cancelled<span class="text-700 fw-semi-bold"
								>({{ total("cancelled") }})</span
							></a
						>
					</li>
					<li class="nav-item">
						<a
							@click="filter = 'completed'"
							class="nav-link px-2 py-1"
							href="#"
							>Finished<span class="text-700 fw-semi-bold"
								>({{ total("completed") }})</span
							>
						</a>
					</li>
				</ul>
			</div>
			<div class="col-12 col-sm-auto">
				<div class="d-flex align-items-center">
					<div class="search-box me-3">
						<form
							class="position-relative"
							data-bs-toggle="search"
							data-bs-display="static"
						>
							<input
								class="form-control search-input search"
								type="search"
								placeholder="Search projects"
								aria-label="Search"
							/>
							<span class="fas fa-search search-box-icon"></span>
						</form>
					</div>
				</div>
			</div>
		</div>

		<div class="text-center text-muted" v-if="projects.length == 0">
			<span>No projects found.</span>
		</div>
		<div
			class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xxl-4 g-3 mb-9"
		>
			<div v-for="project in showProjects" class="col">
				<!-- project -->
				<Project :project="project"></Project>
			</div>
		</div>

		<!-- New Project Modal -->
		<NewProjectModal />
	</div>
</template>
