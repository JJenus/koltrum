<script setup>
	import { onMounted } from "vue";

	const AppName = import.meta.env.VITE_APP_NAME;

	onMounted(() => {});
</script>

<template>
	<footer class="footer position-absolute">
		<div class="row g-0 justify-content-between align-items-center h-100">
			<div class="col-12 col-sm-auto text-center">
				<p class="mb-0 mt-2 mt-sm-0 text-900">
					{{ $t("app.outro") }}
					<span class="d-none d-sm-inline-block"></span>
					<span class="d-none d-sm-inline-block mx-1">|</span>
					<br class="d-sm-none" />2023 &copy;
				</p>
			</div>
			<div class="col-12 col-sm-auto text-center">
				<!-- <p class="mb-0 text-600">v1.8.0</p> -->
			</div>
		</div>
	</footer>
</template>
