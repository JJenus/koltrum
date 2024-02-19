import { ref, computed, inject } from "vue";
import { defineStore } from "pinia";
import currency from "currency.js";

export const useMoneyStore = defineStore("money", () => {
	const config = inject("settings", {
		currency: "USD",
		currencySymbol: "$",
		language: "en",
		verificationFee: 5,
	});

	const format = (money, symbol = null) => {
		const amount = currency(money, {
			symbol: symbol || config.value.currencySymbol,
		}).format();
		return amount;
	};

	return { format };
});
