import './FormRegister.css';
import { Link } from 'react-router-dom'
export default function FormRegister() {
    return (
        <div className="FormRegister">
            <div className="Form__input">
                <label htmlFor="user">Usuario</label>
                <input type="text" id="user"/>
            </div>
            <div className="Form__input">
                <label htmlFor="email">Email</label>
                <input type="email" id="email"/>
            </div>
            <div className="Form__input">
                <label htmlFor="password">Contraseña</label>
                <input type="password" id="password"/>
            </div>
            <div className="Form__input">
                <label htmlFor="cPassword">Confirmar Contraseña</label>
                <input type="password" id="cPassword"/>
            </div>
            <div className="Form__button">
                <button type="submit">
                    Ingresar
                </button>
            </div>
            <div className="Form__content">
                <p>Si ya tenes cuenta <Link to="/login" className="Link">ingresa acá</Link></p>
            </div>
        </div>
    )
}
