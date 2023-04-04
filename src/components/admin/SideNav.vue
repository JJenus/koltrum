<script setup>
	import { ref } from "vue";

	const navs = ref([
		{
			name: "Project Management",
			icon: "clipboard",
			path: "projects",
		},
		{
			name: "Users",
			icon: "users",
			path: "users",
		},
		{
			name: "Settings",
			icon: "settings",
			path: "settings",
		},
	]);
</script>

<template>
	<nav class="navbar navbar-vertical navbar-expand-lg" style="z-index: 1;">
		<div class="collapse navbar-collapse" id="navbarVerticalCollapse">
			<!-- scrollbar removed-->
			<div class="navbar-vertical-content">
				<ul class="navbar-nav flex-column" id="navbarVerticalNav">
					<li class="nav-item">
						<!-- parent pages-->
						<div class="nav-item-wrapper pt-md-3">
							<a
								class="nav-link label-1"
								href="dashboard"
								role="button"
								aria-controls="home"
							>
								<div class="d-flex align-items-center">
									<span class="nav-link-icon">
										<span data-feather="pie-chart"></span>
									</span>
									<span class="nav-link-text-wrapper">
										<span class="nav-link-text">
											Dashboard
										</span>
									</span>
								</div>
							</a>
						</div>
					</li>
					<li class="nav-item">
						<!-- label-->
						<p class="navbar-vertical-label">Apps</p>
						<hr class="navbar-vertical-line" />
						<!-- parent pages-->
						<div v-for="nav in navs" class="nav-item-wrapper">
							<a
								class="nav-link label-1"
								:href="nav.path"
								role="button"
							>
								<div class="d-flex align-items-center">
									<div class="d-flex align-items-center">
										<span class="nav-link-icon">
											<span
												:data-feather="nav.icon"
											></span>
										</span>
										<span class="nav-link-text-wrapper">
											<span class="nav-link-text">
												{{ nav.name }}
											</span>
										</span>
									</div>
								</div>
							</a>
						</div>
					</li>
				</ul>
			</div>
		</div>
		<div class="navbar-vertical-footer">
			<button
				class="btn navbar-vertical-toggle border-0 fw-semi-bold w-100 white-space-nowrap d-flex align-items-center"
			>
				<span class="uil uil-left-arrow-to-left fs-0"></span
				><span class="uil uil-arrow-from-right fs-0"></span
				><span class="navbar-vertical-footer-text ms-2"
					>Collapsed View</span
				>
			</button>
		</div>
	</nav>
</template>
