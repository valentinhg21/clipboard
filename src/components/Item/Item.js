import React, { useState } from "react";
import "./Item.css";
import RatingStar from "../RatingStar/RatingStar";
import ItemCount from '../ItemCount/ItemCount'
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
          console.log('Se supero la cantidad minima');
          setInitial(initial)
          return
      }
  }

  

  return (
    <div className="col-md-4 Col__item">
      <div className="card" key={id}>
        <img src={productPicture} className="card-img-top " alt={productName} />
        <div className="card-body">
          <p className="card-text Product__title">
            {productName} {productModel}
          </p>
          <p className="card-text Product__price">${price}</p>
          <div className="row mt-2 mb-2">
            <div className="col-md-7">
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
            <div className="col-md-5 Rating">
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
            <div className="col-md-7 Button__container ">
                <button className='Button__addTocard'>
                  Añadir al carrito
                </button>

            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}
