//components
import Card from "../components/Card"

const Pokedex = (props) => {
	return (
		<section className="col-12 d-flex justify-content-center">
			<div className="col-11 d-flex flex-wrap ">
				{props.map.map((pokemon, index) => {
					return (
						<div
							key={index}
							className="col-12 col-md-4 col-lg-3 col-xl-4 d-flex justify-content-center">
							<Card
								name={pokemon.data.name}
								id={pokemon.data.id}
								sprite={pokemon.data.sprites.front_default}
								types={pokemon.data.types}
								abilitys={pokemon.data.abilities}
								stats={pokemon.data.stats}
							/>
						</div>
					)
				})}
			</div>
		</section>
	)
}

export default Pokedex
