import "../css/load.css"
import ImgPoke from "../img/icon/pokemon.png"

const Load = () => {
	return (
		<section className="load col-12 d-flex align-items-center justify-content-center">
			<img src={ImgPoke} alt="ImgPoke" />
		</section>
	)
}

export default Load
