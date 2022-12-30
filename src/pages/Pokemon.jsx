import { ApiCard } from "../api/api"
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
//css
import "../css/pokemon.css"
import ModalCard from "../components/ModalCard"
import kantoMap from "../img/maps/kantoMap.png"
import johto from "../img/maps/JohtoMap.png"
import hoenn from "../img/maps/Hoenn_ORAS.png"
import sinnoh from "../img/maps/Sinnoh_BDSP_artwork.png"
import unova from "../img/maps/Unova_B2W2_alt.png"
import kalos from "../img/maps/Kalos_alt.png"
import alola from "../img/maps/Alola_USUM_artwork.png"
import Load from "../components/Load"

const Pokemon = (props) => {
	const { id } = useParams()
	const [arrPoke, setArrPoke] = useState([])

	function api() {
		ApiCard({ setState: setArrPoke, pokemon: id })
	}

	const movesPokemon = arrPoke.moves ? [arrPoke.moves] : null
	useEffect(() => {
		api()
		window.scrollTo({ top: 0 })
	}, [])

	function map() {
		if (arrPoke.id <= 151) {
			return kantoMap
		} else if (arrPoke.id <= 251) {
			return johto
		} else if (arrPoke.id <= 386) {
			return hoenn
		} else if (arrPoke.id <= 494) {
			return sinnoh
		} else if (arrPoke.id <= 649) {
			return unova
		} else if (arrPoke.id <= 721) {
			return kalos
		} else {
			return alola
		}
	}

	return (
		<section
			data-pokemon
			className="col-12 d-flex flex-column justify-content-around align-items-center">
			{/* {!arrPoke.name && <Load />} */}
			<ModalCard api={arrPoke} />
			<div data-sprites>
				<h4>Referências</h4>
				<div>
					<img
						src={arrPoke.sprites ? arrPoke.sprites.front_default : null}
						alt={arrPoke.name}
					/>
					<img
						src={arrPoke.sprites ? arrPoke.sprites.back_default : null}
						alt={arrPoke.name}
					/>
					<img
						src={arrPoke.sprites ? arrPoke.sprites.front_shiny : null}
						alt={arrPoke.name}
					/>
					<img
						src={arrPoke.sprites ? arrPoke.sprites.back_shiny : null}
						alt={arrPoke.name}
					/>
					<img
						src={arrPoke.sprites ? arrPoke.sprites.other.home.front_default : null}
						alt={arrPoke.name}
					/>
				</div>
			</div>
			<div className="d-flex flex-column align-items-center">
				<h4>RefMap</h4>
				<img src={map()} alt="map" className="col-12" />
			</div>
			<div className="movePoke col-12 d-flex flex-column align-items-center">
				<h4>Movimentos</h4>
				<div className="movesArray col-12 d-flex flex-wrap align-items-center justify-content-around">
					{movesPokemon
						? movesPokemon[0].map((moves, i) => {
								return (
									<h6 key={i} className="col-5 col-lg-2">
										{moves.move.name}
									</h6>
								)
						  })
						: null}
				</div>
			</div>
		</section>
	)
}

export default Pokemon
