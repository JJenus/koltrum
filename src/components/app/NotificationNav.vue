<template>
	<li class="nav-item dropdown d-none">
		<a
			class="nav-link"
			href="#"
			role="button"
			data-bs-toggle="dropdown"
			aria-haspopup="true"
			aria-expanded="false"
			data-bs-auto-close="outside"
			><span data-feather="bell" style="height: 20px; width: 20px"></span
		></a>
		<div
			class="dropdown-menu dropdown-menu-end notification-dropdown-menu py-0 shadow border border-300 navbar-dropdown-caret"
			id="navbarDropdownNotfication"
			aria-labelledby="navbarDropdownNotfication"
		>
			<div class="card position-relative border-0">
				<div class="card-header p-2">
					<div class="d-flex justify-content-between">
						<h5 class="text-black mb-0">Notificatons</h5>
						<button
							class="btn btn-link p-0 fs--1 fw-normal"
							type="button"
						>
							Mark all as read
						</button>
					</div>
				</div>
				<div class="card-body p-0">
					<div class="scrollbar-overlay" style="height: 27rem">
						<div class="border-300">
							<div
								class="p-3 border-300 notification-card position-relative read border-bottom"
							>
								<div
									class="d-flex align-items-center justify-content-between position-relative"
								>
									<div class="d-flex">
										<div
											class="avatar avatar-m status-online me-3"
										>
											<img
												class="rounded-circle"
												src="/assets/img/team/30.png"
												alt=""
											/>
										</div>
										<div class="me-3 flex-1">
											<h4 class="fs--1 text-black">
												Jessie Samson
											</h4>
											<p
												class="fs--1 text-1000 mb-2 mb-sm-3 fw-normal"
											>
												<span class="me-1 fs--2"
													>💬</span
												>Mentioned you in a
												comment.<span
													class="ms-2 text-400 fw-bold fs--2"
													>10m</span
												>
											</p>
											<p class="text-800 fs--1 mb-0">
												<span
													class="me-1 fas fa-clock"
												></span
												><span class="fw-bold"
													>10:41 AM </span
												>August 7,2021
											</p>
										</div>
									</div>
									<div
										class="font-sans-serif d-none d-sm-block"
									>
										<button
											class="btn fs--2 btn-sm dropdown-caret-none transition-none notification-dropdown-toggle"
											type="button"
											data-stop-propagation="data-stop-propagation"
											data-bs-toggle="dropdown"
											data-boundary="window"
											aria-haspopup="true"
											aria-expanded="false"
											data-bs-reference="parent"
										>
											<span
												class="fas fa-ellipsis-h fs--2 text-900"
											></span>
										</button>
										<div
											class="dropdown-menu dropdown-menu-end py-2"
											aria-labelledby="documentations"
										>
											<a class="dropdown-item" href="#!"
												>Mark as unread</a
											>
										</div>
									</div>
								</div>
							</div>
							<div
								class="p-3 border-300 notification-card position-relative unread border-bottom"
							>
								<div
									class="d-flex align-items-center justify-content-between position-relative"
								>
									<div class="d-flex">
										<div
											class="avatar avatar-m status-online me-3"
										>
											<div
												class="avatar-name rounded-circle"
											>
												<span>J</span>
											</div>
										</div>
										<div class="me-3 flex-1">
											<h4 class="fs--1 text-black">
												Jane Foster
											</h4>
											<p
												class="fs--1 text-1000 mb-2 mb-sm-3 fw-normal"
											>
												<span class="me-1 fs--2"
													>📅</span
												>Created an event.<span
													class="ms-2 text-400 fw-bold fs--2"
													>20m</span
												>
											</p>
											<p class="text-800 fs--1 mb-0">
												<span
													class="me-1 fas fa-clock"
												></span
												><span class="fw-bold"
													>10:20 AM </span
												>August 7,2021
											</p>
										</div>
									</div>
									<div
										class="font-sans-serif d-none d-sm-block"
									>
										<button
											class="btn fs--2 btn-sm dropdown-caret-none transition-none notification-dropdown-toggle"
											type="button"
											data-stop-propagation="data-stop-propagation"
											data-bs-toggle="dropdown"
											data-boundary="window"
											aria-haspopup="true"
											aria-expanded="false"
											data-bs-reference="parent"
										>
											<span
												class="fas fa-ellipsis-h fs--2 text-900"
											></span>
										</button>
										<div
											class="dropdown-menu dropdown-menu-end py-2"
											aria-labelledby="documentations"
										>
											<a class="dropdown-item" href="#!"
												>Mark as unread</a
											>
										</div>
									</div>
								</div>
							</div>
							<div
								class="p-3 border-300 notification-card position-relative unread border-bottom"
							>
								<div
									class="d-flex align-items-center justify-content-between position-relative"
								>
									<div class="d-flex">
										<div
											class="avatar avatar-m status-online me-3"
										>
											<img
												class="rounded-circle avatar-placeholder"
												src="/assets/img/team/avatar.png"
												alt=""
											/>
										</div>
										<div class="me-3 flex-1">
											<h4 class="fs--1 text-black">
												Jessie Samson
											</h4>
											<p
												class="fs--1 text-1000 mb-2 mb-sm-3 fw-normal"
											>
												<span class="me-1 fs--2"
													>👍</span
												>Liked your comment.<span
													class="ms-2 text-400 fw-bold fs--2"
													>1h</span
												>
											</p>
											<p class="text-800 fs--1 mb-0">
												<span
													class="me-1 fas fa-clock"
												></span
												><span class="fw-bold"
													>9:30 AM </span
												>August 7,2021
											</p>
										</div>
									</div>
									<div
										class="font-sans-serif d-none d-sm-block"
									>
										<button
											class="btn fs--2 btn-sm dropdown-caret-none transition-none notification-dropdown-toggle"
											type="button"
											data-stop-propagation="data-stop-propagation"
											data-bs-toggle="dropdown"
											data-boundary="window"
											aria-haspopup="true"
											aria-expanded="false"
											data-bs-reference="parent"
										>
											<span
												class="fas fa-ellipsis-h fs--2 text-900"
											></span>
										</button>
										<div
											class="dropdown-menu dropdown-menu-end py-2"
											aria-labelledby="documentations"
										>
											<a class="dropdown-item" href="#!"
												>Mark as unread</a
											>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="border-300">
							<div
								class="p-3 border-300 notification-card position-relative unread border-bottom"
							>
								<div
									class="d-flex align-items-center justify-content-between position-relative"
								>
									<div class="d-flex">
										<div
											class="avatar avatar-m status-online me-3"
										>
											<img
												class="rounded-circle"
												src="/assets/img/team/57.png"
												alt=""
											/>
										</div>
										<div class="me-3 flex-1">
											<h4 class="fs--1 text-black">
												Kiera Anderson
											</h4>
											<p
												class="fs--1 text-1000 mb-2 mb-sm-3 fw-normal"
											>
												<span class="me-1 fs--2"
													>💬</span
												>Mentioned you in a
												comment.<span
													class="ms-2 text-400 fw-bold fs--2"
												></span>
											</p>
											<p class="text-800 fs--1 mb-0">
												<span
													class="me-1 fas fa-clock"
												></span
												><span class="fw-bold"
													>9:11 AM </span
												>August 7,2021
											</p>
										</div>
									</div>
									<div
										class="font-sans-serif d-none d-sm-block"
									>
										<button
											class="btn fs--2 btn-sm dropdown-caret-none transition-none notification-dropdown-toggle"
											type="button"
											data-stop-propagation="data-stop-propagation"
											data-bs-toggle="dropdown"
											data-boundary="window"
											aria-haspopup="true"
											aria-expanded="false"
											data-bs-reference="parent"
										>
											<span
												class="fas fa-ellipsis-h fs--2 text-900"
											></span>
										</button>
										<div
											class="dropdown-menu dropdown-menu-end py-2"
											aria-labelledby="documentations"
										>
											<a class="dropdown-item" href="#!"
												>Mark as unread</a
											>
										</div>
									</div>
								</div>
							</div>
							<div
								class="p-3 border-300 notification-card position-relative unread border-bottom"
							>
								<div
									class="d-flex align-items-center justify-content-between position-relative"
								>
									<div class="d-flex">
										<div
											class="avatar avatar-m status-online me-3"
										>
											<img
												class="rounded-circle"
												src="/assets/img/team/59.png"
												alt=""
											/>
										</div>
										<div class="me-3 flex-1">
											<h4 class="fs--1 text-black">
												Herman Carter
											</h4>
											<p
												class="fs--1 text-1000 mb-2 mb-sm-3 fw-normal"
											>
												<span class="me-1 fs--2"
													>👤</span
												>Tagged you in a comment.<span
													class="ms-2 text-400 fw-bold fs--2"
												></span>
											</p>
											<p class="text-800 fs--1 mb-0">
												<span
													class="me-1 fas fa-clock"
												></span
												><span class="fw-bold"
													>10:58 PM </span
												>August 7,2021
											</p>
										</div>
									</div>
									<div
										class="font-sans-serif d-none d-sm-block"
									>
										<button
											class="btn fs--2 btn-sm dropdown-caret-none transition-none notification-dropdown-toggle"
											type="button"
											data-stop-propagation="data-stop-propagation"
											data-bs-toggle="dropdown"
											data-boundary="window"
											aria-haspopup="true"
											aria-expanded="false"
											data-bs-reference="parent"
										>
											<span
												class="fas fa-ellipsis-h fs--2 text-900"
											></span>
										</button>
										<div
											class="dropdown-menu dropdown-menu-end py-2"
											aria-labelledby="documentations"
										>
											<a class="dropdown-item" href="#!"
												>Mark as unread</a
											>
										</div>
									</div>
								</div>
							</div>
							<div
								class="p-3 border-300 notification-card position-relative read"
							>
								<div
									class="d-flex align-items-center justify-content-between position-relative"
								>
									<div class="d-flex">
										<div
											class="avatar avatar-m status-online me-3"
										>
											<img
												class="rounded-circle"
												src="/assets/img/team/58.png"
												alt=""
											/>
										</div>
										<div class="me-3 flex-1">
											<h4 class="fs--1 text-black">
												Benjamin Button
											</h4>
											<p
												class="fs--1 text-1000 mb-2 mb-sm-3 fw-normal"
											>
												<span class="me-1 fs--2"
													>👍</span
												>Liked your comment.<span
													class="ms-2 text-400 fw-bold fs--2"
												></span>
											</p>
											<p class="text-800 fs--1 mb-0">
												<span
													class="me-1 fas fa-clock"
												></span
												><span class="fw-bold"
													>10:18 AM </span
												>August 7,2021
											</p>
										</div>
									</div>
									<div
										class="font-sans-serif d-none d-sm-block"
									>
										<button
											class="btn fs--2 btn-sm dropdown-caret-none transition-none notification-dropdown-toggle"
											type="button"
											data-stop-propagation="data-stop-propagation"
											data-bs-toggle="dropdown"
											data-boundary="window"
											aria-haspopup="true"
											aria-expanded="false"
											data-bs-reference="parent"
										>
											<span
												class="fas fa-ellipsis-h fs--2 text-900"
											></span>
										</button>
										<div
											class="dropdown-menu dropdown-menu-end py-2"
											aria-labelledby="documentations"
										>
											<a class="dropdown-item" href="#!"
												>Mark as unread</a
											>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="card-footer p-0 border-top border-0">
					<div class="my-2 text-center fw-bold fs--2 text-600">
						<a
							class="fw-bolder"
							href="notifications"
							>Notification history</a
						>
					</div>
				</div>
			</div>
		</div>
	</li>
</template>
