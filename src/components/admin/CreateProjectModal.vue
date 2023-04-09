<script setup>
	import { inject, ref } from "vue";
	import AddPlan from "./AddPlan.vue";

	const showAddPlan = ref(false);
	const tempImage = ref("/assets/img/bg/bg-32.png");
	const coinLogo = ref(tempImage.value);
	const imgFile = ref(null);

	const project = ref({
		id: null,
		symbol: "",
		crypto: "",
		logoUrl: null,
		plans: [],
	});

	function changeSetImage(val) {
		if (val.trim()) coinLogo.value = val;
		else coinLogo.value = tempImage.value;
	}

	function selectImage() {
		// const input = document.querySelector("#select-profile-image");
		const input = document.createElement("input");
		input.setAttribute("type", "file");
		input.addEventListener("change", newImage);
		input.click();
	}

	function newImage(evt) {
		const input = evt.target;

		if (input.files && input.files[0]) {
			imgFile.value = input.files[0];
			coinLogo.value = URL.createObjectURL(input.files[0]);
		}
	}

	function submit($evt) {}
</script>

<template>
	<div>
		<div class="d-flex align-items-center mb-4 border-bottom pb-1">
			<button
				v-if="showAddPlan"
				@click="showAddPlan = false"
				class="me-3 btn p-0 text-primary fs-1"
			>
				<i class="fa-solid fa-arrow-left"></i>
			</button>
			<h1 class="fs-1 text-800">Create a project</h1>
		</div>
		<div class="row">
			<div class="col-xl-9">
				<div class="pb-4">
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
									v-model="project.crypto"
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
									v-model="project.symbol"
								/><label for="floatingInputGrid">Symbol</label>
							</div>
						</div>
						<div class="col-sm-6 col-md-8">
							<label for="" class="mb-2"
								>Enter link to logo or upload</label
							>
							<div class="form-floating">
								<input
									@keyup="changeSetImage($event.target.value)"
									class="form-control"
									id="floatingInputGrid"
									type="text"
									v-model="project.logoUrl"
								/><label for="floatingInputGrid">Url</label>
							</div>
						</div>

						<div class="col-sm-6 col-md-4">
							<div
								class="row align-items-end justify-content-between"
							>
								<div class="col-3">
									<img
										width="64"
										height="64"
										:src="coinLogo"
										alt=""
										class="m-0"
									/>
								</div>
								<div class="col-9 col-lg-8 pb-2">
									<button
										type="button"
										class="btn btn-primary ms-md-3"
										@click="selectImage()"
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
					<div v-else>
						<AddPlan :project="project" />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
