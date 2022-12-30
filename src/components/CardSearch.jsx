import { useState } from "react"
import "../css/cardList.css"
import "../css/cardSearch.css"

const CardSearch = (props) => {
	const [typeTwo, setTypeTwo] = useState([])

	setTimeout(() => {
		if (props.types[1] && props.types[0].type.name === "normal") {
			return setTypeTwo(props.types[1].type.name)
		}
		return setTypeTwo(props.types[0].type.name)
	}, [])

	function typesPokemon() {
		if (props.types[1]) {
			return (
				<div className="d-flex flex-column align-items-center justify-content-around">
					<h6>{props.types[0].type.name}</h6>
					<h6>{props.types[1].type.name}</h6>
				</div>
			)
		}
		return <h6>{props.types[0].type.name}</h6>
	}

	return (
		<section
			data-card={typeTwo}
			id="cardSearch"
			className="col-12 d-flex flex-column flex-lg-row align-items-center justify-content-around">
			<h6  data-id={typeTwo}>
				# {props.id}
			</h6>
			<img src={props.sprite} alt={props.name} />
			<div data-eps={typeTwo} className="col-12 col-lg-6 d-flex justify-content-around">
				<h3 className="d-flex flex-column justify-content-center">{props.name}</h3>
				<div className="col-3 d-flex flex-column justify-content-around align-items-center">
					<div>{typesPokemon()}</div>
				</div>
			</div>
		</section>
	)
}

export default CardSearch
