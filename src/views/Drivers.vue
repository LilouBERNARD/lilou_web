<template>
	<div v-if="loading" class="loading">Chargement...</div>

	<div v-if="error" class="error">{{ error }}</div>

	<div v-if="data" class="contenu">

		<h1>Rechercher un/des pilotes ({{ data.results }} trouvé.es)</h1>
		<form @submit.prevent="fetchData">
			<input type="text" v-model="search" placeholder="Rechercher un pilote" />
			<button type="submit">Rechercher</button>
		</form>
		<DriverCard v-for="item in data.response" :key="item.id" :driver-data="item" />
	</div>
</template>

<script>
import { fetchDrivers } from "../services/api"
import DriverCard from "../components/DriverCard.vue"

export default {
	name: 'Drivers',
	data() {
		return {
			search: "lewis hamilton",
			loading: false,
			data: null,
			error: null,
		}
	},
	created() {
		this.fetchData()
	},
	methods: {
		async fetchData() {
			this.loading = true
			fetchDrivers(this.search)
				.then(response => {
					this.data = response
				})
				.catch(error => {
					this.error = error.message
				})
				.finally(() => {
					this.loading = false
				})
		}
	},
	components: {
		DriverCard
	}
}
</script>

<style scoped>
.contenu {
	margin-top: 24px;
	display: flex;
	flex-direction: column;
	gap: 24px;
}

input {
	margin-right: 8px;
}

h1 {
	font-size: 32px;
	font-weight: 600;
}
</style>