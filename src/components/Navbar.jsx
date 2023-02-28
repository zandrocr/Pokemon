import { useState } from "react"
import "../sass/navbar.sass"
import Search from "./Search"
import { Link } from "react-router-dom"
import closeBar from "../img/icon/close.png"
import search from "../img/icon/search.png"

const Navbar = (props) => {
	const [button, setButton] = useState(false)
	function click() {
		setButton(!button)
	}
	function closeButton() {
		setButton(false)
		window.scrollTo({ top: 0 })
	}

	const [openSearch, setOpenSearch] = useState(false)
	function openBarSearch() {
		setOpenSearch(!openSearch)
	}

	return (
		<nav className="col-12 d-flex align-items-center justify-content-between">
			<Link to="/" onClick={closeButton}>
				<img
					src="https://assets.pokemon.com/assets/cms2/img/misc/gus/buttons/logo-pokemon-79x45.png"
					alt="pokemon"
				/>
			</Link>
			<div
				data-search={openSearch == true ? "open" : ""}
				className="col-12 col-lg-6 d-flex align-items-center">
				<Search api={props.api} cleanBar={openSearch} />
				<section
					data-buttonmenu="closeBar"
					onClick={openBarSearch}
					className="d-flex d-md-none">
					<img src={closeBar} alt="colseBar" />
				</section>
			</div>
			<div
				data-modal={button == true ? "open" : ""}
				className="col-7 col-lg-3 d-flex flex-column align-items-center justify-content-around">
				<Link to="/" onClick={closeButton}>
					Home
				</Link>
				<Link to="/cardSolo" onClick={closeButton}>
					Cards
				</Link>
				<Link to="/pokedex" onClick={closeButton}>
					Lista Pokemon
				</Link>
			</div>
			<div className="d-flex col-4 col-md-2 col-lg-1 justify-content-between align-items-center justify-content-lg-end">
				<section
					data-buttonmenu="inputBar"
					onClick={openBarSearch}
					className="flex-column justify-content-around align-items-center">
					<img src={search} alt="img" onClick={closeButton} />
				</section>
				<section
					data-buttonmenu
					onClick={click}
					className="d-flex flex-column justify-content-around align-items-center">
					<div data-menu={button == true ? "rightOpen" : "right"}></div>
					<div data-menu={button == true ? "leftOpen" : "left"}></div>
				</section>
			</div>
		</nav>
	)
}

export default Navbar
