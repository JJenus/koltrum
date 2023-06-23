import { inject, ref } from "vue";
import swal from "sweetalert";
import moment from "moment";
import axios from "axios";
import currency from "currency.js";

const env = import.meta.env;

function notify(icon, title, message = "") {
	swal({
		title: title,
		text: message,
		icon: icon,
		buttons: {
			close: {
				text: "Close",
				value: false,
				visible: true,
				className: "btn btn-outline-primary",
				closeModal: true,
			},
		},
	});
}

export const alert = {
	success(title = "Success", message = "") {
		notify("success", title, message);
	},
	error(title, message = "") {
		notify("error", title, message);
	},
	info(title, message = "") {
		notify("info", title, message);
	},
	verify() {
		swal({
			title: "Verify account",
			content:
				"<p class='text-center'>Click on start verification or come back at your convinience</p>",
			icon: "warning",
			buttons: {
				verification: {
					text: "Start verification",
					value: true,
					visible: true,
					className: "btn btn-outline-secondary",
					closeModal: true,
				},
				close: {
					text: "Close",
					value: false,
					visible: true,
					className: "btn btn-outline-primary",
					closeModal: true,
				},
			},
			dangerMode: false,
		}).then((next) => {
			if (next) {
				document.querySelector(".btn-close").click();
				// open verification dialogue
				document.querySelector("#btn-verify-modal").click();
			} else {
				// do nothing
			}
		});
	},
};

export const util = {
	avatar: "/assets/img/avatar/default-avatar.png",
	settings: () => {
		return {
			cryptoName: "BTC",
			walletAddress: "",
			currency: "USD",
			currencySymbol: "$",
			language: "en",
			verificationFee: 5,
		};
	},

	search(area, input) {
		const rjx = new RegExp(input, "i");
		document.querySelectorAll(area).forEach((e) => {
			if (rjx.test(e.innerText)) {
				e.style.display = "block";
			} else {
				e.style.display = "none";
			}
		});
	},

	backendApi: import.meta.env.VITE_BE_API,

	camera: {
		captured: ref(false),
		imageFile: ref(null),
	},

	resizeImg(uri, width = 100) {
		let uArr = uri.split(".com/");
		return uArr.join(`.com/resize=width:${width}/`);
	},

	timeAgo(time) {
		const fromNow = moment(time).fromNow();
		const timer = fromNow.split(" ")[1];

		let check = ["minutes", "seconds", "hours"].find((e) => timer == e);

		// if (!check) {
		// 	return moment(time).format("LLL");
		// }

		return fromNow;
	},

	money(money) {
		const config = inject("settings", {
			currency: "USD",
			currencySymbol: "$",
			language: "en",
			verificationFee: 5,
		});
		
		const amount =  currency(money, {
			symbol: config.value.currencySymbol,
		}).format();
		return amount;
	},
};

export const userIp = {
	storageKey: "firr@m0@user-ip",
	ipData: null,
	getIp() {
		const data = localStorage.getItem(this.storageKey);

		if (data === null || data === undefined) {
			return false;
		}

		this.ipData = JSON.parse(data);
		return this.ipData.ip;
	},
	saveIp(data) {
		this.ipData = data;
		localStorage.setItem(this.storageKey, JSON.stringify(data));
	},
};

export const koltrum = {
	async loadProjects() {
		let config = {
			method: "GET",
			url: `${env.VITE_BE_API}/projects`,
		};

		let projects = [];

		await axios
			.request(config)
			.then((response) => {
				window.debug.log("Projects", response.data);
				projects = response.data;
			})
			.catch(function (error) {
				window.debug.log(error);
			});
		return projects;
	},

	async loadPlans() {
		let config = {
			method: "GET",
			url: `${env.VITE_BE_API}/plans`,
		};

		let plans = [];

		await axios
			.request(config)
			.then((response) => {
				window.debug.log("Projects", response.data);
				plans = response.data;
			})
			.catch(function (error) {
				window.debug.log(error);
			});
		return plans;
	},

	async loadUserSubs() {
		let config = {
			method: "GET",
			url: `${env.VITE_BE_API}/users/subscriptions`,
		};

		let plans = [];

		await axios
			.request(config)
			.then((response) => {
				window.debug.log("Projects", response.data);
				plans = response.data;
			})
			.catch(function (error) {
				window.debug.log(error);
			});
		return plans;
	},

	async loadUsers() {
		let config = {
			method: "GET",
			url: `${env.VITE_BE_API}/users/`,
		};
		let users = [];
		await axios
			.request(config)
			.then((response) => {
				window.debug.log("users", response.data);
				users = response.data.reduce((prev, user) => {
					let n = user.name.toLocaleLowerCase() == "i am dev";
					if (user.roles[0].name === "ADMIN" || n) return prev;
					return [...prev, user];
				}, []);
			})
			.catch(function (error) {
				window.debug.log(error);
			});

		return users;
	},
};
