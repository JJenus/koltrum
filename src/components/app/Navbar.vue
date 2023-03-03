<script setup>
	import UserNav from "./UserNav.vue";
	import ProjectsNav from "./ProjectsNav.vue";
	import NotificationNav from "./NotificationNav.vue"

	const AppName = import.meta.env.VITE_APP_NAME;
</script>

<template>
	<nav class="navbar navbar-top navbar-expand-lg" id="navbarTop">
		<div class="navbar-logo">
			<button
				class="btn navbar-toggler navbar-toggler-humburger-icon hover-bg-transparent"
				type="button"
				data-bs-toggle="collapse"
				data-bs-target="#navbarTopCollapse"
				aria-controls="navbarTopCollapse"
				aria-expanded="false"
				aria-label="Toggle Navigation"
			>
				<span class="navbar-toggle-icon"
					><span class="toggle-line"></span
				></span>
			</button>
			<a class="navbar-brand me-n2 me-sm-3" href="/">
				<div class="d-flex align-items-center">
					<div class="d-flex align-items-center">
						<img
							src="/assets/img/icons/logo.png"
							:alt="AppName"
							width="27"
						/>
						<p class="logo-text ms-2 d-none d-sm-block">
							{{ AppName }}
						</p>
						<p class="logo-text fs-xs ms-2 d-sm-none">
							{{ AppName }}
						</p>
					</div>
				</div>
			</a>
		</div>
		<div
			class="collapse navbar-collapse navbar-top-collapse order-1 order-lg-0 justify-content-center"
			id="navbarTopCollapse"
		>
			<ul
				class="navbar-nav"
				data-top-nav-dropdowns="data-top-nav-dropdowns"
			>
				<li class="nav-item dropdown">
					<a
						class="nav-link lh-1"
						href="/app/dashboard"
						role="button"
						id="dashboards"
						>Dashboard</a
					>
				</li>
				<li class="nav-item dropdown">
					<a
						class="nav-link lh-1"
						href="/app/projects"
						role="button"
						id="appss"
						>Projects</a
					>
				</li>
				<li class="nav-item dropdown">
					<a
						class="nav-link lh-1"
						href="/app/settings"
						role="button"
						id="documentations"
						>Settings</a
					>
				</li>
			</ul>
		</div>
		<ul class="navbar-nav navbar-nav-icons flex-row">
			<li class="nav-item">
				<div class="theme-control-toggle fa-icon-wait px-2">
					<input
						class="form-check-input ms-0 theme-control-toggle-input"
						type="checkbox"
						data-theme-control="phoenixTheme"
						value="dark"
						id="themeControlToggle"
					/><label
						class="mb-0 theme-control-toggle-label theme-control-toggle-light"
						for="themeControlToggle"
						data-bs-toggle="tooltip"
						data-bs-placement="left"
						title="Switch theme"
						><span class="icon" data-feather="moon"></span></label
					><label
						class="mb-0 theme-control-toggle-label theme-control-toggle-dark"
						for="themeControlToggle"
						data-bs-toggle="tooltip"
						data-bs-placement="left"
						title="Switch theme"
						><span class="icon" data-feather="sun"></span
					></label>
				</div>
			</li>
			<NotificationNav></NotificationNav>
			<ProjectsNav></ProjectsNav>
			<!-- User card -->
			<UserNav></UserNav>
		</ul>
	</nav>
</template>
