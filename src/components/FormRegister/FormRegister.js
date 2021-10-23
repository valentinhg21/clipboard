import { useState } from "react";
import "./FormRegister.css";
import { Link } from "react-router-dom";
import { auth } from "../../services/getFirebase";
import { getFirestore } from "../../services/getFirebase";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";

export default function FormRegister() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    cPassword: "",
  });
  const { name, email, password, cPassword } = user;

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  const history = useHistory();

  const Register = (e) => {
    e.preventDefault();
    //Validations
    if (
      name.trim() === "" ||
      email.trim() === "" ||
      password.trim() === "" ||
      cPassword.trim() === ""
    ) {
      Swal.fire("Error", "Completar todos los campos.", "error");
      return;
    }
    if (password !== cPassword) {
      Swal.fire("Error", "Las contraseña no coincide", "error");
      return;
    }

    //Register account
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((cred) => {
        const dbQuery = getFirestore();
        dbQuery
          .collection("users")
          .doc(cred.user.uid)
          .set({
            Name: name,
            Email: email,
            Password: password,
            CPasword: cPassword,
          })
          .then((res) => Swal.fire("Registro Exitoso!", "", "success"))
          .finally(() => {
            setUser({
              name: "",
              email: "",
              password: "",
              cPassword: "",
            });
            setTimeout(() => {
              history.push("/");
            }, 1500);
          });
      })
      .catch((err) => {
        
        if (err.code === "auth/weak-password") {
          Swal.fire("Error", "Contraseña muy debil, elija otra", "error");
          return;
        }
        if (err.code === "auth/email-already-in-use") {
          Swal.fire("Error", "El email ya esta en uso", "error");
          return;
        }
        if (err.code === "auth/invalid-email") {
          Swal.fire("Error", "Email invalido", "error");
          return;
        }
      });
  };
  return (
    <div className="FormRegister">
      <div className="Form__input">
        <label htmlFor="name">
          <i className="fas fa-user"></i>
          Usuario
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={handleChange}
        />
      </div>
      <div className="Form__input">
        <label htmlFor="email">
          <i className="fas fa-envelope"></i>
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
      </div>
      <div className="Form__input">
        <label htmlFor="password">
          <i className="fas fa-lock"></i>
          Contraseña
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
      </div>
      <div className="Form__input">
        <label htmlFor="cPassword">
          <i className="fas fa-lock"></i>
          Confirmar Contraseña
        </label>
        <input
          type="password"
          id="cPassword"
          name="cPassword"
          value={cPassword}
          onChange={handleChange}
        />
      </div>
      <div className="Form__button">
        <button type="submit" onClick={Register}>
          Ingresar
        </button>
      </div>
      <div className="Form__content">
        <p>
          Si ya tenes cuenta{" "}
          <Link to="/login" className="Link">
            ingresa acá
          </Link>
        </p>
      </div>
    </div>
  );
}
