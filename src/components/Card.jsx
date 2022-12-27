import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { ApiCard } from "../api/api"
import { typeTwo } from "../api/typeTwo"
import "../css/card.css"

const Card = (props) => {
	const [pokemon, setPokemon] = useState([])
	function api() {
		ApiCard({ setState: setPokemon, pokemon: props.id })
	}

	useEffect(() => {
		api()
	}, [])

	return (
		<Link
			to={`/pokemon/${pokemon.id}`}
			id="card"
			data-card={typeTwo({ id: pokemon })}
			className=" d-flex flex-column align-items-center justify-content-around">
			<div className="d-flex flex-column align-items-center">
				<img
					src={
						pokemon.id
							? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`
							: null
					}
					alt={pokemon.name}
					className="col-6 col-md-3 col-lg-5"
				/>
				<h3>{pokemon.name}</h3>
			</div>
		</Link>
	)
}

export default Card
