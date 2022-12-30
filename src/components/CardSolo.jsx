import { useEffect, useState } from "react"
import { ApiCard } from "../api/api"
import { typeTwo } from "../api/typeTwo"
import ModalCard from "./ModalCard"
import "../css/cardSolo.css"
import "../css/home.css"
import seta from "../img/icon/seta.png"

const CardSolo = (props) => {
	const [arrPoke, setArrPoke] = useState([])
	const [click, setClick] = useState(false)
	const [selectCard, setSelectCard] = useState(1)

	function api() {
		ApiCard({ setState: setArrPoke, pokemon: selectCard })
	}

	function prev() {
		setClick(!click)
		selectCard == 1 ? null : setSelectCard(selectCard - 1)
	}

	function nex() {
		setClick(!click)
		selectCard == 905 ? null : setSelectCard(selectCard + 1)
	}

	if (click == true) {
		setTimeout(() => {
			api()
			setClick(false)
		}, [])
	}

	const movesPokemon = arrPoke.moves ? [arrPoke.moves] : null
	useEffect(() => {
		api()
	}, [])

	const [alterImg, setAlterImg] = useState(false)
	setTimeout(() => {
		setAlterImg(!alterImg)
	}, 1500)

	function spritesDef() {
		if (arrPoke.sprites && alterImg == true) {
			return arrPoke.sprites.front_default
		}
		if (arrPoke.sprites && alterImg == false) {
			return arrPoke.sprites.back_default
		}
	}

	const [openModal, setOpenModal] = useState(false)
	return (
		<section
			id="cardSolo"
			className="col-12 d-flex flex-column justify-content-around align-items-center">
			{/* {openModal == true ? (
				<ModalCard api={arrPoke} openModal={openModal} setOpenModal={setOpenModal} />
			) : null}
			<button onClick={prev} data-buttoncard="prev">
				<img src={seta} alt="seta" />
			</button>
			<div className="cardDex col-12 d-flex flex-column align-items-center justify-content-between">
				<div className="col-6 d-flex justify-content-around">
					<div data-circle></div>
					<div data-circle></div>
				</div>
				<div className="displayCard col-10 d-flex flex-column align-items-center justify-content-center">
					<section
						data-card={typeTwo({ id: arrPoke })}
						onClick={() => setOpenModal(!openModal)}
						className="col-lg-11 d-flex flex-column align-items-center justify-content-between">
						<div id="image" className="col-11 col-lg-4 d-flex justify-content-center">
							<img
								src={arrPoke.sprites ? spritesDef() : null}
								alt={arrPoke.name}
								className="col-12"
							/>
						</div>
						<h6 data-id={typeTwo({ id: arrPoke })}># {arrPoke.id}</h6>
						<div
							data-eps={typeTwo({ id: arrPoke })}
							className="col-12 d-flex flex-column align-items-center justify-content-around">
							<div className="col-11 d-flex justify-content-center">
								<h3>{arrPoke.name}</h3>
							</div>
						</div>
					</section>
				</div>
				<div className="backHome col-10 d-flex align-items-center justify-content-between">
					<div data-circle="down"></div>
					<div data-bugline className="">
						<div data-line></div>
						<div data-line></div>
						<div data-line></div>
						<div data-line></div>
					</div>
				</div>
			</div>
			<button data-buttoncard="next" onClick={nex} className="prox">
				<img src={seta} alt="seta" />
			</button>
			<div className="movi d-flex flex-column align-items-center">
				<h4>Movimentos</h4>
				<div className="movePoke col-12 d-flex flex-column align-items-center">
					<div className="col-12 d-flex flex-wrap justify-content-around">
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
			</div> */}
		</section>
	)
}

export default CardSolo
