<script setup>
	import { onBeforeMount, ref, provide } from "vue";
	import { RouterView } from "vue-router";
	import Navbar from "@/components/admin/Navbar.vue";
	import SideNav from "../components/admin/SideNav.vue";

	import { user } from "@/stores/user";
	import axios from "axios";
	import { util } from "@/stores/utility";

	import Footer from "../components/app/Footer.vue";

	const env = import.meta.env;
	const sessions = ref([]);
	const appUser = ref(user.getUser());
	const settings = ref(util.settings());

	provide("user", appUser);
	provide("settings", settings);

	function loadSessions() {
		let config = {
			method: "GET",
			url: `${env.VITE_BE_API}/users/${user.getUser().id}/sessions`,
		};

		axios
			.request(config)
			.then((response) => {
				const session = user.getSession();
				sessions.value = response.data;

				const check = sessions.value.find(
					(e) => e.deviceId == session.deviceId
				);

				if (!check) {
					user.logout();
				}
			})
			.catch(function (error) {
				console.log(error);
			});
	}

	async function loadUser() {
		let config = {
			method: "GET",
			url: `${env.VITE_BE_API}/users/${user.getUser().id}`,
		};

		await axios
			.request(config)
			.then((response) => {
				appUser.value = response.data;
			})
			.catch(function (error) {});
	}

	onBeforeMount(async () => {
		await loadUser();
	});

	// onMounted(() => {});
</script>

<template>
	<main class="main" id="top">
		<div class="container-fluid px-0" data-layout="corntainer">
			<Navbar />
			<SideNav />
			<div class="content nav-show">
				<RouterView />
				<Footer />
			</div>
		</div>
	</main>
</template>

<style scoped>
	@media (min-width: 992px) {
		.nav-show {
			margin-left: 70px;
		}
	}
</style>
