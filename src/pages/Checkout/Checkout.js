import { useState } from "react";
import "./Checkout.css";
import { CartContextUse } from "../../context/CartContext";
import { getFirestore } from "../../services/getFirebase";
import firebase from "firebase";
import Swal from 'sweetalert2'


export default function Checkout() {
  const [buyer, setBuyer] = useState({
    name: "",
    lastName: "",
    email: "",
    address: "",
    phone: "",
  });

  const { cart, clear } = CartContextUse();

  const { name, lastName, email, address, phone } = buyer;

  let suma = 0;

  for (let index = 0; index < cart.length; index++) {
    const productosTotales = cart[index].item.price * cart[index].quantity;
    suma += productosTotales;
  }

  const precioTotal = suma * 0.27 + suma;

  const handleChange = (e) => {
    setBuyer({
      ...buyer,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let order = {};
    order.date = firebase.firestore.Timestamp.fromDate(new Date());
    order.buyer = { name, lastName, email, address, phone };
    order.total = precioTotal;
    order.items = cart.map((product) => {
      const id = product.item.id;
      const title = product.item.title;
      const model = product.item.model;
      const quantity = product.quantity;
      const price = product.item.price * product.quantity;
      return { id, title, price, quantity, model };
    });

    const db = getFirestore();
    db.collection("orders")
      .add(order)
      .then((res) => Swal.fire(
        'Compra exitosa!',
        `Orden ID: ${res.id}`,
        'success'
      ))
      .finally(() => {
        setBuyer({
          name: "",
          lastName: "",
          email: "",
          address: "",
          phone: "",
        });
      });
      clear()
    
  };

  return (
    <div className="container-fluid CheckoutPage">
      <h1>Checkout</h1>
      <div className="FormCheckout">
        <div className="FormCheckout__input">
          <label htmlFor="name">Nombre</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={handleChange}
          />
        </div>
        <div className="FormCheckout__input">
          <label htmlFor="lastName">Apellido</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={lastName}
            onChange={handleChange}
          />
        </div>
        <div className="FormCheckout__input">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </div>
        <div className="FormCheckout__input">
          <label htmlFor="address">Dirección</label>
          <input
            type="text"
            id="address"
            name="address"
            value={address}
            onChange={handleChange}
          />
        </div>
        <div className="FormCheckout__input">
          <label htmlFor="phone">Celular</label>
          <input
            type="number"
            id="phone"
            name="phone"
            value={phone}
            onChange={handleChange}
          />
        </div>
        <div className="FormCheckout__button">
          <button type="submit" onClick={handleSubmit}>
            Enviar
          </button>
        </div>
      </div>
    </div>
  );
}
