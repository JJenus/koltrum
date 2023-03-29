<script setup>
	import { MiniChart } from "vue-tradingview-widgets";
	import Tr from "../../i18n/translation";
</script>

<template>
	<div class="card">
		<div class="card-body p-1">
			<MiniChart
				:options="{
					symbol: 'BINANCEUS:BTCUSD',
					width: '100%',
					height: '100%',
					locale: Tr.locale,
					dateRange: '1D',
					colorTheme: 'dark',
					trendLineColor: 'rgba(41, 98, 255, 1)',
					underLineColor: 'rgba(41, 98, 255, 0.3)',
					underLineBottomColor: 'rgba(41, 98, 255, 0)',
					isTransparent: true,
					autosize: true,
					largeChartUrl: '',
				}"
				class="d-lighit-none"
			/>
		</div>
	</div>
</template>
