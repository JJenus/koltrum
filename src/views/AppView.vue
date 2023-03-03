<script setup>
	import { RouterView } from "vue-router";
	import Navbar from "@/components/app/Navbar.vue";
	import Footer from "../components/app/Footer.vue";

	const AppName = import.meta.env.VITE_APP_NAME;

	// onMounted(() => {});
</script>

<template>
	<main class="main overflow-hidden" id="top">
		<div class="container-fluid px-0" data-layout="container">
			<Navbar />

			<RouterView />

			<Footer></Footer>
		</div>
	</main>
</template>
