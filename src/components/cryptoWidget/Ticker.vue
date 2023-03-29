<script setup>
	import { Ticker } from "vue-tradingview-widgets";
	import Tr from "../../i18n/translation";
</script>

<template>
	<div class="card">
		<div class="card-body p-1">
			<Ticker
				:options="{
					width: '100%',
					locale: Tr.locale,
					isTransparent: true,
					colorTheme: 'dark',
					autosize: true,
                    showSymbolLogo: true,
					symbols: [
						{
							proName: 'BITSTAMP:BTCUSD',
							title: 'Bitcoin',
						},
						{
							proName: 'BITSTAMP:ETHUSD',
							title: 'Ethereum',
						},
						{
							description: 'Doge',
							proName: 'CRYPTOCAP:DOGE',
						},
						{
							description: 'Ripple',
							proName: 'SKILLING:XRPUSD',
						},
						{
							description: 'Shiba ',
							proName: 'CRYPTOCAP:SHIB',
						},
					],
				}"
				class="d-lighit-none"
			/>
		</div>
	</div>
</template>

