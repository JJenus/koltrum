<template>
	<nav class="navbar bg-white navbar-expand-lg sticky-top">
		<div class="container-small px-0 px-sm-3">
			<a class="navbar-brand flex-1 flex-lg-grow-0" href="/">
				<div class="d-flex align-items-center">
					K
					<img
						src="/assets/img/icons/logo.png"
						alt="phoenix"
						width="50"
						class="mx-0"
					/>ltrum
					<!-- <p class="logo-text ms-2">{{ AppName }}</p> -->
				</div>
			</a>
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
				class="navbar-toggler"
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
				<ul class="navbar-nav me-auto mb-2 mb-lg-0">
					<li class="nav-item border-bottom border-bottom-lg-0">
						<a
							class="nav-link lh-1 py-0 fs--1 fw-bold py-3 active"
							aria-current="page"
							href="#"
							>Home</a
						>
					</li>
					<li class="nav-item border-bottom border-bottom-lg-0">
						<a
							class="nav-link lh-1 py-0 fs--1 fw-bold py-3"
							href="#feature"
							>Features</a
						>
					</li>

					<li class="nav-item">
						<a
							class="nav-link lh-1 py-0 fs--1 fw-bold py-3"
							href="#about"
							>About</a
						>
					</li>

					<li class="nav-item border-bottom border-bottom-lg-0">
						<a
							class="nav-link lh-1 py-0 fs--1 fw-bold py-3"
							href="#contact"
							>Contact</a
						>
					</li>
				</ul>
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
					<a
						class="btn btn-link text-900 order-1 order-lg-0 ps-3 me-2"
						href="#"
					>
						Sign in
					</a>
					<a
						class="btn btn-phoenix-primary order-0"
						href="#"
					>
						<span class="fw-bold">Sign Up</span>
					</a>
				</div>
			</div>
		</div>
	</nav>
</template>
