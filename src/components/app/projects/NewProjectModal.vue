<script setup>
import { inject, onMounted, ref } from "vue";
import Plan from "./Plan.vue";
import { alert, koltrum } from "@/stores/utility";
import axios from "axios";

const env = import.meta.env;

const crypto = ref([]);

const showCoin = ref(null);
const makePay = ref(null);
const settings = inject("settings");
const loading = ref(null);
const transactionId = ref(null);

const user = inject("user");

const subscribe = ref({
    userId: user.value.id,
    status: "pending",
    transactionId: null,
    plan: null,
    project: null,
});

function copyToClip(text, id) {
    navigator.clipboard.writeText(text).then(() => {
        const ele = document.querySelector(id);
        ele.classList.remove("d-none");
        setTimeout(() => {
            ele.classList.add("d-none");
        }, 3000);
    });
    // B2B2B2
}

function selectCoin(coin) {
    showCoin.value = coin;
}

function makePayAndSave(e) {
    if (!e.target.checkValidity()) {
        alert.error("Form Error", "Please enter a valid transaction ID");
        return;
    }

    subscribe.value.transactionId = transactionId.value;
    subscribe.value.plan = makePay.value;
    subscribe.value.project = showCoin.value;
    loading.value = true;

    let config = {
        method: "POST",
        url: `${env.VITE_BE_API}/users/subscribe`,
        data: subscribe.value,
    };

    axios
        .request(config)
        .then((response) => {
            // console.log.log("user projects", response.data);
            alert.success();
        })
        .catch(function (error) {
            // console.log.log(error);
        })
        .finally(() => {
            loading.value = false;
        });
}

onMounted(async () => {
    crypto.value = await koltrum.loadProjects();
    // console.log.log(settings.value);
});
</script>

