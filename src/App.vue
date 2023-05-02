<script setup>
import { RouterView } from "vue-router";
import PerfectScrollbar from "perfect-scrollbar";
import { provide, ref, onMounted } from "vue";
import axios from "axios";

import { util } from "@/stores/utility";

const env = import.meta.env;

// const body = document.querySelector("#app");
// const ps = new PerfectScrollbar(body);

// ps.update();

const settings = ref(util.settings());
provide("settings", settings);

async function loadSettings() {
    let config = {
        method: "GET",
        url: `${env.VITE_BE_API}/settings`,
    };

    await axios
        .request(config)
        .then((response) => {
            settings.value = response.data;
            // console.log(response.data);
        })
        .catch(function (error) {});
}

onMounted(() => {
    loadSettings();
});
</script>

<template>
    <RouterView />
</template>

<style src="perfect-scrollbar/css/perfect-scrollbar.css">
/* @import "perfect-scrollbar/css/perfect-scrollbar.css"; */
</style>
