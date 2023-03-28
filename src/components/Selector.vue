<script setup>
	import Tr from "@/i18n/translation.js";

	const supportedLocales = Tr.supportedLocales;

	const locale = Tr.locale;

	const switchLanguage = async (lang) => {
		// console.log(lang)
		const newLocale = lang.target.value; 
		console.log(newLocale);
		await Tr.switchLanguage(newLocale); 
	};

	function ell(val) {
		const select = document.querySelector("#dselect");
		select.value = val;
		var event = new Event("change");
		select.dispatchEvent(event);
	}
</script>

<template>

	<input @change="switchLanguage" type="text" id="dselect" class="d-none" />

	<div class="dropdown">
		<button
			class="btn btn-outline-light dropdown-toggle p-0"
			type="button"
			data-bs-toggle="dropdown"
			aria-expanded="false"
		>
			<img
				width="24"
				class="mb-1 me-1"
				:src="$t('locale.flag')"
				:alt="$t('locale.locale')"
			/>
			{{ $t("locale.locale") }}
		</button>
		<ul class="dropdown-menu">
			<li v-for="(sLocale, index) in supportedLocales">
				<button
					@click="ell(sLocale.locale)"
					class="dropdown-item btn-link"
				>
					<img
						width="32"
						class="me-1"
						:src="sLocale.flag"
						:alt="sLocale.locale"
					/>
					{{ $t(`locale.${sLocale.locale}`) }}
				</button>
			</li>
		</ul>
	</div>
</template>


