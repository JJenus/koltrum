<script setup>
	import { Chart } from "vue-tradingview-widgets";
</script>

<template>
	<div class="card">
		<div class="card-body p-1 h-100 w-100" style="min-height: 320px; width: 100%">
			<Chart
				:options="{
                    // autosize: true,
                    width: '100%',
                    height: 500,
					symbol: 'BINANCE:BTCUSD',
					interval: 'D',
					timezone: 'Etc/UTC',
					theme: 'dark',
					style: '1',
					locale: 'en',
					toolbarBg: '#f1f3f6',
					enablePublishing: false,
					allowSymbol_change: true,
					calendar: true,
					studies: ['STD'],
				}"
				class="h-100 w-100"
			/>
		</div>
	</div>
</template>
