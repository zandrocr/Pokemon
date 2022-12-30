//api
import { ApiPoke } from "./api/api"
//hook
import { useState, useEffect } from "react"
//components
import Navbar from "./components/Navbar"
//css
import "./css/html.css"
import "bootstrap/dist/css/bootstrap.min.css"
import Home from "./pages/home"
import Footer from "./components/Footer"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import CardSolo from "./components/CardSolo"
import Pokemon from "./pages/Pokemon"
import Pokedex from "./components/Pokedex"

function App() {
	const [pokemons, setPokemons] = useState([])

	useEffect(() => {
		ApiPoke({ set: setPokemons, state: pokemons })
	}, [])

	return (
		<section className="App col-12 d-flex flex-column justify-content-center">
			<BrowserRouter>
				<Navbar api={pokemons} />
				<Routes>
					<Route path="/" element={<Home api={pokemons} />} />
					<Route path="/cardSolo" element={<CardSolo api={pokemons} />} />
					<Route path="/pokemon/:id" element={<Pokemon />} />
					<Route path="/pokedex" element={<Pokedex api={pokemons} />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</section>
	)
}

export default App
