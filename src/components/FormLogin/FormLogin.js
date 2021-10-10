import "./FormLogin.css"
import { Link } from 'react-router-dom'
export default function FormLogin() {
    return (
        <div className="FormLogin">
            <div className="Form__input">
                <label htmlFor="user">Usuario</label>
                <input type="text" id="user"/>
            </div>
            <div className="Form__input">
                <label htmlFor="password">Contraseña</label>
                <input type="password" id="password"/>
            </div>
            <div className="Form__button">
                <button type="submit">
                    Ingresar
                </button>
            </div>
            <div className="Form__content">
                <p>No tenes cuenta? <Link to="/register" className="Link">registrate acá</Link></p>
            </div>
        </div>
    )
}
