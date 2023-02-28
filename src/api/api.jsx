import axios from "axios"

export const ApiPoke = (props) => {
		let arrPoke = []

		// axios
		// .create({
		// 	baseURL: "https://pokeapi.co/api/v2/",
		// })
		// .get(`/pokemon?limit=5`)
		// .then((response) => props.set(response.data.results))
		// .catch((error) => console.log(error))

		for (let i = 1; i <= 250; i++) {
			arrPoke.push(`https://pokeapi.co/api/v2/pokemon/${i}`)
		}
		axios
			.all(arrPoke.map((Pk) => axios.get(Pk)))
			.then((response) => props.set(response))
			.catch(console.error)
}

export const ApiCard = async (props) => {
	await fetch(`https://pokeapi.co/api/v2/pokemon/${props.pokemon}`)
		.then((res) => res.json())
		.then((data) => props.setState(data))
		.catch(console.error)
}
