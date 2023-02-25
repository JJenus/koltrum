<template>
	<li class="nav-item dropdown">
		<a
			class="nav-link lh-1 pe-0"
			id="navbarDropdownUser"
			href="#!"
			role="button"
			data-bs-toggle="dropdown"
			data-bs-auto-close="outside"
			aria-haspopup="true"
			aria-expanded="false"
		>
			<div class="avatar avatar-l">
				<img
					class="rounded-circle"
					src="/assets/img/team/57.png"
					alt=""
				/>
			</div>
		</a>
		<div
			class="dropdown-menu dropdown-menu-end navbar-dropdown-caret py-0 dropdown-profile shadow border border-300"
			aria-labelledby="navbarDropdownUser"
		>
			<div class="card position-relative border-0">
				<div class="card-body p-0">
					<div class="text-center pt-4 pb-3">
						<div class="avatar avatar-xl">
							<img
								class="rounded-circle"
								src="/assets/img/team/57.png"
								alt=""
							/>
						</div>
						<h6 class="mt-2 text-black">Jerry Seinfield</h6>
					</div>
					<div class="mb-3 mx-3">
						<input
							class="form-control form-control-sm"
							id="statusUpdateInput"
							type="text"
							placeholder="Update your status"
						/>
					</div>
				</div>
				<div class="overflow-auto scrollbar" style="height: 10rem">
					<ul class="nav d-flex flex-column mb-2 pb-1">
						<li class="nav-item">
							<a class="nav-link px-3" href="#!">
								<span
									class="me-2 text-900"
									data-feather="user"
								></span
								><span>Profile</span></a
							>
						</li>
						<li class="nav-item">
							<a class="nav-link px-3" href="#!"
								><span
									class="me-2 text-900"
									data-feather="pie-chart"
								></span
								>Dashboard</a
							>
						</li>
						<li class="nav-item">
							<a class="nav-link px-3" href="#!">
								<span
									class="me-2 text-900"
									data-feather="lock"
								></span
								>Posts &amp; Activity</a
							>
						</li>
						<li class="nav-item">
							<a class="nav-link px-3" href="#!">
								<span
									class="me-2 text-900"
									data-feather="settings"
								></span
								>Settings &amp; Privacy
							</a>
						</li>
						<li class="nav-item">
							<a class="nav-link px-3" href="#!">
								<span
									class="me-2 text-900"
									data-feather="help-circle"
								></span
								>Help Center</a
							>
						</li>
						<li class="nav-item">
							<a class="nav-link px-3" href="#!">
								<span
									class="me-2 text-900"
									data-feather="globe"
								></span
								>Language</a
							>
						</li>
					</ul>
				</div>
				<div class="card-footer p-0 border-top">
					<ul class="nav d-flex flex-column my-3">
						<li class="nav-item">
							<a class="nav-link px-3" href="#!">
								<span
									class="me-2 text-900"
									data-feather="user-plus"
								></span
								>Add another account</a
							>
						</li>
					</ul>
					<hr />
					<div class="px-3">
						<a
							class="btn btn-phoenix-secondary d-flex flex-center w-100"
							href="#!"
						>
							<span class="me-2" data-feather="log-out"> </span
							>Sign out</a
						>
					</div>
					<div class="my-2 text-center fw-bold fs--2 text-600">
						<a class="text-600 me-1" href="#!">Privacy policy</a
						>&bull;<a class="text-600 mx-1" href="#!">Terms</a
						>&bull;<a class="text-600 ms-1" href="#!">Cookies</a>
					</div>
				</div>
			</div>
		</div>
	</li>
</template>
