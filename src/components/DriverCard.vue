<template>
	<div class="card">
		<p class="titre">{{ driverData.name }} ({{ driverData.country.code }})</p>
		<div class="contenu">
			<div class="texte">
				<p><b>Nationalité:</b> {{ driverData.country.name }}, {{ driverData.nationality }}</p>
				<p><b>Date de naissance:</b> {{ driverData.birthdate }}</p>
				<p><b>Nombre de grand prix:</b> {{ driverData.grands_prix_entered }}</p>
				<p><b>Nombre de podiums:</b> {{ driverData.podiums }}</p>
			</div>
			<img :src="driverData.image" alt="" class="image">
		</div>
	</div>
</template>
<script>
export default {
	name: 'DriverCard',
	data() {
		return {
			driver: null,
		}
	},
	props: {
		driverData: {
			type: Object,
			required: true
		}
	},
}

//Réponses de l'API 
/*
{
  "get": "drivers",
  "parameters": {
	"search": "lewi"
  },
  "errors": [],
  "results": 1,
  "response": [
	{
	  "id": 20,
	  "name": "Lewis Hamilton",
	  "abbr": "HAM",
	  "image": "https://media.api-sports.io/formula-1/drivers/20.png",
	  "nationality": "British",
	  "country": {
		"name": "United Kingdom",
		"code": "GB"
	  },
	  "birthdate": "1985-01-07",
	  "birthplace": "Stevenage, United Kingdom",
	  "number": 44,
	  "grands_prix_entered": 332,
	  "world_championships": 7,
	  "podiums": 197,
	  "highest_race_finish": {
		"position": 1,
		"number": 103
	  },
	  "highest_grid_position": 1,
	  "career_points": "4639.5",
	  "teams": [
		{
		  "season": 2024,
		  "team": {
			"id": 5,
			"name": "Mercedes-AMG Petronas",
			"logo": "https://media.api-sports.io/formula-1/teams/5.png"
		  }
		},
		{
		  "season": 2023,
		  "team": {
			"id": 5,
			"name": "Mercedes-AMG Petronas",
			"logo": "https://media.api-sports.io/formula-1/teams/5.png"
		  }
		},
		{
		  "season": 2022,
		  "team": {
			"id": 5,
			"name": "Mercedes-AMG Petronas",
			"logo": "https://media.api-sports.io/formula-1/teams/5.png"
		  }
		},
		{
		  "season": 2021,
		  "team": {
			"id": 5,
			"name": "Mercedes-AMG Petronas",
			"logo": "https://media.api-sports.io/formula-1/teams/5.png"
		  }
		},
		{
		  "season": 2020,
		  "team": {
			"id": 5,
			"name": "Mercedes-AMG Petronas",
			"logo": "https://media.api-sports.io/formula-1/teams/5.png"
		  }
		},
		{
		  "season": 2019,
		  "team": {
			"id": 5,
			"name": "Mercedes-AMG Petronas",
			"logo": "https://media.api-sports.io/formula-1/teams/5.png"
		  }
		},
		{
		  "season": 2018,
		  "team": {
			"id": 5,
			"name": "Mercedes-AMG Petronas",
			"logo": "https://media.api-sports.io/formula-1/teams/5.png"
		  }
		},
		{
		  "season": 2017,
		  "team": {
			"id": 5,
			"name": "Mercedes-AMG Petronas",
			"logo": "https://media.api-sports.io/formula-1/teams/5.png"
		  }
		},
		{
		  "season": 2016,
		  "team": {
			"id": 5,
			"name": "Mercedes-AMG Petronas",
			"logo": "https://media.api-sports.io/formula-1/teams/5.png"
		  }
		},
		{
		  "season": 2015,
		  "team": {
			"id": 5,
			"name": "Mercedes-AMG Petronas",
			"logo": "https://media.api-sports.io/formula-1/teams/5.png"
		  }
		},
		{
		  "season": 2014,
		  "team": {
			"id": 5,
			"name": "Mercedes-AMG Petronas",
			"logo": "https://media.api-sports.io/formula-1/teams/5.png"
		  }
		},
		{
		  "season": 2013,
		  "team": {
			"id": 5,
			"name": "Mercedes-AMG Petronas",
			"logo": "https://media.api-sports.io/formula-1/teams/5.png"
		  }
		},
		{
		  "season": 2012,
		  "team": {
			"id": 2,
			"name": "McLaren Racing",
			"logo": "https://media.api-sports.io/formula-1/teams/2.png"
		  }
		},
		{
		  "season": 2011,
		  "team": {
			"id": 2,
			"name": "McLaren Racing",
			"logo": "https://media.api-sports.io/formula-1/teams/2.png"
		  }
		}
	  ]
	}
  ]
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
	max-width: 200px;
	max-height: 200px;
	width: 100%;
}
</style>