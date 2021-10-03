// Libraries
import { Link } from "react-router-dom";
import { useState } from "react";
import { formatPrice } from "../../Utils/Helper";

import { motion } from "framer-motion";

// Styles
import "./Item.css";

// Components
import RatingStar from "../RatingStar/RatingStar";
import { SidebarContextUse } from "../../context/SidebarContext";
import { CartContextUse } from "../../context/CartContext";
import ItemCount from "../ItemCount/ItemCount";

export default function Item({ product }) {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const [initial, setInitial] = useState(1);
  const [loading, setLoading] = useState(false);
  // Destructuring

  const {id, title, model, pictureUrl, price, stock,} = product; 
  // SidebarContext
  const { handleShow } = SidebarContextUse();
  // CartContext
  const { addItem } = CartContextUse();

  const onAdd = (quantity) => {
    setLoading(true);
    setTimeout(() => {
      addItem(product, quantity);
      handleShow();
      setLoading(false);
    }, 1000);

  };

  
 

  return (
    <div className="col-12 col-md-6 col-lg-4 Col__item">
      <div className="card" key={id}>
        <img src={pictureUrl} className="card-img-top " alt={title} />
        <div className="card-body">
          <p className="card-text Product__title">
            {title} {model}
          </p>
          <div className="col-md-5 Rating__container col-sm-12 my-sm-2 col-xs-12 col-12 my-2">
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
          <p className="card-text Product__price">{formatPrice(price)}</p>
          <div className="row ItemCount__container" >
            <div className="col-lg-4">Cantidad</div>
            <div className="col-lg-8">
              <ItemCount
                initial={initial}
                stock={stock}
                setInitial={setInitial}
              />
            </div>
          </div>
          <motion.div
            className="ButtonActions__container"
/*             whileHover={{ x: 0 }}
            style={{ x: 25 }}
            transition={{ type: "spring", stiffness: 10000 }} */
          >
            <div className="Actions__viewProduct">
              <Link to={`/productsDetail/${id}`} className="Link Search__btn">
                <i className="fas fa-search"></i>
              </Link>
            </div>
            <div className="Actions__buy">
              <button
                type="button"
                to="/"
                className="Link Buy__btn"
                onClick={() => onAdd(initial)}
              >
                {!loading ? (
                  <i className="fas fa-shopping-cart"></i>
                ) : (
                  <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
                  
                )}
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
