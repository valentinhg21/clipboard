// Libraries
import { useState } from "react";
import { Link } from "react-router-dom";
import { CartContextUse } from "../../context/CartContext";

// Components
import ItemCount from "../ItemCount/ItemCount";
import RatingStar from "../RatingStar/RatingStar.js";
import "./ItemDetail.css";

//Helpers
import { formatPrice } from "../../Utils/Helper";

export default function ItemDetail({ product }) {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const [initial, setInitial] = useState(1);
  const [changeButton, setChangeButton] = useState(true);
  const { addItem } = CartContextUse();

  const onAdd = (quantity) => {
    addItem(product, quantity);
    setChangeButton(false);
  };
  const { id, title, model, description, price, pictureUrl, stock } = product;
  
  return (
    <div className="Producto__details-container">
      <div key={id}>
        <div className="row">
          <div className="col-12 col-md-6">
            <img src={pictureUrl} alt={title} />
          </div>
          <div className="col-12 col-md-6">
            <div className="Product__details">
              <h2 className="Product__details-title mb-lg-1">
                {title} {model}
              </h2>
              <div className="col-md-5 Rating col-sm-12  col-12 mb-lg-4">
                {[...Array(5)].map((star, i) => {
                  const ratingValue = i + 1;

                  return (
                    <RatingStar
                      key={i}
                      rating={rating}
                      setRating={setRating}
                      hover={hover}
                      setHover={setHover}
                      ratingValue={ratingValue}
                    />
                  );
                })}
              </div>
              <h1 className="Product__details-price mb-lg-4">
                {formatPrice(price)}
              </h1>
              <p className="Product__details-desc mb-lg-4">{description}</p>
              <div className="Count__container mb-4">
                <div className="Stock__container">
                  <p className="Product__details-stock mb-lg-4">
                    Stock disponible: {stock}
                  </p>
                </div>
                <div className="Count">
                  <ItemCount
                    initial={initial}
                    setInitial={setInitial}
                    stock={stock}
                    onAdd={onAdd}
                  />
                </div>
              </div>

              <div className="AddtoCart__container">
                {changeButton ? (
                  <button
                    type="button"
                    className="AddtoCart"
                    onClick={() => onAdd(initial)}
                  >
                    Agregar al carrito
                  </button>
                ) : (
                  <div>
                    <Link to="/cart">
                      <button type="button" className="AddtoCart">
                        Terminar compra
                      </button>
                    </Link>
                    <Link to="/">
                      <button type="button" className="AddtoCart">
                        Seguir comprando
                      </button>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
