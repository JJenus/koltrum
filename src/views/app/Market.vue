<script setup>
	import CryptoMarket from "../../components/cryptoWidget/CryptoMarket.vue";
	import Ticker from "../../components/cryptoWidget/Ticker.vue";
</script>

<template>
	<div class="content container">
		<div class="pb-5">
			<div class="mb-8">
				<h2 class="mb-2">{{ $t("app.nav.mkt") }}</h2>
				<!-- <h5 class="text-700 fw-semi-bold">
				{{ $t("app.dashboard.intro") }}
			</h5> -->
			</div>

			<div class="mb-3 p-0">
				<Ticker />
			</div>
			<div class="p-0">
				<CryptoMarket />
			</div>
		</div>
	</div>
</template>
