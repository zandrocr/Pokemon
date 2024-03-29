import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import "../css/cardList.css"

const CardList = (props) => {
	const [typeTwo, setTypeTwo] = useState([])

	useEffect(() => {
		if (props.types[1] && props.types[0].type.name === "normal") {
			return setTypeTwo(props.types[1].type.name)
		}
		return setTypeTwo(props.types[0].type.name)
	}, [])

	function typesPokemon() {
		if (props.types[1]) {
			return (
				<div className="d-flex flex-column align-items-center">
					<h6>{props.types[0].type.name}</h6>
					<h6>{props.types[1].type.name}</h6>
				</div>
			)
		}
		return <h6>{props.types[0].type.name}</h6>
	}

	function abilitysPokemon() {
		if (props.abilitys[1]) {
			return (
				<div
					data-abl={props.types[0].type.name}
					className="col-12 d-flex justify-content-around align-items-center">
					<h6 className="col-4 d-flex justify-content-center align-items-center">
						{props.abilitys[0].ability.name}
					</h6>
					<h6 className="col-4 d-flex justify-content-center align-items-center">
						{props.abilitys[1].ability.name}
					</h6>
				</div>
			)
		}
		return (
			<div data-abl={props.types[0].type.name} className="d-flex justify-content-center">
				<h6 className="col-4 d-flex justify-content-center align-items-center">
					{props.abilitys[0].ability.name}
				</h6>
			</div>
		)
	}

	const [alterImg, setAlterImg] = useState(false)
	setTimeout(() => {
		setAlterImg(!alterImg)
	}, 1500)

	function spritesDef() {
		if (props.sprites && alterImg == true) {
			return props.sprites.front_default
		}
		if (props.sprites && alterImg == false) {
			return props.sprites.back_default
		}
	}

	return (
		<section
			data-card={typeTwo}
			className="col-12 d-flex flex-column align-items-center justify-content-between">
			<div id="image" className="col-7 col-lg-6 d-flex justify-content-center">
				<img src={props.sprites.front_default} alt={props.name} className="col-12" />
			</div>
			<h6 data-id={typeTwo}># {props.id}</h6>
			<div
				data-info={typeTwo}
				className="col-3 d-flex flex-column align-items-center justify-content-between">
				<h6>HP: {props.stats[0].base_stat}</h6>
				<h6>ATK: {props.stats[1].base_stat}</h6>
				<h6>DF: {props.stats[2].base_stat}</h6>
			</div>
			<div
				data-eps={typeTwo}
				className="col-12 d-flex flex-column align-items-center justify-content-around">
				<div className="col-11 d-flex justify-content-between">
					<h3>{props.name}</h3>
					<div>{typesPokemon()}</div>
				</div>
				<div className="col-12">{abilitysPokemon()}</div>
			</div>
		</section>
	)
}

export default CardList
