<script setup>
	import { CryptoMarket } from "vue-tradingview-widgets";
	import Tr from "../../i18n/translation";
</script>

<template>
	<div class="card" style="min-height: 200px;">
		<div class="card-body p-1">
			<CryptoMarket
				:options="{
					width: '100%',
					height: '450',
					defaultColumn: 'overview',
					displayCurrency: 'USD',
					locale: Tr.locale,
					isTransparent: true,
                    colorTheme: 'dark',
					autosize: true,
				}"
				class="d-lighit-none"
			/>
		</div>
	</div>
</template>
<!-- TradingView Widget BEGIN
<div class="tradingview-widget-container">
    <div class="tradingview-widget-container__widget"></div>
    <div class="tradingview-widget-copyright"><a href="https://www.tradingview.com/markets/cryptocurrencies/prices-all/" rel="noopener" target="_blank"><span class="blue-text">Crypto markets</span></a> by TradingView</div>
    <script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-screener.js" async>
    {
    "width": 1000,
    "height": 490,
    "defaultColumn": "overview",
    "screener_type": "crypto_mkt",
    "displayCurrency": "USD",
    "colorTheme": "dark",
    "locale": "en",
    "isTransparent": true
  }
    </script>
  </div> -->
<!-- TradingView Widget END -->
