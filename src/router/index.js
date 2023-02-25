import { createRouter, createWebHistory } from "vue-router";
import ProductView from "../views/ProductView.vue";
import AppView from "../views/AppView.vue";

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
			component: AppView,
		},
	],
});

export default router;
