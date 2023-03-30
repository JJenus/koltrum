<script setup>
	import { inject, onMounted, ref } from "vue";
	import { user as userUtil } from "../../stores/user";
	import { useRoute, useRouter } from "vue-router";

	const user = inject("user");
	const parentPath = ref("app");

	const router = useRouter();
	const route = useRoute();

	onMounted(async () => {
		await router.isReady();
		parentPath.value = route.matched[0].path;
		console.log(parentPath.value);
	});
</script>

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
			<div v-if="user.imgUrl" class="avatar avatar-l">
				<img class="rounded-circle" :src="user.imgUrl" alt="" />
			</div>
			<div v-else class="border rounded-circle p-3">
				<i class="fas fa-user fs-1"></i>
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
								v-if="user.imgUrl"
								class="rounded-circle"
								:src="user.imgUrl"
								alt=""
							/>
							<div v-else class="border rounded-circle p-0 py-2">
								<i class="fas fa-user m-0 p-0"></i>
							</div>
						</div>
						<h6 class="mt-2 text-black">{{ user.name }}</h6>
					</div>
				</div>
				<div
					class="overflow-auto scrollbar border-top"
					style="height: 10rem"
				>
					<ul class="nav d-flex flex-column mb-2 py-3">
						<li class="nav-item">
							<a class="nav-link px-3" :href="`${parentPath}/profile`">
								<span
									class="me-2 text-900"
									data-feather="user"
								></span
								><span>
									{{ $t("app.nav.profile") }}
								</span></a
							>
						</li>
						<li class="nav-item">
							<a class="nav-link px-3" :href="`${parentPath}/dashboard`"
								><span
									class="me-2 text-900"
									data-feather="pie-chart"
								></span
								>{{ $t("app.nav.dashboard") }}</a
							>
						</li>

						<li class="nav-item">
							<a class="nav-link px-3" href="#!">
								<span
									class="me-2 text-900"
									data-feather="settings"
								></span
								>{{ $t("app.nav.setting") }}
							</a>
						</li>

						<li class="nav-item">
							<a class="nav-link px-3" href="#!">
								<span
									class="me-2 text-900"
									data-feather="globe"
								></span
								>{{ $t("app.nav.lang") }}:
								<strong class="ms-2">
									{{ $t("locale.locale") }}
								</strong>
							</a>
						</li>
					</ul>
				</div>
				<div class="card-footer p-0">
					<div class="px-3 my-2">
						<a
							class="btn btn-phoenix-secondary d-flex flex-center w-100"
							href="#"
							@click="userUtil.logout()"
						>
							<span class="me-2" data-feather="log-out"> </span
							>{{ $t("signout") }}</a
						>
					</div>
					<div class="my-2 text-center d-none fw-bold fs--2 text-600">
						<a class="text-600 me-1" href="#!">Privacy policy</a
						>&bull;<a class="text-600 mx-1" href="#!">Terms</a
						>&bull;<a class="text-600 ms-1" href="#!">Cookies</a>
					</div>
				</div>
			</div>
		</div>
	</li>
</template>
