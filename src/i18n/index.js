import { createI18n } from "vue-i18n";
import en from "./locales/en.json";
import es from "./locales/es.json";

const i18n = createI18n({
	// default locale
	locale: "es",
	fallbackLocale: "en",

	// translations

	messages: {
		en,
		es,
	},
});

export default i18n;
