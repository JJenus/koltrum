<script setup>
	import Navbar from "../components/Product/Navbar.vue";
	import CryptoBanner from "../components/Product/CryptoBanner.vue";
	import Features from "../components/Product/Features.vue";
	import BTCWidget from "../components/cryptoWidget/BTCWidget.vue";
	import EtherWidget from "../components/cryptoWidget/EtherWidget.vue";
	import BTCTechAnsis from "../components/cryptoWidget/BTCTechAnsis.vue";
	import AboutVue from "../components/Product/About.vue";
	import Home from "../components/Product/Home.vue";
	import AuthModal from "../components/Product/AuthModal.vue";

	const env = import.meta.env;
	const AppName = env.VITE_APP_NAME;
</script>

<template>
	<!-- ===============================================-->
	<!--    Main Content-->
	<!-- ===============================================-->
	<AuthModal />
	<main style="--phoenix-scroll-margin-top: 1.2rem">
		<Navbar></Navbar>

		<section class="bg-white pb-1" id="home">
			<Home />
		</section>

		<section class="bg-white pb-0" id="home">
			<div class="container-small hero-header-container">
				<div class="row my-4">
					<div class="col-12 col-md-3 mb-3">
						<BTCWidget />
					</div>
					<div class="col-12 col-md-6 mb-3">
						<BTCTechAnsis />
					</div>
					<div class="col-12 col-md-3 mb-3">
						<EtherWidget />
					</div>
				</div>
			</div>
		</section>

		<!-- ============================================-->
		<CryptoBanner></CryptoBanner>
		<!-- ============================================-->

		<!-- ============================================-->
		<!-- <section> begin ============================-->
		<Features />
		<!-- <section> close ============================-->
		<!-- ============================================-->

		<div class="position-relative">
			<div
				class="bg-holder z-index-2 d-none d-md-block"
				style="
					background-image: url(/assets/img/bg/13.png);
					background-size: auto;
					background-position: right;
				"
			></div>
			<!--/.bg-holder-->
			<div
				class="bg-holder z-index-2 d-none d-md-block d-lg-none d-xl-block"
				style="
					background-image: url(/assets/img/bg/bg-12.png);
					background-size: auto;
					background-position: left;
				"
			></div>
			<!--/.bg-holder-->
			<div class="bottom-0 start-0 end-0 bg-white">
				<svg
					class="w-100 text-soft"
					viewBox="0 0 1920 368"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M1920 0.44L0 367.74V0H1920V0.44Z"
						fill="currentColor"
					></path>
				</svg>
			</div>
			<section class="pb-0 bg-white overflow-hidden position-static">
				<div class="container-small">
					<div class="row">
						<div
							class="col-lg-6 mb-6 text-center text-lg-start z-index-2"
						>
							<h4 class="text-primary fw-bolder mb-3">
								{{ $t("product.testimonial.title") }}
							</h4>
							<h2 class="mb-3 text-black">
								{{ $t("product.testimonial.intro") }}
							</h2>
							<p class="mb-5">
								{{ $t("product.testimonial.desc") }}
							</p>
						</div>
						<div class="col-lg-6 z-index-2">
							<div
								class="carousel slide"
								id="carouselExampleIndicators"
								data-bs-ride="carousel"
							>
								<div class="carousel-inner">
									<div class="carousel-item active">
										<div
											class="row g-1 g-lg-0 g-xl-1 pb-lg-3 pb-xl-0 ps-lg-1 ps-xl-0"
										>
											<div
												class="col-lg-6 col-xl-5 text-center"
											>
												<div
													class="testimonial-avatar-container d-inline-block position-relative"
												>
													<div
														class="bg-holder"
														style="
															background-image: url(/assets/img/bg/bg-2.png);
															background-size: contain;
														"
													></div>
													<!--/.bg-holder-->
													<img
														class="rounded-3 mb-lg-0 opacity-100 position-relative"
														src="/assets/img/team/61.png"
														width="153"
														height="153"
														alt=""
													/>
												</div>
											</div>
											<div
												class="col-lg-6 col-xl-7 text-center text-lg-start"
											>
												<div class="mb-4 light">
													<span
														class="fa fa-star text-primary"
													></span
													><span
														class="fa fa-star text-primary"
													></span
													><span
														class="fa fa-star text-primary"
													></span
													><span
														class="fa fa-star text-primary"
													></span
													><span
														class="fa fa-star text-primary"
													></span>
												</div>
												<h3
													class="fs-1 fs-xl-2 mb-5 lh-sm me-md-7 me-lg-0"
												>
													Brilliant app! Will
													definitely going to be my
													first choice starting from
													today
												</h3>
												<h6>Monica Gomez</h6>
											</div>
										</div>
									</div>
									<div class="carousel-item">
										<div
											class="row g-1 g-lg-0 g-xl-1 pb-lg-3 pb-xl-0 ps-lg-1 ps-xl-0"
										>
											<div
												class="col-lg-6 col-xl-5 text-center"
											>
												<div
													class="testimonial-avatar-container d-inline-block position-relative"
												>
													<div
														class="bg-holder"
														style="
															background-image: url(/assets/img/bg/bg-2.png);
															background-size: contain;
														"
													></div>
													<!--/.bg-holder-->
													<img
														class="rounded-3 mb-lg-0 opacity-100 position-relative"
														src="/assets/img/team/8.png"
														width="154"
														alt=""
													/>
												</div>
											</div>
											<div
												class="col-lg-6 col-xl-7 text-center text-lg-start"
											>
												<div class="mb-4 light">
													<span
														class="fa fa-star text-primary"
													></span
													><span
														class="fa fa-star text-primary"
													></span
													><span
														class="fa fa-star text-primary"
													></span
													><span
														class="fa fa-star text-primary"
													></span
													><span
														class="fa fa-star text-primary"
													></span>
												</div>
												<h3
													class="fs-1 fs-xl-2 mb-5 lh-sm me-md-7 me-lg-0"
												>
													“Excellent to work with and
													comfortable to customize.
													This is what I was looking
													for till the date!”
												</h3>
												<h6>Marc Chiasson</h6>
												<h6 class="fw-normal d-none">
													UX designer, Adobe
												</h6>
											</div>
										</div>
									</div>
									<div class="carousel-item">
										<div
											class="row g-1 g-lg-0 g-xl-1 pb-lg-3 pb-xl-0 ps-lg-1 ps-xl-0"
										>
											<div
												class="col-lg-6 col-xl-5 text-center"
											>
												<div
													class="testimonial-avatar-container d-inline-block position-relative"
												>
													<div
														class="bg-holder"
														style="
															background-image: url(/assets/img/bg/bg-2.png);
															background-size: contain;
														"
													></div>
													<!--/.bg-holder-->
													<img
														class="rounded-3 mb-lg-0 opacity-100 position-relative"
														src="/assets/img/team/35.png"
														width="154"
														alt=""
													/>
												</div>
											</div>
											<div
												class="col-lg-6 col-xl-7 text-center text-lg-start"
											>
												<div class="mb-4 light">
													<span
														class="fa fa-star text-primary"
													></span
													><span
														class="fa fa-star text-primary"
													></span
													><span
														class="fa fa-star text-primary"
													></span
													><span
														class="fa fa-star text-primary"
													></span
													><span
														class="fa fa-star text-primary"
													></span>
												</div>
												<h3
													class="fs-1 fs-xl-2 mb-5 lh-sm me-md-7 me-lg-0"
												>
													“{{ AppName }} is all you
													can ask for. This is perfect
													fit for everything you might
													want to work on!”
												</h3>
												<h6>Axel Barry</h6>
												<h6 class="fw-normal">
													UX designer, Apple
												</h6>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
		<div class="position-relative">
			<div
				class="bg-holder world-map-bg"
				style="background-image: url(/assets/img/bg/bg-13.png)"
			></div>
			<!--/.bg-holder-->
			<div
				class="bg-holder z-index-2 opacity-25"
				style="
					background-image: url(/assets/img/bg/bg-right-21.png);
					background-size: auto;
					background-position: right;
				"
			></div>
			<!--/.bg-holder-->
			<div
				class="bg-holder z-index-2 mt-9 opacity-25"
				style="
					background-image: url(/assets/img/bg/bg-left-21.png);
					background-size: auto;
					background-position: left;
				"
			></div>
			<!--/.bg-holder-->
			<svg
				class="w-100 text-white position-relative"
				preserveAspectRatio="none"
				viewBox="0 0 1920 368"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M1920 0.44L0 367.74V0H1920V0.44Z"
					fill="currentColor"
				></path>
			</svg>
			<section class="overflow-hidden z-index-2">
				<div class="container-small light">
					<div class="position-relative">
						<div class="row mb-6">
							<div class="col-xl-6 text-center text-md-start">
								<h2 class="text-white mb-2">
									{{ $t("product.testimonial.usage.title") }}
								</h2>
								<h1
									class="fs-md-5 fs-xl-6 fw-black text-gradient-info text-uppercase mb-4 mb-md-0"
								>
									{{ $t("product.testimonial.usage.range") }}
								</h1>
							</div>
							<div class="col-xl-6 text-center text-md-start">
								<p class="text-white">
									{{ $t("product.testimonial.usage.desc") }}
								</p>
							</div>
						</div>
						<div class="row">
							<div
								class="col-xl-8 text-center text-md-start mb-6 mb-xl-0"
							>
								<div
									class="d-md-flex justify-content-md-between"
								>
									<div class="mb-6 mb-md-0 me-4">
										<h1
											class="display-1 text-white fw-bolder"
											data-countup='{"endValue":125,"duration":10,"suffix":"+"}'
										>
											0 <span>+</span>
										</h1>
										<p class="text-white">
											{{
												$t(
													"product.testimonial.usage.month"
												)
											}}
										</p>
									</div>
									<div class="mb-6 mb-md-0 me-4">
										<h1
											class="display-1 text-white fw-bolder"
											data-countup='{"endValue":308,"duration":10,"suffix":"k"}'
										>
											0
										</h1>
										<p class="text-white">
											{{
												$t(
													"product.testimonial.usage.subscr"
												)
											}}
										</p>
									</div>
									<div class="mb-6 mb-md-0 me-4">
										<h1
											class="display-1 text-white fw-bolder"
											data-countup='{"endValue":12,"duration":0.5}'
										>
											0
										</h1>
										<p class="text-white">
											{{
												$t(
													"product.testimonial.usage.awards"
												)
											}}
										</p>
									</div>
								</div>
							</div>
							<div class="col-xl-4 text-center text-md-start">
								<img
									class="img-fluid"
									src="/assets/img/generic/capterra.png"
									alt=""
								/>
							</div>
						</div>
					</div>
				</div>
			</section>
			<svg
				class="text-white w-100 position-relative"
				viewBox="0 0 1920 368"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M0 368L1920 0.730011L1920 368L0 368Z"
					fill="currentColor"
				></path>
			</svg>
		</div>
		<section class="bg-white">
			<div
				class="bg-holder d-dark-none"
				style="
					background-image: url(/assets/img/bg/bg-5.png);
					background-size: auto;
				"
			></div>
			<!--/.bg-holder-->
			<div
				class="bg-holder d-light-none"
				style="
					background-image: url(/assets/img/bg/bg-dark-5.png);
					background-size: auto;
				"
			></div>
			<!--/.bg-holder-->
			<div
				class="bg-holder"
				style="
					background-image: url(/assets/img/bg/bg-left-5.png);
					background-position: left;
					background-size: auto;
				"
			></div>
			<!--/.bg-holder-->
			<div
				class="bg-holder"
				style="
					background-image: url(/assets/img/bg/bg-right-6.png);
					background-position: right;
					background-size: auto;
				"
			></div>
			<!--/.bg-holder-->
		</section>

		<!-- ============================================-->
		<!-- <section> begin ============================-->
		<section class="bg-white" id="about">
			<AboutVue />
		</section>
		<!-- <section> close ============================-->

		<!-- <section> begin ============================-->
		<section class="bg-white" id="contact">
			<div class="container-small">
				<div class="row mb-3 text-center text-sm-start">
					<div class="col-12 mb-4">
						<h4 class="text-primary fw-bolder mb-3">
							{{ $t("product.contact.title") }}
						</h4>
						<h2>{{ $t("product.contact.intro") }}:</h2>
					</div>
					<div class="col-md-6">
						<p>
							{{ $t("product.contact.desc") }}
						</p>
					</div>
				</div>

				<div class="row g-md-4 g-lg-5">
					<div class="col-md-6 mb-5 mb-md-0">
						<h3 class="mb-3">
							{{ $t("product.contact.email.title") }}
						</h3>
						<p class="mb-5">
							{{ $t("product.contact.email.intro") }}
						</p>
						<div class="d-flex flex-column">
							<div
								class="d-flex align-items-center icon-wrapper shadow-info"
							>
								<span
									class="uil uil-envelope text-primary light fs-4 z-index-1 ms-2"
								></span>
								<div class="flex-1 ms-3">
									<a
										class="fw-semi-bold text-900"
										href="mailto:info@koltrum.com"
										>info@koltrum.com</a
									>
								</div>
							</div>

							<div class="d-flex d-none">
								<a href="#!"
									><span
										class="fa-brands fa-facebook fs-2 text-primary me-3"
									></span></a
								><a href="#!"
									><span
										class="fa-brands fa-twitter fs-2 text-primary me-3"
									></span></a
								><a href="#!"
									><span
										class="fa-brands fa-linkedin-in fs-2 text-primary"
									></span
								></a>
							</div>
						</div>
					</div>
					<div class="col-md-6">
						<h3 class="mb-3">
							{{ $t("product.contact.chat.title") }}
						</h3>
						<p class="mb-5">
							{{ $t("product.contact.chat.intro") }}
						</p>
						<div
							class="d-flex align-items-center icon-wrapper shadow-info"
						>
							<span
								class="uil uil-chat text-primary light fs-4 z-index-1 ms-2"
							></span>
							<div class="flex-1 ms-3">
								<span class="link-900">
									{{ $t("product.contact.chat.txt") }}
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- end of .container-->
		</section>
		<!-- <section> close ============================-->

		<!-- <section> begin ============================-->
		<section class="bg-white pb-0">
			<div class="container-small">
				<div class="row justify-content-center">
					<div class="col-12 text-center">
						<div
							class="card py-md-9 px-md-13 border-0 z-index-1 shadow-lg cta-card"
						>
							<div
								class="bg-holder"
								style="
									background-image: url(/assets/img/bg/bg-18.png);
									background-position: right;
									background-size: auto;
								"
							></div>
							<!--/.bg-holder-->
							<div class="card-body position-relative">
								<img
									class="img-fluid mb-5 d-dark-none"
									src="/assets/img/spot-illustrations/27.png"
									width="210"
									alt="..."
								/><img
									class="img-fluid mb-5 d-light-none"
									src="/assets/img/spot-illustrations/dark_27.png"
									width="210"
									alt="..."
								/>
								<p class="fw-bold">
									200+ Mining Algorithms
									<span class="text-primary fs-2">.</span>
									Included FREE with it
								</p>
								<h1
									class="fs-2 fs-sm-4 fs-lg-6 fw-bolder lh-sm mb-3"
								>
									Join<span
										class="gradient-text-primary mx-2"
										>{{ AppName }}</span
									><span>Today</span>
								</h1>
								<form
									class="d-flex justify-content-center mb-3 px-xxl-12"
								>
									<div class="d-grid d-sm-block"></div>
									<input
										class="form-control me-3"
										id="ctaEmail1"
										type="email"
										placeholder="Email"
										aria-describedby="ctaEmail1"
									/><button
										class="btn btn-primary"
										type="submit"
									>
										Subscribe
									</button>
								</form>
								<p>Be first to get the latest deals.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- end of .container-->
		</section>
		<!-- <section> close ============================-->
		<!-- ============================================-->

		<div class="position-relative">
			<div
				class="bg-holder footer-bg"
				style="
					background-image: url(/assets/img/bg/bg-19.png);
					background-size: auto;
				"
			></div>
			<!--/.bg-holder-->
			<div
				class="bg-holder"
				style="
					background-image: url(/assets/img/bg/bg-right-20.png);
					background-position: right;
					background-size: auto;
				"
			></div>
			<!--/.bg-holder-->
			<div
				class="bg-holder"
				style="
					background-image: url(/assets/img/bg/bg-left-20.png);
					background-position: left;
					background-size: auto;
				"
			></div>
			<!--/.bg-holder-->
			<div class="position-relative">
				<svg
					class="w-100 text-white"
					preserveAspectRatio="none"
					viewBox="0 0 1920 368"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M1920 0.44L0 367.74V0H1920V0.44Z"
						fill="currentColor"
					></path>
				</svg>

				<!-- ============================================-->
				<!-- <section> begin ============================-->
				<section style="padding-top: 250px">
					<div class="container-small">
						<div class="row position-relative">
							<div
								class="col-12 col-sm-12 col-lg-5 mb-4 order-0 order-sm-0"
							>
								<a href="#"
									><img
										class="mb-3"
										src="/assets/img/icons/logo.png"
										height="48"
										alt=""
								/></a>
								<h3 class="text-white light">
									{{ AppName }}
								</h3>
								<p class="text-white opacity-50 light">
									{{ $t("product.outro") }}
								</p>
							</div>
							<div class="col-lg-7">
								<div class="row justify-content-between">
									<div
										class="col-6 col-sm-4 col-lg-3 mb-3 order-2 order-sm-1"
									>
										<div
											class="border-dashed border-start border-primary-300 ps-3"
											style="
												--phoenix-border-opacity: 0.2;
											"
										>
											<h5
												class="fw-bolder mb-2 text-light light"
											>
												Help
											</h5>
											<ul class="list-unstyled mb-3">
												<li class="mb-1">
													<a
														class="text-500 hover-text-100 light text-decoration-none"
														href="#!"
														>About</a
													>
												</li>
												<li class="mb-1">
													<a
														class="text-500 hover-text-100 light text-decoration-none"
														href="#!"
														>Contact</a
													>
												</li>
												<li class="mb-1">
													<a
														class="text-500 hover-text-100 light text-decoration-none"
														href="#!"
														>Developers</a
													>
												</li>
											</ul>
										</div>
										<div
											class="border-dashed border-start border-primary-300 ps-3"
											style="
												--phoenix-border-opacity: 0.2;
											"
										>
											<h5
												class="lh-lg fw-bolder mb-2 text-light light"
											>
												Follow
											</h5>
											<ul class="list-unstyled mb-2">
												<li class="mb-1">
													<a
														class="text-500 hover-text-100 light text-decoration-none"
														href="#!"
														>Facebook</a
													>
												</li>
												<li class="mb-1">
													<a
														class="text-500 hover-text-100 light text-decoration-none"
														href="#!"
														>Twitter</a
													>
												</li>
												<li class="mb-1">
													<a
														class="text-500 hover-text-100 light text-decoration-none"
														href="#!"
														>Linkedin</a
													>
												</li>
											</ul>
										</div>
									</div>
									<div
										class="col-6 col-sm-4 col-lg-3 mb-3 order-3 order-sm-2"
									>
										<div
											class="border-dashed border-start border-primary-300 ps-3"
											style="
												--phoenix-border-opacity: 0.2;
											"
										>
											<h5
												class="lh-lg fw-bold text-light mb-2 light"
											>
												Support
											</h5>
											<ul class="list-unstyled mb-md-2">
												<li class="mb-1">
													<a
														class="text-500 hover-text-100 light text-decoration-none"
														href="#!"
														>Privacy</a
													>
												</li>
												<li class="mb-1">
													<a
														class="text-500 hover-text-100 light text-decoration-none"
														href="#!"
														>Community</a
													>
												</li>
												<li class="mb-1">
													<a
														class="text-500 hover-text-100 light text-decoration-none"
														href="#!"
														>Contact</a
													>
												</li>
												<li class="mb-1">
													<a
														class="text-500 hover-text-100 light text-decoration-none"
														href="#!"
														>Blog</a
													>
												</li>
												<li class="mb-1">
													<a
														class="text-500 hover-text-100 light text-decoration-none"
														href="#!"
														>FAQ</a
													>
												</li>
												<li class="mb-1">
													<a
														class="text-500 hover-text-100 light text-decoration-none"
														href="#!"
														>Project</a
													>
												</li>
												<li class="mb-1">
													<a
														class="text-500 hover-text-100 light text-decoration-none"
														href="#!"
														>Team</a
													>
												</li>
											</ul>
										</div>
									</div>
									<div
										class="col-6 col-sm-4 col-lg-3 mb-3 order-3 order-sm-2"
									>
										<div
											class="border-dashed border-start border-primary-300 ps-3"
											style="
												--phoenix-border-opacity: 0.2;
											"
										>
											<h5
												class="lh-lg fw-bold text-light mb-2 light"
											>
												Info
											</h5>
											<ul class="list-unstyled mb-md-2">
												<li class="mb-1">
													<a
														class="text-500 hover-text-100 light text-decoration-none"
														href="#!"
														>Personal</a
													>
												</li>
												<li class="mb-1">
													<a
														class="text-500 hover-text-100 light text-decoration-none"
														href="#!"
														>NFT System</a
													>
												</li>
												<li class="mb-1">
													<a
														class="text-500 hover-text-100 light text-decoration-none"
														href="#!"
														>Agency</a
													>
												</li>
												<li class="mb-1">
													<a
														class="text-500 hover-text-100 light text-decoration-none"
														href="#!"
														>Contact</a
													>
												</li>
												<li class="mb-1">
													<a
														class="text-500 hover-text-100 light text-decoration-none"
														href="#!"
														>About</a
													>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<!-- end of .container-->
				</section>
				<!-- <section> close ============================-->
				<!-- ============================================-->
			</div>
		</div>
	</main>
	<!-- ===============================================-->
	<!--    End of Main Content-->
	<!-- ===============================================-->
</template>
