<script setup>
	import { inject, ref } from "vue";

	const showAddPlan = ref(false);

	function submit($evt) {}
</script>

<template>
	<div>
		<div class="d-flex align-items-center mb-4 border-bottom pb-1">
			<h1 class="fs-1 text-800">Create a project</h1>
		</div>
		<div class="row">
			<div class="col-xl-9">
				<form class="" @submit.prevent="submit($event)">
					<div
						v-if="!showAddPlan"
						class="row g-3 mb-6 align-items-end"
					>
						<div class="col-sm-6 col-md-8">
							<h5 class="mb-5">Cryto Details</h5>
							<div class="form-floating">
								<input
									class="form-control"
									id="floatingInputGrid"
									type="text"
									placeholder="Project title"
								/><label for="floatingInputGrid"
									>Crypto title</label
								>
							</div>
						</div>
						<div class="col-sm-6 col-md-4">
							<div class="form-floating">
								<input
									class="form-control"
									id="floatingInputGrid"
									type="text"
									placeholder="Project title"
								/><label for="floatingInputGrid">Symbol</label>
							</div>
						</div>
						<div class="col-sm-6 col-md-8">
							<label for="" class="mb-2"
								>Enter link to logo or upload</label
							>
							<div class="form-floating">
								<input
									class="form-control"
									id="floatingInputGrid"
									type="text"
									placeholder="Enter url"
								/><label for="floatingInputGrid">Url</label>
							</div>
						</div>

						<div class="col-sm-6 col-md-4">
							<div class="row align-items-end">
								<div class="col-3">
									<img
										width="64"
										height="64"
										src="/assets/img/bg/bg-32.png"
										alt=""
										class="m-0"
									/>
								</div>
								<div class="col-9 pb-2">
									<button
										type="button"
										class="btn btn-primary w-100"
									>
										Upload logo
									</button>
								</div>
							</div>
						</div>

						<div class="col-12 gy-6">
							<div class="row g-3 justify-content-end">
								<div class="col-auto d-none">
									<button
										class="btn btn-phoenix-primary px-5"
									>
										Cancel
									</button>
								</div>
								<div class="col-auto">
									<button
										@click="showAddPlan = true"
										type="button"
										class="btn btn-primary px-5 px-sm-15"
									>
										Next
									</button>
								</div>
							</div>
						</div>
					</div>

					<!-- Create Plan -->
					<div v-else class="row g-3 mb-6 align-items-end">
						<div class="col-sm-6 col-md-4">
							<h5 class="mb-5">Add Subscription Plan</h5>
							<div class="form-floating">
								<input
									class="form-control"
									id="floatingInputGrid"
									type="text"
									placeholder="Project title"
								/><label for="floatingInputGrid"
									>Plan title</label
								>
							</div>
						</div>
						<div class="col-sm-6 col-md-4">
							<div class="form-floating">
								<input
									class="form-control"
									id="floatingInputGrid"
									type="text"
									placeholder="Project title"
								/><label for="floatingInputGrid"
									>Amount ($)</label
								>
							</div>
						</div>
						<div class="col-sm-6 col-md-4">
							<div class="form-floating">
								<input
									class="form-control"
									id="floatingInputGrid"
									type="text"
									placeholder="Enter url"
								/><label for="floatingInputGrid"
									>Returns ($)</label
								>
							</div>
						</div>
						<div class="col-12 gy-3">
							<div class="form-floating">
								<textarea
									class="form-control"
									id="floatingProjectOverview"
									placeholder="Leave a comment here"
									style="height: 100px"
								></textarea
								><label for="floatingProjectOverview"
									>Plan Description</label
								>
							</div>
						</div>

						<div class="col-sm-6 col-md-4">
							<div class="form-check form-switch">
								<input
									class="form-check-input"
									id="flexSwitchCheckDefault222"
									type="checkbox"
								/>
								<label
									class="form-check-label"
									for="flexSwitchCheckDefault222"
									>Recommended?</label
								>
							</div>
						</div>

						<div class="col-12 gy-6">
							<label class="mb-3">Benefits</label>
							<div class="row g-3 align-items-end">
								<div class="col-10 col-md-8">
									<div class="row g-3">
										<div class="col-12">
											<div class="form-floating">
												<input
													class="form-control"
													id="floatingInputGrid"
													type="text"
													placeholder="Enter url"
												/><label for="floatingInputGrid"
													>Enter benefit</label
												>
											</div>
										</div>
										<div class="col-12">
											<div class="form-floating">
												<input
													class="form-control"
													id="floatingInputGrid"
													type="text"
													placeholder="Enter url"
												/><label for="floatingInputGrid"
													>Enter benefit</label
												>
											</div>
										</div>
									</div>
								</div>
								<div class="col-2 col-md-1">
									<button
										@click="showAddPlan = true"
										type="button"
										class="btn btn-primary btn-icon w-100"
									>
										<i class="fa-solid fa-plus"></i>
									</button>
								</div>
							</div>
						</div>

						<div class="col-12 gy-6">
							<div class="row g-3 justify-content-end">
								<div class="col-auto">
									<button
										@click="showAddPlan = false"
										type="button"
										class="btn btn-phoenix-primary px-5"
									>
										back
									</button>
								</div>
								<div class="col-auto">
									<button
										@click="showAddPlan = true"
										type="button"
										class="btn btn-primary px-5 px-sm-10"
									>
										Create project
									</button>
								</div>
							</div>
						</div>
					</div>
				</form>
			</div>
		</div>
	</div>
</template>

<!-- 
    <div class="col-12 gy-6">
						<div class="form-floating">
							<textarea
								class="form-control"
								id="floatingProjectOverview"
								placeholder="Leave a comment here"
								style="height: 100px"
							></textarea
							><label for="floatingProjectOverview"
								>project overview</label
							>
						</div>
					</div>
 -->
