import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import "../css/search.css"
import CardSearch from "./CardSearch"

const Search = (props) => {
	const api = props.api
	const [filter, setFilter] = useState("")
	function filt(e) {
		setFilter(e.target.value)
	}

	if (props.cleanBar == false && window.innerWidth <= 768) {
		setTimeout(() => {
			setFilter("")
		}, [])
	}

	const [array, setArray] = useState([])
	useEffect(() => {
		setArray(api.filter((name) => name.data.name.toLowerCase().includes(filter.toLowerCase())))
	}, [filter, api])

	function apagar() {
		setFilter("")
		setTimeout(() => {
			window.location.reload(true)
		}, [])
	}

	function result() {
		if (filter.length >= 1 && array.length == 0) {
			return (
				<section className="result col-12 col-lg-12 d-flex flex-column align-items-center">
					<h3>Nenhum pokemon encontrado</h3>
				</section>
			)
		} else if (filter.length >= 1 && array.length >= 1) {
			return (
				<section className="result col-12 col-lg-12 d-flex flex-column align-items-center">
					{array.map((pokemon, i) => {
						return (
							<Link
								key={i}
								onClick={apagar}
								to={`/pokemon/${pokemon.data.id}`}
								className="col-12 col-lg-10 d-flex justify-content-center">
								<CardSearch
									name={pokemon.data.name}
									id={pokemon.data.id}
									sprite={pokemon.data.sprites.front_default}
									types={pokemon.data.types}
									abilitys={pokemon.data.abilities}
									stats={pokemon.data.stats}
								/>
							</Link>
						)
					})}
				</section>
			)
		}
	}

	return (
		<section className="search col-12 d-flex flex-column align-items-center">
			<input
				type="text"
				placeholder="Procure aqui seu Pokemon!!!"
				className="col-12"
				onChange={filt}
				value={filter}
			/>
			{result()}
		</section>
	)
}

export default Search
