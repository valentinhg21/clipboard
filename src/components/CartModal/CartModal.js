
// Libraries
import ReactDom from "react-dom";
import { Link } from "react-router-dom";

// Context
import { CartContextUse } from "../../context/CartContext";
import { SidebarContextUse } from "../../context/SidebarContext";

// Styles
import "./CartModal.css";

// Components
import Message from "../Message/Message";
// Helpers
import { formatPrice } from "../../Utils/Helper";




export default function CartModal({ children }) {
  // SidebarContextUse
  const { handleClose } = SidebarContextUse();
  // CartContextUse
  const { cart, removeItem, subTotalPrice } = CartContextUse();
  


  return ReactDom.createPortal(
    <>
      <div className="Cart__fade" onClick={handleClose}>
        <div className="Cart__sidebar-container">
          <div className="Cart__sidebar">
            <div className="Cart__title">
              <h3>Carrito</h3>
              <i className="fas fa-times Cart__close" onClick={handleClose}></i>
            </div>
            <div className="Cart__productList">
              <div className="w-100">
                
                {cart.length === 0 ? (
                  <Message message={"Agrega un producto al carrito"} />
                ) : (
                  cart.map((element) => {
                    const {
                      id,
                      title,
                      model,
                      price,
                      pictureUrl,
                    } = element.item;
                    
                    return (
                      <div className="Cart__content" key={id}>
                        <div className="row w-100">
                          <div className="col-lg-6 Cart__img-container">
                            <img
                              className="Cart__img"
                              src={pictureUrl}
                              alt={title}
                            />
                            <i
                              className="fas fa-times Cart__delete"
                              onClick={() => removeItem(element.item.id)}
                            ></i>
                          </div>
                          <div className="col-lg-6 ">
                            <div className="Cart__product-description">
                              <p className="Cart__product-title">
                                {title} {model}
                              </p>
                              <p className="Cart__product-price">
                                {element.quantity} x{" "}
                                <span style={{ color: "var(--primary-color" }}>
                                  {formatPrice(price)}
                                </span>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })
                )}
              </div>
            </div>
            <div className="Cart__totaly">
              <h3>Subtotal</h3>
              <h3>{formatPrice(subTotalPrice)}</h3>
            </div>
            <div className="Cart__buttons">
              <Link
                type="button"
                className="Link Button__viewCart"
                to="/cart"
                onClick={handleClose}
              >
                Ver carrito
              </Link>
            </div>
            <p style={{ color: "black" }} className="mt-3 mx-2">
              Envio gratis apartir de $30.000
            </p>
          </div>
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
}
