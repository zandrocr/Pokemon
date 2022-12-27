import { Carousel } from "react-bootstrap"
import Card from "./Card"
import '../css/cardConju.css'

const CardConj = (props) => {
	const interval = 3000

	return (
		<section data-cardconj className="col-12 d-flex justify-content-center">
			<div className="col-12">
				<h4>{props.region}</h4>
				<Carousel fade>
					<Carousel.Item interval={interval}>
						<Card id={props.id1} />
					</Carousel.Item>
					<Carousel.Item interval={interval}>
						<Card id={props.id2} />
					</Carousel.Item>
					<Carousel.Item interval={interval}>
						<Card id={props.id3} />
					</Carousel.Item>
				</Carousel>
			</div>
		</section>
	)
}

export default CardConj
