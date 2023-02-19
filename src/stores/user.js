export const user = {
	user: null,
	authKey: "koltrum@whi0@key-oauth",

	getUser() {
		const userStr = localStorage.getItem(this.authKey);

		if (userStr === null || userStr === undefined) {
			return false;
		}

		this.user = JSON.parse(userStr);

		return this.user.user;
	},

	getSession() {
		const userStr = localStorage.getItem(this.authKey);

		if (userStr === null || userStr === undefined) {
			return false;
		}

		this.user = JSON.parse(userStr);
		return this.user.session;
	},

	login(userData) {
		this.user = userData;
		localStorage.setItem(this.authKey, JSON.stringify(userData));
	},

	getToken() {
		return this.user;
	},

	logout() {
		localStorage.removeItem(this.authKey);
		window.location.href = "/";
	},
};
