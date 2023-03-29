import { createRouter, createWebHistory } from "vue-router";
import ProductView from "../views/ProductView.vue";
import AppView from "../views/AppView.vue";
import Dashboard from "../views/app/Dashboard.vue";
import Projects from "../views/app/Projects.vue";
import Wallet from "../views/app/Wallet.vue";
import Profile from "../views/app/Profile.vue";
import Market from "../views/app/Market.vue";
import Exchange from "../views/app/Exchange.vue";

import { user } from "@/stores/user";
import Tr from "@/i18n/translation";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "home",
			component: ProductView,
		},
		{
			path: "/app",
			name: "app",
			redirect: "/app/dashboard",
			component: AppView,
			beforeEnter: (to, from, next) => {
				if (!user.getUser()) {
					next({ name: "home" });
				} else {
					next();
				}
				// next();
			},
			children: [
				{
					path: "dashboard",
					name: "dashboard",
					component: Dashboard,
				},
				{
					path: "projects",
					name: "projects",
					component: Projects,
				},
				{
					path: "wallets",
					name: "wallets",
					component: Wallet,
				},
				{
					path: "settings",
					name: "settings",
					// component: CardsVue,
				},
				{
					path: "profile",
					name: "profile",
					component: Profile,
				},
				{
					path: "market",
					name: "market",
					component: Market,
				},
				{
					path: "exchange",
					name: "exchange",
					component: Exchange,
				},
			],
		},
	],
});

router.beforeEach(Tr.routeMiddleware);

export default router;
