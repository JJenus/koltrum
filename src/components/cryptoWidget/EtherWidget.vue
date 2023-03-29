<script setup>
	import { SingleTicker } from "vue-tradingview-widgets";
	import Tr from "../../i18n/translation";
</script>

<template>
	<div class="card">
		<div class="card-body p-1 ">
			<SingleTicker
				:options="{
					symbol: 'BINANCEUS:ETHUSD',
					width: '100%',
					height: '100%',
					locale: Tr.locale,
					isTransparent: true,
					autosize: true,
				}"
				class="d-lighit-none"
			/>
		</div>
	</div>
</template>
