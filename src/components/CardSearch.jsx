import "../css/cardList.css"
import "../css/cardSearch.css"
import { useState } from "react"
import { typeTwo } from "../api/typeTwo"

const CardSearch = (props) => {
	const [typePokemo, setTypeTwo] = useState([])

	setTimeout(() => {
		setTypeTwo(typeTwo({ id: props.type.data }))
	}, [])

	return (
		<section
			data-card={typePokemo}
			id="cardSearch"
			className="col-12 d-flex flex-column flex-lg-row align-items-center justify-content-around">
			<h6 data-id={typePokemo}># {props.id}</h6>
			<img src={props.sprite} alt={props.name} />
			<div data-eps={typePokemo} className="col-12 col-lg-6 d-flex justify-content-around">
				<h3 className="d-flex flex-column justify-content-center">{props.name}</h3>
			</div>
		</section>
	)
}

export default CardSearch
