import { ref } from "vue";
import swal from "sweetalert";

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

	loadSettings() {},

	resizeImg(uri, width = 100) {
		let uArr = uri.split(".com/");
		return uArr.join(`.com/resize=width:${width}/`);
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
