import Card from "../components/Card"
import Pokedex from "../components/Pokedex"
import LogoPokemon from "../img/icon/logoPokemon.png"
import "../css/home.css"
import CardConj from "../components/CardConju"
import { useEffect } from "react"
import { useState } from "react"

const Home = (props) => {
	useEffect(() => {
		// window.scrollTo({ top: 0 })
	}, [])

	const box = document.querySelectorAll(".top")
	const box2 = document.querySelectorAll(".md")
	const [sumHeight, setSumHeight] = useState(0)
	setTimeout(() => {
		if (box[0]) {
			setSumHeight(box[0].clientHeight + box2[0].clientHeight + 200)
		}
	}, 1000)

	return (
		<section id="home" className="col-12 d-flex flex-column align-items-center">
			<div className="top col-12 d-flex flex-column align-items-center justify-content-center">
				<h1>Qual é o seu</h1>
				<img id="logo" src={LogoPokemon} alt="LogoPokemon" />
			</div>
			<h2>Pokemons iniciais</h2>
			<div className="col-12 md startPokemons d-flex flex-column align-items-center">
				<div className="col-6 d-flex justify-content-around">
					<div data-circle></div>
					<div data-circle></div>
				</div>
				<div className="tela col-12 d-flex flex-column align-items-center">
					<div className="col-10 d-flex flex-column justify-content-around">
						<CardConj region="Kanto" id1={1} id2={4} id3={7} />
						<CardConj region="Johto" id1={152} id2={155} id3={158} />
						<CardConj region="Hoenn" id1={252} id2={255} id3={258} />
					</div>
					<div className="col-10">
						<CardConj region="Sinnoh" id1={387} id2={390} id3={393} />
					</div>
					<div className="col-10 d-flex flex-column justify-content-around">
						<CardConj region="Unova" id1={495} id2={498} id3={501} />
						<CardConj region="Kalos" id1={650} id2={653} id3={656} />
						<CardConj region="Alola" id1={722} id2={725} id3={728} />
					</div>
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
		</section>
	)
}

export default Home
