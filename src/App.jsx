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
import CardSolo from "./pages/CardSolo"
import Pokemon from "./pages/Pokemon"
import Pokedex from "./pages/Pokedex"

function App() {
	const [pokemons, setPokemons] = useState([])

	useEffect(() => {
		ApiPoke({ set: setPokemons })
	}, [])

	return (
		<section className="App col-12 d-flex flex-column justify-content-center">
			<BrowserRouter>
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route path="/cardSolo" element={<CardSolo api={pokemons} />} />
					<Route path="/pokedex" element={<Pokedex api={pokemons} />} />
					<Route path="/pokemon/:id" element={<Pokemon />} />
				</Routes>
				<Footer />
				<Navbar api={pokemons} />
			</BrowserRouter>
		</section>
	)
}

export default App
