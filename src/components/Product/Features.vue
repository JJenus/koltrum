<script setup></script>

<template>
	<section class="pt-15 pb-0" id="feature">
		<div class="container-small">
			<div class="position-relative z-index-2">
				<div class="row">
					<div class="col-lg-6 text-center text-lg-start pe-xxl-3">
						<h4 class="text-primary fw-bolder mb-4">
							{{ $t("product.nav.features") }}
						</h4>
						<h2 class="mb-3 text-black lh-base">
							{{ $t("product.features.title") }}
						</h2>
						<p class="mb-5">
							{{ $t("product.features.intro") }}
						</p>
						<a
							class="btn btn-lg btn-outline-primary d-none rounded-pill me-2"
							href="#!"
							role="button"
							>Find out more<i
								class="fa-solid fa-angle-right ms-2"
							></i
						></a>
					</div>
					<div
						class="col-sm-6 col-lg-3 mt-7 text-center text-lg-start"
					>
						<div
							class="h-100 d-flex flex-column justify-content-between"
						>
							<div class="border-start-lg border-dashed ps-4">
								<img
									class="mb-4"
									src="/assets/img/icons/illustrations/bolt.png"
									width="48"
									height="48"
									alt=""
								/>
								<div>
									<h5 class="fw-bolder mb-2">
										{{ $t("product.features.speed.title") }}
									</h5>
									<p class="fw-semi-bold lh-sm">
										{{ $t("product.features.speed.intro") }}
									</p>
								</div>
							</div>
						</div>
					</div>
					<div
						class="col-sm-6 col-lg-3 mt-7 text-center text-lg-start"
					>
						<div class="h-100 d-flex flex-column">
							<div class="border-start-lg border-dashed ps-4">
								<img
									class="mb-4"
									src="/assets/img/icons/illustrations/pie.png"
									width="48"
									height="48"
									alt=""
								/>
								<div>
									<h5 class="fw-bolder mb-2">
										{{
											$t(
												"product.features.complete.title"
											)
										}}
									</h5>
									<p class="fw-semi-bold lh-sm">
										{{
											$t(
												"product.features.complete.intro"
											)
										}}
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div
					class="row mt-12 align-items-center justify-content-between text-center text-lg-start mb-6 mb-lg-0"
				>
					<div class="col-lg-5">
						<img
							class="img-fluid mb-9 mb-lg-0 d-dark-none"
							src="/assets/img/crypto/ether-spread.png"
							alt=""
						/><img
							class="img-fluid mb-9 mb-lg-0 d-light-none"
							src="/assets/img/crypto/ether-spread-sm.png"
							alt=""
						/>
					</div>
					<div class="col-lg-6">
						<h6 class="text-primary mb-2 ls-2">
							{{ $t("product.features.signal.txt") }}
						</h6>
						<h3 class="fw-bolder mb-3">
							{{ $t("product.features.signal.title") }}
						</h3>
						<p class="mb-4 px-md-7 px-lg-0">
							{{ $t("product.features.signal.desc") }}
						</p>
					</div>
				</div>
				<div
					class="row mt-2 align-items-center justify-content-between text-center text-lg-start mb-6 mb-lg-0"
				>
					<div class="col-lg-5 order-0 order-lg-1">
						<img
							class="img-fluid mb-9 mb-lg-0 d-dark-none"
							src="/assets/img/crypto/btc-trans.png"
							height="394"
							alt=""
						/><img
							class="img-fluid mb-9 mb-lg-0 d-light-none"
							src="/assets/img/crypto/btc-ill.png"
							height="394"
							alt=""
						/>
					</div>
					<div class="col-lg-6">
						<h6 class="text-primary mb-2 ls-2">{{ $t("product.features.revenue.txt") }}</h6>
						<h3 class="fw-bolder mb-3">{{ $t("product.features.revenue.title") }}</h3>
						<p class="mb-4 px-md-7 px-lg-0">
							{{ $t("product.features.revenue.desc") }}
						</p>
					</div>
				</div>
				<div
					class="row mt-2 align-items-center justify-content-between text-center text-lg-start mb-6 mb-lg-0"
				>
					<div class="col-lg-5">
						<img
							class="img-fluid mb-9 mb-lg-0 d-dark-none"
							src="/assets/img/crypto/box-grow-tr.png"
							height="394"
							alt=""
						/><img
							class="img-fluid mb-9 mb-lg-0 d-light-none"
							src="/assets/img/crypto/box-grow-tr.png"
							height="394"
							alt=""
						/>
					</div>
					<div class="col-lg-6 text-center text-lg-start">
						<h6 class="text-primary mb-2 ls-2"> {{ $t("product.features.reports.txt") }}</h6>
						<h3 class="fw-bolder mb-3"> {{ $t("product.features.reports.title") }} </h3>
						<p class="mb-4 px-md-7 px-lg-0">
							{{ $t("product.features.reports.desc") }}
						</p>
					</div>
				</div>
			</div>
		</div>
		<!-- end of .container-->
	</section>
</template>
