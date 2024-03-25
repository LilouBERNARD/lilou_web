<template>
	<div v-if="loading" class="loading">Chargement...</div>

	<div v-if="error" class="error">{{ error }}</div>

	<div v-if="data" class="contenu">
		<h1>Les différents circuits ({{ data.results }})</h1>
		<form @submit.prevent="fetchData">
			<label for="sortBy">Trier par:</label>
			<select v-model="sortBy" id="sortBy">
				<option value="name">Nom</option>
				<option value="length">Longeur</option>
				<option value="capacity">Capacité</option>
			</select>
		</form>
		<CircuitCard v-for="item in data.response" :key="item.id" :circuit-data="item" />
	</div>
</template>
  
<script>
import CircuitCard from '../components/CircuitCard.vue'
import { fetchCircuits } from "../services/api"

export default {
	name: 'Circuits',
	data() {
		return {
			loading: false,
			data: null,
			error: null,
			sortBy: "name"
		}
	},
	components: {
		CircuitCard
	},
	created() {
		this.fetchData()
	},
	methods: {
		async fetchData() {
			this.loading = true
			fetchCircuits()
				.then(response => {
					this.data = response
				})
				.catch(error => {
					this.error = error.message
				})
				.finally(() => {
					this.loading = false
				})
		},
		sortData() {
			this.data.response.sort((a, b) => {

				// sort by name
				if (this.sortBy === "name") {
					console.log("sort by name");
					return a[this.sortBy].localeCompare(b[this.sortBy])
				}

				// sort by length
				if (this.sortBy === "length") {
					console.log("sort by length");

					// convert to number
					const parsedA = parseFloat(a[this.sortBy].split(" ")[0])
					const parsedB = parseFloat(b[this.sortBy].split(" ")[0])

					return parsedA - parsedB
				}

				// sort by capacity
				if (this.sortBy === "capacity") {
					console.log("sort by capacity");

					// if no capacity, put it at the end
					if (!a[this.sortBy]) {
						return 1
					}
					if (!b[this.sortBy]) {
						return -1
					}

					return a[this.sortBy] - b[this.sortBy]
				}
			})
		},
	},
	watch: {
		sortBy() {
			this.sortData()
		}
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

label {
	margin-right: 8px;
}

h1 {
	font-size: 32px;
	font-weight: 600;
}
</style>