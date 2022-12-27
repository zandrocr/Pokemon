import { ProgressBar } from "react-bootstrap"
import { typeTwo } from "../api/typeTwo"
import ImgPoke from "../img/icon/pokemon.png"
import "../css/modalcard.css"

const ModalCard = (props) => {
	function types() {
		if (props.api.types) {
			return (
				<div>
					<p>{props.api.types[0].type.name}</p>
					{props.api.types[1] ? <p>{props.api.types[1].type.name}</p> : null}
				</div>
			)
		}
	}

	const allAbility = props.api.abilities ? [props.api.abilities] : null
	function abilitysPokemon() {
		if (props.api.abilities) {
			return (
				<div
					data-abl={props.api.abilities[0].ability.name}
					className="col-12 d-flex flex-column align-items-center">
					<h5>Habilidades</h5>
					<div className="col-12 d-flex flex-wrap justify-content-around">
						{allAbility[0].map((ab, i) => {
							return (
								<h6
									key={i}
									className="col-7 col-md-3 d-flex justify-content-center align-items-center">
									{ab.ability.name}
								</h6>
							)
						})}
					</div>
				</div>
			)
		}
	}

	const statsPokemon = props.api.stats ? [props.api.stats] : null

	return (
		<section
			id="modalcard"
			onClick={props.openModal ? () => props.setOpenModal(!props.openModal) : null}
			className="col-12 d-flex flex-column justify-content-around align-items-center">
			<section
				data-card={typeTwo({ id: props.api })}
				className="col-12 d-flex flex-column align-items-center justify-content-between">
				<img
					src={
						props.api.id
							? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${props.api.id}.png`
							: ImgPoke
					}
					alt={props.api.name}
					className="col-6 col-md-3 col-lg-2"
				/>
				<h6 data-id={typeTwo({ id: props.api })}># {props.api.id}</h6>
				<div
					data-info={typeTwo({ id: props.api })}
					className="col-12 d-flex flex-column align-items-center">
					<h5>Status</h5>
					<div className="col-12 d-flex flex-wrap justify-content-around">
						{statsPokemon
							? statsPokemon[0].map((api, i) => {
									return (
										<div
											key={i}
											className="stats col-3 d-flex flex-column justify-content-center">
											<h6>{api ? api.stat.name : null}</h6>
											<ProgressBar
												animated
												now={api.base_stat}
												label={`${api.base_stat}%`}
											/>
										</div>
									)
							  })
							: null}
					</div>
				</div>
				<div className="col-12">{abilitysPokemon()}</div>
				<div
					data-eps={typeTwo({ id: props.api })}
					className="col-12 d-flex align-items-center justify-content-around">
					<h3>{props.api.name}</h3>
					<div className="col-5 col-lg-2 d-flex justify-content-around align-items-center">
						<h5>Tipo:</h5>
						<div>{types()}</div>
					</div>
				</div>
			</section>
		</section>
	)
}

export default ModalCard
