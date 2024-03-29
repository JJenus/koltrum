import { createRouter, createWebHistory } from "vue-router";
import ProductView from "../views/ProductView.vue";

// App imports
// import AppView from "../views/AppView.vue";
import Dashboard from "../views/app/Dashboard.vue";
import Projects from "../views/app/Projects.vue";
import Wallet from "../views/app/Wallet.vue";
import Profile from "../views/app/Profile.vue";
import Market from "../views/app/Market.vue";
import Exchange from "../views/app/Exchange.vue";

// Admin imports
import AdminView from "../views/AdminView.vue";
import AdminDashboard from "../views/admin/AdminDashboard.vue";
import Users from "../views/admin/Users.vue";
import AdminProjects from "../views/admin/Projects.vue";
import AdminLogin from "../views/admin/AdminLogin.vue";
import Settings from "../views/admin/Settings.vue";

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
			path: "/admin",
			name: "admin",
			redirect: "/admin/dashboard",
			component: AdminView,
			beforeEnter: (to, from, next) => {
				if (!user.getUser()) {
					next({ name: "login" });
				} else {
					const isAdmin = user
						.getUser()
						.roles.find((e) => e.name === "ADMIN");

					// if (isAdmin) {
					// 	next();
					// } else {
					// 	next({ name: "login" });
					// }
					next();
				}
			},
			children: [
				{
					path: "dashboard",
					name: "adminDashboard",
					component: AdminDashboard,
				},
				{
					path: "projects",
					name: "adminprojects",
					component: AdminProjects,
				},
				{
					path: "users",
					name: "users",
					component: Users,
				},
				{
					path: "settings",
					name: "adminsettings",
					component: Settings,
				},
			],
		},
		{
			path: "/app",
			name: "app",
			redirect: "/app/dashboard",
			component: () => import("../views/AppView.vue"),
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
					// component: Settings,
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
		{
			path: "/admin/login",
			name: "login",
			component: AdminLogin,
		},
	],
});

router.beforeEach(Tr.routeMiddleware);

export default router;
