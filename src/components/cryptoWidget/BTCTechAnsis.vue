<script setup>
	import { TechnicalAnalysis } from "vue-tradingview-widgets";
	import Tr from "../../i18n/translation";
</script>

<template>
	<div class="card" style="overflow: hidden;">
		<div class="card-body p-1 " style="overflow: hidden;">
			<TechnicalAnalysis
				:options="{
                    interval: '1m',
					symbol: 'BINANCEUS:BTCUSD',
					width: '100%',
					height: '450',
					locale: Tr.locale,
					colorTheme: 'dark',
					showIntervalTabs: false,
					isTransparent: true,
					autosize: true,
				}"
				class="d-lighit-none"
			/>
		</div>
	</div>
</template>
