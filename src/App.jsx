//api
import { ApiPoke } from "../api/api"
//hook
import { useState, useEffect } from "react"
//components
import Pokedex from "./components/Pokedex"
//css
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
	const [pokemons, setPokemons] = useState([])

	useEffect(() => {
		ApiPoke({ set: setPokemons })
	}, [])

	return (
		<section className="col-12 d-flex justify-content-center">
			<Pokedex map={pokemons}/>
		</section>
	)
}

export default App
