<template>
	<div v-if="loading" class="loading">Chargement...</div>

	<div v-if="error" class="error">{{ error }}</div>

	<div v-if="data" class="contenu">

		<h1>Rechercher un/des pilotes ({{ data.results }} trouvé.es)</h1>
		<form @submit.prevent="fetchData">
			<input type="text" v-model="search" placeholder="Rechercher un pilote" />
			<button type="submit">Rechercher</button>
		</form>

		<FilterDrivers @filter="nbPodiums = $event" :max-podiums="getMaxPodiums" />

		<DriverCard v-for="item in filteredDrivers" :key="item.id" :driver-data="item" />
	</div>
</template>

<script>
import { fetchDrivers } from "../services/api"
import DriverCard from "../components/DriverCard.vue"
import FilterDrivers from "../components/FilterDrivers.vue"

export default {
	name: 'Drivers',
	data() {
		return {
			search: "cha",
			nbPodiums: 0,
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
			this.error = null

			if (this.search === "" || this.search.length < 4)
				this.error = "Veuillez entrer un nom de pilote valide"

			fetchDrivers(this.search)
				.then(response => {
					this.data = response
				})
				.catch(error => {
					console.log(error);
					this.error = error
				})
				.finally(() => {
					this.loading = false
				})
		}
	},
	components: {
		DriverCard,
		FilterDrivers
	},
	computed: {
		filteredDrivers() {
			if (!this.data) return []
			return this.data.response.filter(driver => driver.podiums >= this.nbPodiums)
		},
		getMaxPodiums() {
			if (!this.data) return 0
			return Math.max(...this.data.response.map(driver => driver.podiums))
		}
	},
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