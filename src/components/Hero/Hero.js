import { Carousel } from "react-bootstrap";
import "./Hero.css";
import Slide1 from "../../img/slide-1.jpg";
import Slide2 from "../../img/slide-2.jpg";
export default function Hero() {
  return (
    <div className="Hero">
      <Carousel className="Carousel">
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100 Image__slider"
            src={Slide1}
            alt="First slide"
          />
          <Carousel.Caption className="Caption">
            <div className="Caption__content">
              <h3 className="">NUEVOS LANZAMIENTOS</h3>
              <p>Para ver todos los producto nuevos visita nuestra tienda.</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100 Image__slider"
            src={Slide2}
            alt="First slide"
          />
          <Carousel.Caption className="Caption">
            <div className="Caption__content">
              <h3 className="">LAS MEJORES MARCAS </h3>
              <p>Encontra las mejores marcas de notebooks acá!.</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
