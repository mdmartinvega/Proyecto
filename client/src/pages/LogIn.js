import '../styles/Login.css';
import { Link } from 'react-router-dom';

export default function LogIn() {
    return (
        <div className="login-form">
            <h2>Accede a tu cuenta</h2>
            <form action="text" method="get">
                <div className="inputs-form">
                    <label htmlFor="EmailInput">Email</label>
                    <input type="email" name="email" id="EmailInput" placeholder="tuemail@tuemail.com" required/>
                </div>
                <div className="inputs-form">
                    <label htmlFor="PasswordInput">Contraseña</label>
                    <input type="password" name="password" id="PasswordInput" placeholder="***************" required/>
                </div>
                <button type="submit" value="Log in">Accede</button>
            </form>
            <div>
                <Link to="/forgetPassword">¿Has olvidado tu contraseña?</Link>
                <Link to="/register">Regístrate para acceder</Link>
            </div>
        </div>
    )
}
