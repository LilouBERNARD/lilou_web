<template>
	<form @submit.prevent>
		<input type="range" v-model="nbPodiums" id="nbPodiums" min="0" :max="maxPodiums" />
		<span>{{ nbPodiums }} podiums minimum</span>
	</form>
</template>

<script>
export default {
	name: 'FilterDrivers',
	data() {
		return {
			nbPodiums: 0
		}
	},
	props: {
		maxPodiums: {
			type: Number,
			default: 10
		}
	},
	watch: {
		nbPodiums: function (newVal) {
			this.$emit('filter', newVal)
		},
		maxPodiums: function (newVal) {
			if (this.nbPodiums > newVal) {
				this.nbPodiums = newVal
			}
		}
	}
}
</script>

<style scoped>
form {
	display: flex;
	align-items: center;
}

input,
label {
	margin-right: 1rem;
}
</style>