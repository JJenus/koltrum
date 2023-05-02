<script setup>
	import Symbols from "@/components/cryptoWidget/Symbols.vue";
	import { inject, onBeforeMount, onMounted, ref } from "vue";
	import StatsPie from "@/components/app/StatsPie.vue";
	import axios from "axios";

	const AppName = import.meta.env.VITE_APP_NAME;
	const env = import.meta.env;

	const user = inject("user");
	const projects = ref([]);

	async function loadProjects() {
		let config = {
			method: "GET",
			url: `${env.VITE_BE_API}/users/${user.value.id}/projects`,
		};

		await axios
			.request(config)
			.then((response) => {
				debug.log("user projects dashboard", response.data);
				projects.value = response.data;
			})
			.catch(function (error) {
				debug.log(error);
			});
	}

	function marker(status) {
		let url = "status";
		if (status == "completed")
			url = "/assets/img/icons/illustrations/4l.png";
		else if (status == "ongoing")
			// url = "/assets/img/icons/illustrations/3l.png";
			url = "/assets/img/icons/illustrations/4l.png";
		else if (status == "cancelled")
			url = "/assets/img/icons/illustrations/2l.png";

		return url;
	}

	onBeforeMount(async () => {
		await loadProjects();
	});
</script>

<template>
	<div class="content container">
		<div class="pb-5">
			<div class="row g-4">
				<div class="col-12 col-xxl-6">
					<div class="mb-8">
						<h2 class="mb-2">{{ $t("app.dashboard.title") }}</h2>
						<h5 class="text-700 fw-semi-bold">
							{{ $t("app.dashboard.intro") }}
						</h5>
					</div>
					<h4 v-if="projects.length < 1" class="text-muted">
						{{ $t("app.dashboard.npd") }}
						<a href="/app/projects" class="btn-link"
							>{{ $t("app.dashboard.npdlink") }}</a
						>
					</h4>
					<div class="row align-items-center g-4">
						<div
							v-for="project in projects"
							class="col-12 col-md-auto"
						>
							<div class="d-flex align-items-center">
								<img
									:src="marker(project.status)"
									alt="marker"
									height="46"
									width="46"
								/>
								<div class="ms-3">
									<h4 class="mb-0">
										{{ project.project.symbol }}
									</h4>
									<p class="text-800 fs--1 mb-0">
										{{ project.value }}
										<span
											class="badge bg-primary badge-sm ms-1"
										>
											{{ project.plan.title }}
										</span>
									</p>
								</div>
							</div>
						</div>
					</div>
					<hr class="bg-200 mb-6 mt-4" />
					<div class="row flex-between-center mb-4 g-3">
						<div class="col-auto">
							<h3>{{ $t("app.dashboard.trends.title") }}</h3>
							<p class="text-700 lh-sm mb-0">
								{{ $t("app.dashboard.trends.desc") }}
							</p>
						</div>
						<div class="col-8 col-sm-4">
							<!-- <select
								class="form-select form-select-sm mt-2 d-none"
								id="select-gross-revenue-month"
							>
								<option>Mar 1 - 31, 2022</option>
								<option>April 1 - 30, 2022</option>
								<option>May 1 - 31, 2022</option>
							</select> -->
						</div>
					</div>

					<!-- CHART Symbo -->
					<Symbols></Symbols>
				</div>
			</div>
		</div>

		<StatsPie :projects="projects" />
	</div>
</template>
