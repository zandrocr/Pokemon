import axios from "axios"

export const ApiPoke = (props) => {
	let arrPoke = []
	for (let i = 1; i < 50; i++) {
		arrPoke.push(`https://pokeapi.co/api/v2/pokemon/${i}`)
	}
	axios
		.all(arrPoke.map((Pk) => axios.get(Pk)))
		.then((response) => props.set(response))
		.catch((err) => {
			console.log(err)
		})
}
