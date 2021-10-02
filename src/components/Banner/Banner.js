// Styles
import './Banner.css'


// Images Banner
import Banner1 from "../../img/banner.png";
import Banner2 from "../../img/banner2.png";
import Banner3 from "../../img/banner3.png"

import { Link } from 'react-router-dom';
const Banner = () => {
  return (
    <div className="Banner">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="First__banner">
              <img src={Banner1} alt="banner" className="First__banner-img"/>
              <div className="Banner__content">
                <h3 className="Banner__title">
                  Notebook Leonovo
                  <br />
                  Especial
                </h3>
                <span className="Banner__price">$55.000</span>
                <Link to="/productsDetail/28" className="Banner__link">
                <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="Second__banner margin">
              <img src={Banner2} alt="Auriculares" className="First__banner-img"/>
              <div  className="Banner__content-second">
                <h3 className="Banner__title">
                  Auriculares
                </h3>
                <span className="Banner__price">$7.000</span>
                <Link to="/productsDetail/16" className="Banner__link-second">
                  <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
            </div>
            <div className="Second__banner ">
            <img src={Banner3} alt="Auriculares" className="First__banner-img"/>
              <div className="Banner__content-second">
                <h3 className="Banner__title">
                  PC Gamer
                </h3>
                <span className="Banner__price">$90.000</span>
                <Link to="/productsDetail/11" className="Banner__link-second">
                  <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
