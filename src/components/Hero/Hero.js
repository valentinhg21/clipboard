import { Carousel } from "react-bootstrap";
import "./Hero.css";
import {Link} from 'react-router-dom'
import Slide1 from "../../img/slide-1.jpg";

export default function Hero() {
  return (
    <div className="Hero">
      <Carousel className="Carousel">
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100 Image__slider"
            src={Slide1}
            alt="First slide"
          />
          <Carousel.Caption className="Caption">
            <div className="Caption__content">
              <h3>NUEVOS LANZAMIENTOS</h3>
              <p>Para ver todos los producto nuevos visita nuestra tienda.</p>
              <Link to="" className="Link__slider">Tienda</Link>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
