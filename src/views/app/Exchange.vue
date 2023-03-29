<script setup>
	import { onMounted } from "vue";
	import Tr from "../../i18n/translation";
	import "https://files.coinmarketcap.com/static/widget/coinPriceBlock.js";

	onMounted(() => {
		// const widget = document.createElement("script");
		// widget.src =
		// 	"https://files.coinmarketcap.com/static/widget/coinPriceBlock.js";
		// document.appendChild(widget);
	});
</script>

<template>
	<div class="content container">
		<div class="pb-5">
			<div class="mb-5">
				<h2 class="mb-2">{{ $t("app.nav.exc") }}</h2>
				<!-- <h5 class="text-700 fw-semi-bold">
				{{ $t("app.dashboard.intro") }}
			</h5> -->
			</div>
			<div class="mb-5">
				<div
					id="coinmarketcap-widget-coin-price-block"
					coins="1,1027,825,5994"
					currency="USD"
					theme="light"
					transparent="true"
					show-symbol-logo="true"
				></div>
			</div>
			<div class="row">
				<div class="col-md-7 collg-8 mb-3">
					<iframe
						class="rounded-3"
						src="https://bit2me.com/widget/chart/v1?currency=BTC&fiat=EUR"
						style="
							display: block;
							width: 100%;
							height: 530px;
							margin: 0 auto;
						"
						frameborder="0"
					></iframe>
				</div>
				<div class="col-md-5 col-lg-4 mb-3">
					<iframe
						class="rounded-3"
						:src="`https://bit2me.com/${Tr.locale}/widget/buy/v2?currency=BTC&amount=100&method=card`"
						style="
							display: block;
							width: 100%;
							height: 530px;
							margin: 0 auto;
						"
						frameborder="0"
					></iframe>
				</div>
			</div>
		</div>
	</div>
</template>
