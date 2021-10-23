import { useState } from 'react'
import { auth } from '../../services/getFirebase'

import { useHistory } from 'react-router-dom';

import "./FormLogin.css"

import { Link } from 'react-router-dom'
import Swal from 'sweetalert2';
export default function FormLogin() {
    const [user, setUser] = useState({
        email: "",
        password: ""
    })
    const {email, password} = user;
    const handleChange = e => {
        setUser({
            ...user,
            [e.target.name]:e.target.value
        })
    }
    const history = useHistory();

    const Login = e => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
        .then(() => {
            setUser({
                name: "",
                email: "",
                password: "",
                cPassword: "",
            });
            setTimeout(() => {
                history.push("/")
            }, 1000);
        })
        .catch(err=>{
            if(err.code === 'auth/wrong-password'){
                Swal.fire(
                    'Error',
                    'error'
                )
                return;
            }
            if(err.code === 'auth/user-not-found'){
                Swal.fire(
                    'Error',
                    'Usuario no encontrado',
                    'error'
                )
                return;
            }
            if(err.code === 'auth/invalid-email'){
                Swal.fire(
                    'Error',
                    'Email invalido',
                    'error'
                )
                return;
            }
        })
    }
    return (
        <div className="FormLogin">
            <div className="Form__input">
                <label htmlFor="email">
                    <i className="fas fa-user"></i>
                    Email
                </label>
                <input type="email" id="email" name="email" value={email} onChange={handleChange}/>
            </div>
            <div className="Form__input">
                <label htmlFor="password">
                <i className="fas fa-lock"></i>
                    Contraseña
                </label>
                <input type="password" id="password" name="password" value={password} onChange={handleChange}/>
            </div>
            <div className="Form__button">
                <button type="submit" onClick={Login}>
                    Ingresar
                </button>
            </div>
            <div className="Form__content">
                <p>No tenes cuenta? <Link to="/register" className="Link">registrate acá</Link></p>
            </div>
        </div>
    )
}
