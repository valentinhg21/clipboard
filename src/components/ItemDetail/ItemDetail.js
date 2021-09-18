import { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import RatingStar from "../RatingStar/RatingStar.js";
import "./ItemDetail.css";

export default function ItemDetail({ item }) {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const [initial, setInitial] = useState(1);

  return (
    <div className="Producto__details-container">
      
      {item.map((item) => {
        const {
          id,
          productName,
          productModel,
          productDescription,
          price,
          productPicture,
          stock,
        } = item;
        const min = 1;
        const max = stock;

        const onAdd = () => {
          setInitial(initial + 1);
          if (initial >= max) {
            setInitial(initial);

            return;
          }
        };

        const removeAdd = () => {
          setInitial(initial - 1);

          if (initial <= min) {
            setInitial(initial);
            return;
          }
        };
        return (
          <div key={id}>
            <div className="row">
              <div className="col-12 col-md-6">
                <img src={productPicture} alt={productName} />
              </div>
              <div className="col-12 col-md-6">
                <div className="Product__details">
                  <h2 className="Product__details-title mb-lg-1">
                    {productName} {productModel}
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
                  <h1 className="Product__details-price mb-lg-4">${price}</h1>
                  <p className="Product__details-desc mb-lg-4">
                    {productDescription}
                  </p>
                  <div className="Count__container mb-4">
                    <div className="Stock__container">
                      <p className="Product__details-stock mb-lg-4">
                        Stock disponible: {stock}
                      </p>
                    </div>
                    <div className="Count">
                      <ItemCount
                        onAdd={onAdd}
                        initial={initial}
                        removeAdd={removeAdd}
                        stock={stock}
                      />
                    </div>
                  </div>

                  <div className="AddtoCart__container">
                    <Link className="AddtoCart ">COMPRAR AHORA</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
