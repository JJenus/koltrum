<script setup>
	import { ref } from "vue";
	import Selector from "../Selector.vue";
</script>

<template>
	<nav class="navbar bg-white navbar-expand-lg sticky-top">
		<div class="container-small px-0 px-sm-3">
			<a class="navbar-brand flex-1 flex-lg-grow-0 me-1 me-md-3" href="/">
				<div class="d-flex align-items-center">
					K
					<img
						src="/assets/img/icons/logo.png"
						alt="phoenix"
						width="32"
						class="mx-0"
					/>ltrum
					<!-- <p class="logo-text ms-2">{{ AppName }}</p> -->
				</div>
			</a>
			<div class="me-1 d-md-none">
				<Selector />
			</div>
			<div class="d-lg-none">
				<div class="theme-control-toggle fa-icon-wait px-2">
					<input
						class="form-check-input ms-0 theme-control-toggle-input"
						type="checkbox"
						data-theme-control="phoenixTheme"
						value="dark"
						id="themeControlToggleSm"
					/><label
						class="mb-0 theme-control-toggle-label theme-control-toggle-light"
						for="themeControlToggleSm"
						data-bs-toggle="tooltip"
						data-bs-placement="left"
						title="Switch theme"
						><span class="icon" data-feather="moon"></span></label
					><label
						class="mb-0 theme-control-toggle-label theme-control-toggle-dark"
						for="themeControlToggleSm"
						data-bs-toggle="tooltip"
						data-bs-placement="left"
						title="Switch theme"
						><span class="icon" data-feather="sun"></span
					></label>
				</div>
			</div>
			<button
				class="navbar-toggler me-0"
				type="button"
				data-bs-toggle="collapse"
				data-bs-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarSupportedContent">
				<!-- Nav list -->
				<ul class="navbar-nav me-auto mb-2 mb-lg-0">
					<li class="nav-item border-bottom border-bottom-lg-0">
						<a
							class="nav-link lh-1 py-0 fs--1 fw-bold py-3 active"
							aria-current="page"
							href="#"
							>{{ $t("product.nav.home") }}</a
						>
					</li>
					<li class="nav-item border-bottom border-bottom-lg-0">
						<a
							class="nav-link lh-1 py-0 fs--1 fw-bold py-3"
							href="#feature"
							>{{ $t("product.nav.features") }}</a
						>
					</li>

					<li class="nav-item border-bottom border-bottom-lg-0">
						<a
							class="nav-link lh-1 py-0 fs--1 fw-bold py-3"
							href="#about"
							>{{ $t("product.nav.about") }}</a
						>
					</li>

					<li class="nav-item border-bottom border-bottom-lg-0">
						<a
							class="nav-link lh-1 py-0 fs--1 fw-bold py-3"
							href="#contact"
							>{{ $t("product.nav.contact") }}</a
						>
					</li>
				</ul>
				<div class="me-3 d-none d-md-block">
					<Selector />
				</div>
				<div class="d-grid d-lg-flex align-items-center">
					<div
						class="nav-item d-flex align-items-center d-none d-lg-block pe-2"
					>
						<div class="theme-control-toggle fa-icon-wait px-2">
							<input
								class="form-check-input ms-0 theme-control-toggle-input"
								type="checkbox"
								data-theme-control="phoenixTheme"
								value="dark"
								id="themeControlToggle"
							/>
							<label
								class="mb-0 theme-control-toggle-label theme-control-toggle-light"
								for="themeControlToggle"
								data-bs-toggle="tooltip"
								data-bs-placement="left"
								title="Switch theme"
							>
								<span class="icon" data-feather="moon"></span>
							</label>
							<label
								class="mb-0 theme-control-toggle-label theme-control-toggle-dark"
								for="themeControlToggle"
								data-bs-toggle="tooltip"
								data-bs-placement="left"
								title="Switch theme"
							>
								<span class="icon" data-feather="sun"></span>
							</label>
						</div>
					</div>
					<button
						class="btn btn-link text-900 order-1 order-lg-0 ps-3 me-2"
						data-bs-toggle="modal"
						data-bs-target="#auth-modal"
					>
						{{ $t("signin") }}
					</button>
					<a
						class="btn btn-phoenix-primary order-0"
						href="#"
						data-bs-toggle="modal"
						data-bs-target="#auth-modal"
					>
						<span class="fw-bold">{{ $t("signup") }}</span>
					</a>
				</div>
			</div>
		</div>
	</nav>
</template>
