<script setup>
import { onMounted, provide, ref } from "vue";
import User from "../../components/admin/User.vue";
import { koltrum, util } from "../../stores/utility.js";

const env = import.meta.env;

const users = ref([]);

function deleteUser(id) {
	users.value = users.value.filter((e) => e.id !== id);
}
provide("deleteClient", deleteUser);

function search($evt) {
	util.search(".user", $evt.target.value);
	// console.log($evt.target.value);
}

onMounted(async () => {
	users.value = await koltrum.loadUsers();
});
</script>

<template>
	<div class="row mb-6 justify-content-between align-items-end">
		<div class="col-md-9 col-auto mb-3">
			<h2 class="mb-2 text-1100">Users</h2>
			<h5 class="text-700 fw-semi-bold">All registered users.</h5>
		</div>
		<div class="col-md-3 col-auto mb-3">
			<div class="search-box w-100 mb-2 mb-sm-0" style="max-width: 30rem">
				<form
					class="position-relative"
					data-bs-toggle="search"
					data-bs-display="static"
				>
					<input
						@keyup="search($event)"
						class="form-control search-input search"
						type="search"
						placeholder="Search users"
						aria-label="Search"
					/>
					<span class="fas fa-search search-box-icon"></span>
				</form>
			</div>
		</div>
	</div>

	<div v-if="users.length == 0" class="text-center text-muted h5">
		No user
	</div>

	<div
		class="row row-cols-1 row-cols-md-3 row-cols-lg-4 row-cols-xxl-4 g-4 mb-5"
	>
		<div v-for="user in users" class="col user">
			<div class="shadow-lg">
				<User :user="user" />
			</div>
		</div>
	</div>
</template>
