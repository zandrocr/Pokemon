//components
import { useState } from "react"
import CardList from "./CardList"
import ReactPaginate from "react-paginate"
import "../css/pagination.css"
import { Link } from "react-router-dom"

const Pokedex = (props) => {
	const [offset, setOffset] = useState(0)
	const itemsPerPage = 12

	const endOffset = offset + itemsPerPage

	const currentItems = props.api.slice(offset == 1 ? offset - 1 : offset, endOffset)

	const pageCount = Math.ceil(props.api.length / itemsPerPage)

	const handlePageClick = (event) => {
		const newOffset = (event.selected * itemsPerPage) % props.api.length
		setOffset(newOffset)
		window.scrollTo({ top: 0 })
	}
	return (
		<section
			id="Pokedex"
			className="col-12 d-flex flex-column align-items-center justify-content-center">
			<div className="col-11 d-flex flex-wrap">
				{currentItems.map((pokemon, index) => {
					return (
						<div
							key={index}
							className="col-12 col-md-4 col-lg-3 col-xl-3 d-flex justify-content-center">
							<Link to={`/pokemon/${pokemon.data.name}`} className="col-11">
								<CardList
									name={pokemon.data.name}
									id={pokemon.data.id}
									sprite={pokemon.data.sprites.front_default}
									sprites={pokemon.data.sprites}
									types={pokemon.data.types}
									abilitys={pokemon.data.abilities}
									stats={pokemon.data.stats}
								/>
							</Link>
						</div>
					)
				})}
			</div>
			<div className="pagination col-12 d-flex justify-content-center">
				<ReactPaginate
					breakLabel="..."
					breakClassName="d-none"
					nextLabel=">"
					onPageChange={handlePageClick}
					pageRangeDisplayed={3}
					marginPagesDisplayed={1}
					pageCount={pageCount}
					previousLabel="<"
					renderOnZeroPageCount={null}
					pageLinkClassName="pageClick"
					previousLinkClassName="pageClick"
					nextLinkClassName="pageClick"
					activeLinkClassName="activeLink"
					className="d-flex col-12 col-lg-10 justify-content-around"
				/>
			</div>
		</section>
	)
}

export default Pokedex
