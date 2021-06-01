import '../styles/ForgetPassword.css';
import { Link } from 'react-router-dom';

export default function ForgetPassword() {
    return (
        <div className="login-form">
            <h2>Crea una nueva contraseña</h2>
            <form action="text" method="get">
                <div className="inputs-form">
                    <label htmlFor="EmailInput">Email</label>
                    <input type="email" name="email" id="EmailInput" placeholder="tuemail@tuemail.com" required/>
                </div>
                <div className="inputs-form">
                    <label htmlFor="PasswordInput">Contraseña</label>
                    <input type="password" name="password" id="PasswordInput" placeholder="***************" required/>
                </div>
                <div className="inputs-form">
                    <label htmlFor="PasswordInput">Vuelve a introducir tu contraseña</label>
                    <input type="password" name="password" id="PasswordInput" placeholder="***************" required/>
                </div>
                <button type="submit" value="Log in">Accede</button>
            </form>
            <div>
                {/* <a href="https//:www.google.com">¿Has olvidado tu contraseña?</a> */}
                {/* <Link to="/register">Regístrate para ser un buddy</Link> */}
            </div>
        </div>
    )
}
