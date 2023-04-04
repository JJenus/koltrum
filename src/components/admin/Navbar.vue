<script setup>
	import { onMounted } from "vue";
	import UserNav from "../app/UserNav.vue";

	const AppName = import.meta.env.VITE_APP_NAME;
</script>

<template>
	<nav
		class="navbar navbar-top navbar-expand"
		id="navbarDefault"
		style="z-index: 1000"
	>
		<div class="collapse navbar-collapse justify-content-between">
			<div class="navbar-logo">
				<button
					class="btn d-lg-none navbar-toggler-humburger-icon hover-bg-transparent"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarVerticalCollapse"
					aria-controls="navbarVerticalCollapse"
					aria-expanded="false"
					aria-label="Toggle Navigation"
				>
					<span class="navbar-toggle-icon"
						><span class="toggle-line"></span
					></span>
				</button>
				<a class="navbar-brand me-1 me-sm-3" href="/">
					<div class="d-flex align-items-center">
						<div class="d-flex align-items-center">
							<img
								src="/assets/img/icons/logo.png"
								alt="phoenix"
								width="27"
							/>
							<p class="logo-text ms-2 d-none d-sm-block">
								{{ AppName }} Admin
							</p>
						</div>
					</div>
				</a>
			</div>

			<ul class="navbar-nav navbar-nav-icons flex-row">
				<UserNav />
			</ul>
		</div>
	</nav>
</template>