<template>
    <!-- Modal -->
    <div
        class="modal fade"
        id="projectsCardViewModal"
        tabindex="-1"
        aria-labelledby="projectsCardViewModal"
        aria-hidden="true"
    >
        <div class="modal-dialog modal-fullscreen-sm-down">
            <div class="modal-content overflow-hidden">
                <div
                    class="modal-header p-5 px-md-6 pb-0 position-relative border-0"
                >
                    <h2>{{ $t("app.project.cpj") }}</h2>
                    <button
                        class="btn btn-circle btn-outline-secondary border-0 position-absolute end-0 top-0 mt-3 me-3"
                        style="--phoenix-bg-opacity: 0.64"
                        data-bs-dismiss="modal"
                    >
                        <i class="fa-solid fa-times fs-2"></i>
                    </button>
                </div>
                <div class="modal-body p-5 px-md-6 pt-0 mb-4">
                    <div v-if="!showCoin">
                        <p class="mb-4">
                            {{ $t("app.project.slc") }}
                        </p>
                        <div
                            v-if="crypto.length == 0"
                            class="text-center text-muted fs-sm"
                        >
                            <span
                                class="spinner-border spinner-border-sm me-2"
                            ></span
                            >{{ $t("loading") + "..." }}
                        </div>
                        <div class="row">
                            <div
                                v-for="coin in crypto"
                                class="col-6 col-md-4 mb-4"
                            >
                                <button
                                    class="w-100 btn d-flex fw-bold py-3 fs-1 flex-column justify-items-center align-items-center btn-outline-secondary"
                                    @click="selectCoin(coin)"
                                >
                                    <div class="mb-2">
                                        <img
                                            :src="coin.logoUrl"
                                            class="w-100 crypto"
                                        />
                                    </div>
                                    <span class="">{{ coin.symbol }}</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    <!-- Select plan -->
                    <div v-else>
                        <p class="mb-4">
                            <a
                                @click="showCoin = null"
                                class="me-4 ms-1 fs-1"
                                href="#"
                            >
                                <i class="fa-solid fa-arrow-left"></i>
                            </a>
                            Select prefered plan
                        </p>

                        <div>
                            <h5 class="">
                                {{ showCoin?.name }} ({{ showCoin?.symbol }})
                            </h5>
                            <hr class="mb-2" />
                            <div class="row g-3" v-if="!makePay">
                                <div
                                    v-for="(plan, i) in showCoin.plans"
                                    class="col-12 col-md-6 col-lg-12 col-xl-6"
                                >
                                    <Plan
                                        :plan="plan"
                                        :index="i"
                                        @click="makePay = plan"
                                    />
                                </div>
                            </div>
                            <div v-else>
                                <div>Plan: {{ makePay.title }}</div>
                                <div class="mb-3">
                                    {{ $t("app.project.pay.amount") }}:
                                    {{ makePay.amount }}
                                </div>
                                <div class="border rounded p-3 fs-xs mb-4">
                                    {{ $t("app.project.pay.dir") }}

                                    <div
                                        v-if="settings.walletAddress"
                                        class="mt-3 align-items-center position-relative card p-0 d-flex flex-row"
                                    >
                                        <div
                                            style="background-color: #eaeaea"
                                            class="me-2 p-2 bg-secondiary text-dark rounded-start"
                                        >
                                            {{ settings.cryptoName }}
                                        </div>
                                        <span
                                            class="text-truncate"
                                            style="width: 180px"
                                        >
                                            {{ settings.walletAddress }}
                                        </span>

                                        <div
                                            class="position-absolute end-0 top-0 m-1 d-flex align-items-center justify-content-center"
                                        >
                                            <span
                                                :id="'copi-btc'"
                                                style="font-size: small"
                                                class="p-2 py-1 border rounded-3 bg-white d-none me-2"
                                                >Copied</span
                                            >
                                            <button
                                                @click="
                                                    copyToClip(
                                                        settings.walletAddress,
                                                        '#copi-btc'
                                                    )
                                                "
                                                class="btn btn-outline-secondary border-0 btn-icon"
                                            >
                                                <i
                                                    class="fa-solid fa-clipboard"
                                                ></i>
                                            </button>
                                        </div>
                                    </div>

                                    <div
                                        v-if="settings.paypal"
                                        class="mt-3 align-items-center position-relative card p-0 d-flex flex-row"
                                    >
                                        <div
                                            style="background-color: #eaeaea"
                                            class="me-2 p-2 bg-secondiary text-dark rounded-start"
                                        >
                                            {{ "Paypal" }}
                                        </div>
                                        <span
                                            class="text-truncate"
                                            style="width: 180px"
                                        >
                                            {{ settings.paypal }}
                                        </span>

                                        <div
                                            class="position-absolute end-0 top-0 m-1 d-flex align-items-center justify-content-center"
                                        >
                                            <span
                                                :id="'copi-pp'"
                                                style="font-size: small"
                                                class="p-2 py-1 border rounded-3 bg-white d-none me-2"
                                                >Copied</span
                                            >
                                            <button
                                                @click="
                                                    copyToClip(
                                                        settings.walletAddress,
                                                        '#copi-pp'
                                                    )
                                                "
                                                class="btn btn-outline-secondary border-0 btn-icon"
                                            >
                                                <i
                                                    class="fa-solid fa-clipboard"
                                                ></i>
                                            </button>
                                        </div>
                                    </div>

                                    <div
                                        v-if="settings.skrill"
                                        class="mt-3 align-items-center position-relative card p-0 d-flex flex-row"
                                    >
                                        <div
                                            style="background-color: #eaeaea"
                                            class="me-2 p-2 bg-secondiary text-dark rounded-start"
                                        >
                                            {{ "Skrill" }}
                                        </div>
                                        <span
                                            class="text-truncate"
                                            style="width: 180px"
                                        >
                                            {{ settings.skrill }}
                                        </span>

                                        <div
                                            class="position-absolute end-0 top-0 m-1 d-flex align-items-center justify-content-center"
                                        >
                                            <span
                                                :id="'copi-sk'"
                                                style="font-size: small"
                                                class="p-2 py-1 border rounded-3 bg-white d-none me-2"
                                                >Copied</span
                                            >
                                            <button
                                                @click="
                                                    copyToClip(
                                                        settings.walletAddress,
                                                        '#copi-sk'
                                                    )
                                                "
                                                class="btn btn-outline-secondary border-0 btn-icon"
                                            >
                                                <i
                                                    class="fa-solid fa-clipboard"
                                                ></i>
                                            </button>
                                        </div>
                                    </div>

                                    <div
                                        v-for="(
                                            option, num
                                        ) in settings.paymentOptions"
                                        class="mt-3 align-items-center position-relative card p-0 d-flex flex-row"
                                    >
                                        <div
                                            style="background-color: #eaeaea"
                                            class="me-2 p-2 bg-secondiary text-dark rounded-start"
                                        >
                                            {{ option.name }}
                                        </div>
                                        <span
                                            class="text-truncate"
                                            style="width: 200px"
                                        >
                                            {{ option.address }}
                                        </span>

                                        <div
                                            class="position-absolute end-0 top-0 m-1 d-flex align-items-center justify-content-center"
                                        >
                                            <span
                                                :id="'copi' + num"
                                                style="font-size: small"
                                                class="p-2 py-1 border rounded-3 bg-white d-none me-2"
                                                >Copied</span
                                            >
                                            <button
                                                @click="
                                                    copyToClip(
                                                        option.address,
                                                        '#copi' + num
                                                    )
                                                "
                                                class="btn btn-outline-secondary border-0 btn-icon"
                                            >
                                                <i
                                                    class="fa-solid fa-clipboard"
                                                ></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <form
                                    action=""
                                    @submit.prevent="makePayAndSave($event)"
                                >
                                    <div class="mb-3">
                                        <label for="transactionId">{{
                                            $t("app.project.pay.transid")
                                        }}</label>
                                        <input
                                            type="text"
                                            class="form-control"
                                            placeholder="Enter transaction"
                                            v-model="transactionId"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <button
                                            @click="makePay = null"
                                            class="btn btn-secondary me-2"
                                        >
                                            {{ $t("back") }}
                                        </button>
                                        <button class="btn btn-primary">
                                            <span v-if="!loading">{{
                                                $t("submit")
                                            }}</span>
                                            <span
                                                v-else
                                                class="spinner-border spinner-border-sm"
                                            ></span>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.crypto {
    height: 70px;
}
</style>
