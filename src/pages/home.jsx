import { useEffect, useState } from "react"
import CardConj from "../components/CardConju"
import imgPoke from "../img/icon/LogoPokemon.png"
import "../css/home.css"
import axios from "axios"

const Home = () => {
	useEffect(() => {
		window.scrollTo({ top: 0 })
	}, [])

	// axios
	// 	.create({
	// 		baseURL: "https://pokeapi.co/api/v2/",
	// 	})
	// 	.get(`/pokemon?limit=5`)
	// 	.then((response) => console.log(response.data.results))
	// 	.catch((error) => console.log(error))

	return (
		<section id="home" className="col-12 d-flex flex-column align-items-center">
			<div className="top col-12 d-flex flex-column align-items-center justify-content-center">
				<h1>Qual é o seu</h1>
				<img id="logo" src={imgPoke} alt="imgPoke" />
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
						<CardConj region="Sinnoh" id1={387} id2={390} id3={393} />
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
