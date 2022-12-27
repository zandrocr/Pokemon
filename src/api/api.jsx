import axios from "axios"

export const ApiPoke = (props) => {
	let arrPoke = []

	for (let i = 1; i < 900; i++) {
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
