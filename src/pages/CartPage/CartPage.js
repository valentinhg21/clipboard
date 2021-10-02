import "./CartPage.css";

import { Link } from "react-router-dom";
import { CartContextUse } from "../../context/CartContext";
import {useHistory} from 'react-router-dom'
import { formatPrice } from "../../Utils/Helper";
export default function CartPage() {
  const { cart, clear, removeItem } = CartContextUse();
  const history = useHistory()

  let suma = 0;

  for (let index = 0; index < cart.length; index++) {
    const productosTotales = cart[index].item.price * cart[index].quantity;
    suma += productosTotales;
  }

  const handleClick = () => history.push("/")

  const precioTotal = suma * 0.27 + suma;
  return (
    <div className="container-fluid Cartpage mt-5">
      <div className="row">
        <div className="col-lg-10 CartPage__itemList">
          <div className="container Itemlist ">
            <h1 className="CartPage__title">Carrito de compras</h1>
            <div className="Itemlist__container">
              <div className="ItemList__titles row">
                <div className="col-lg-4">Producto</div>
                <div className="col-lg-3">Cantidad</div>
                <div className="col-lg-3">Total</div>
              </div>
              {cart.map((element) => {
                const { id, productName, productModel, price, productPicture } =
                  element.item;
                  const precioPorCantidad = price * element.quantity
                return (
                  <div className="Item__container row" key={id}>
                    <div className="Item__product col-lg-4">
                      <div className="Item__product-container row">
                        <div className="Product__img col-lg-6">
                          <img src={productPicture} alt={productName} />
                        </div>
                        <div className="Product__details col-lg-6">
                          <p>
                            {productName} {productModel}
                          </p>
                          <p className="Product__details-price">{formatPrice(price)}</p>
                        </div>
                      </div>
                    </div>
                    <div className="Item__quantity col-lg-3">
                      <div>{element.quantity}</div>
                    </div>
                    <div className="Item__total col-lg-3">{formatPrice(precioPorCantidad)}</div>
                    <div className="Item__delete col-lg-1">
                      <button
                        type="button"
                        className="Button__delete"
                        onClick={() => removeItem(element.item.id)}
                      >
                        <i className="fas fa-times"></i>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="col-lg-2 Checkout">
          <div className="container Checkout__container">
            <h1 className="Checkout__title">Resumen de orden</h1>
            <div className="row">
              <div className="col-lg-6">
                <p>Subtotal</p>
                <p>IVA</p>
                <p>Total</p>
              </div>
              <div className="col-lg-6">
                <p>{formatPrice(suma)}</p>
                <p>27%</p>
                <p>{formatPrice(precioTotal)}</p>
              </div>
            </div>
            <div className="d-grid Button__checkout-container">
              <Link to="/cart" className="Button__checkout">
                Procesar orden
              </Link>
            </div>
            <div className="Methods__payment row mt-4 mb-2">
              <div className="col-lg-6">
                <p className="Payment__title">Metodos de pago</p>
              </div>
              <div className="payment__list col-lg-6">
                <i className="fab fa-cc-visa Payment"></i>
                <i className="fab fa-cc-amex Payment"></i>
                <i className="fab fa-cc-mastercard Payment"></i>
                <i className="fab fa-cc-paypal Payment"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="CartPage__buttons">
        <div className="Button__container">
          <div style={{ width: "120px" }} className="me-3">
            <button type="button" className="Button__checkout" onClick={clear}>
              Limpiar
            </button>
          </div>
          <div style={{ width: "120px" }}>

              <button type="button" className="Button__checkout" onClick={handleClick}>
                Volver
              </button>
          </div>
        </div>
      </div>
    </div>
  );
}
