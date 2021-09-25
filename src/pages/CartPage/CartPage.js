import { useState } from "react";

import "./CartPage.css";
import ItemCount from "../../components/ItemCount/ItemCount";
import { Link } from "react-router-dom";
export default function CartPage() {
  const [initial, setInitial] = useState(1);
  const stock = 4;
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
    <div className="container-fluid Cartpage mt-5">
{/*       <div className="row">
        <div className="col-lg-10 CartPage__itemList">
          <div className="container Itemlist ">
            <h1 className="CartPage__title">Carrito de compras</h1>
            <div className="Itemlist__container">
              <div className="ItemList__titles row">
                <div className="col-lg-4">Producto</div>
                <div className="col-lg-3">Cantidad</div>
                <div className="col-lg-3">Total</div>
              </div>
              <div className="Item__container row">
                <div className="Item__product col-lg-4">
                  <div className="Item__product-container row">
                    <div className="Product__img col-lg-6">
                      <img
                        src="https://i.ibb.co/sm1nZrP/Dell-Inspiron-15-6.jpg"
                        alt=""
                      />
                    </div>
                    <div className="Product__details col-lg-6">
                      <p>Netbook leonovo 8 GB DE RAM SSSD 1220P </p>
                      <p className="Product__details-price">$150.000</p>
                    </div>
                  </div>
                </div>
                <div className="Item__quantity col-lg-3">
                  <div>
                    <ItemCount
                      onAdd={onAdd}
                      initial={initial}
                      removeAdd={removeAdd}
                      stock={stock}
                    />
                  </div>
                </div>
                <div className="Item__total col-lg-3">$150.000</div>
                <div className="Item__delete col-lg-1">
                  <button type="button" className="Button__delete">
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              </div>
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
                  <p>$150.000</p>
                  <p>27%</p>
                  <p>$190.000</p>
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
      </div> */}
      HOLA SOY CART
    </div>
  );
}
