<template>
	<div class="card">
		<p class="titre">{{ circuitData.name }}</p>
		<p>{{ circuitData.competition.location.city }}, {{ circuitData.competition.location.country }}</p>
		<div class="contenu">

			<div class="texte">
				<p><b>Premier grand prix:</b> {{ circuitData.first_grand_prix }}</p>
				<p><b>Capacité:</b> {{ circuitData.capacity }} spéctateurs</p>
				<p><b>Longueur:</b> {{ circuitData.length }}</p>
			</div>
			<img :src="circuitData.image" alt="" class="image">
		</div>
	</div>
</template>
<script>
export default {
	name: 'CircuitCard',
	data() {
		return {
			circuit: null,
		}
	},
	props: {
		circuitData: {
			type: Object,
			required: true
		}
	},
}

/*
{
  "id": 1,
  "name": "Albert Park Circuit",
  "image": "https://media.api-sports.io/formula-1/circuits/1.png",
  "competition": {
	"id": 1,
	"name": "Australia Grand Prix",
	"location": {
	  "country": "Australia",
	  "city": "Melbourne"
	}
  },
  "first_grand_prix": 1996,
  "laps": 58,
  "length": "5.303 Kms",
  "race_distance": "307.574 kms",
  "lap_record": {
	"time": "1:24.125",
	"driver": "Michael Schumacher",
	"year": "2004"
  },
  "capacity": 80000,
  "opened": 1953,
  "owner": null
}
*/
</script>

<style scoped>
.card {
	display: flex;
	flex-direction: column;
	border-bottom: 1px solid #000;
	padding: 18px 0;
	padding-bottom: 32px;
}

b {
	font-weight: 600;

}

.titre {
	font-size: x-large;
	font-weight: 600;
}

.contenu {
	margin-top: 24px;
	justify-content: space-between;
	display: flex;
}

.texte {
	min-width: 200px;
}

.image {
	max-width: 400px;
	max-height: 300px;
	width: 100%;
}
</style>