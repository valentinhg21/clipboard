import React, { useState } from "react";
import "./Item.css";
import RatingStar from "../RatingStar/RatingStar";
import ItemCount from '../ItemCount/ItemCount'
import { Link } from "react-router-dom";
export default function Item({ product }) {

  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const [initial, setInitial ] = useState(1);
  


  // Destructuring
  const {
    id,
    productName,
    productModel,
    price,
    productPicture,
    stock
  } = product;

  const min = 1;
  const max = stock;

  const onAdd = () => {
    setInitial(initial + 1)
    if(initial >= max){
      setInitial(initial)

      return
    }

  }


  const removeAdd = () => {
    
      setInitial(initial - 1)

      if(initial <= min){
          setInitial(initial)
          return
      }
  }

  

  return (
    <div className="col-12 col-md-6 col-lg-4 Col__item">
      <div className="card" key={id}>
        <img src={productPicture} className="card-img-top " alt={productName} />
        <div className="card-body">
          <p className="card-text Product__title">
            {productName} {productModel}
          </p>
          <p className="card-text Product__price">${price}</p>
          <div className="row mt-2 mb-2 my-sm-4">
            <div className="col-md-7 col-sm-7 col-7">
              <p className="card-text">Cantidad</p>
            </div>
            <ItemCount 
              onAdd= {onAdd}
              initial = {initial}
              removeAdd = {removeAdd}
              stock = {stock}
            />
          </div>
          <p className="card-text mt-4 mb-4">Stock disponible: {stock}</p>

          <div className="row mt-4 mb-2">
            <div className="col-md-5 Rating col-sm-12 my-sm-2 col-xs-12 col-12 my-2">
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
            <div className="col-md-7 Button__container col-12 my-2">
                <Link to={`/productsDetail/${id}`} className="Link__viewProduct">Ver Producto</Link>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}
