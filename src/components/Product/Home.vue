<script setup>
	const env = import.meta.env;
	const AppName = env.VITE_APP_NAME;
</script>

<template>
	<div class="container-small hero-header-container">
		<div class="row align-items-center">
			<div class="col-12 col-lg-auto order-0 order-md-1 text-end order-1">
				<div class="position-relative p-5 p-md-7 d-lg-none">
					<div
						class="bg-holder"
						style="
							background-image: url(/assets/img/bg/bg-23.png);
							background-size: contain;
						"
					></div>
					<!--/.bg-holder-->
					<div class="position-relative">
						<img
							class="w-100 shadow-lg d-dark-none rounded-2"
							src="/assets/img/crypto/btc-lg.jpg"
							alt="hero-header"
						/><img
							class="w-100 shadow-lg d-light-none rounded-2"
							src="/assets/img/crypto/ether.png"
							alt="hero-header"
						/>
					</div>
				</div>
				<div
					class="hero-image-container position-absolute top-0 bottom-0 end-0 d-none d-lg-block"
				>
					<div class="position-relative h-100 w-100">
						<div
							class="position-absolute h-100 top-0 d-flex align-items-center end-0 hero-image-container-bg"
						>
							<img
								class="pt-7 pt-md-0 w-100"
								src="/assets/img/bg/bg-1-2.png"
								alt="hero-header"
							/>
						</div>
						<div
							class="position-absolute h-100 top-0 d-flex align-items-center end-0"
						>
							<img
								class="pt-7 pt-md-0 w-100 shadow-lg d-dark-none rounded-2"
								src="/assets/img/crypto/btc-lg.jpg"
								alt="hero-header"
							/>
							<img
								class="pt-7 pt-md-0 w-100 shadow-lg d-light-none rounded-2"
								src="/assets/img/crypto/ether.png"
								alt="hero-header"
							/>
						</div>
					</div>
				</div>
			</div>
			<div
				class="col-12 col-lg-6 text-lg-start text-center pt-8 pb-6 order-0 position-relative"
			>
				<h1
					class="fs-5 fs-lg-6 fs-md-7 fs-lg-6 fs-xl-7 fs fw-black mb-4"
				>
					<span class="text-primary me-3">{{ AppName }}</span
					>for<br />your crypto
				</h1>
				<p class="mb-5">
					Grow with the crypto world hands free. Let us do the work
					for you. Mining at its finest.
				</p>
				<a
					class="btn btn-lg btn-outline-secondary rounded-pill me-3"
					href="#!"
					role="button"
					>Sign up</a
				>
			</div>
		</div>
	</div>
</template>
