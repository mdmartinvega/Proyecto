import '../styles/Login.css';
import { Link, useHistory, Redirect } from 'react-router-dom';
import { useForm } from "../hooks/useForm";
import { useAuthContext } from "../context/AuthContext";
import { LOGIN_URL } from '../Settings';

export default function LogIn() {

    const initialFormState = {username: "", password: ""};
    const [form, handleChange] = useForm(initialFormState);
    const {signIn, isAuthenticated} = useAuthContext();
    const history = useHistory();

    const handleSubmit = async e => {
        e.preventDefault();
        
        const options = {
            method: "POST",
            headers: {"Content-type": "application/json"},
            body: JSON.stringify(form)
        }

        const response = await fetch(LOGIN_URL, options);
        const data = await response.json();
        console.log(data);
        
        if(response.status >= 200 && response.status < 300) {
            signIn(data.token, data.user);
            history.push("/dashboard")
        } else {
            alert("Login incorrecto");
        }
    };
    return isAuthenticated ? <Redirect to="/dashboard" /> : (
        <div className="login-form">
            <h2>Accede a tu cuenta</h2>
            <form onSubmit={handleSubmit}>
                <div className="inputs-form">
                    <label htmlFor="EmailInput">Email</label>
                    <input onChange={handleChange} value={form.username} type="email" name="username" id="EmailInput" placeholder="tuemail@tuemail.com" required/>
                </div>
                <div className="inputs-form">
                    <label htmlFor="PasswordInput">Contraseña</label>
                    <input onChange={handleChange} value={form.password} type="password" name="password" id="PasswordInput" placeholder="***************" required/>
                </div>
                {/* TODO: El login debe acceder al dashboard de cada usuario no a través del link sino del backend */}
                <button type="submit" value="Log in">Accede</button>
            </form>
            <div>
                <Link to="/forgetPassword">¿Has olvidado tu contraseña?</Link>
                <Link to="/register">Regístrate para acceder</Link>
            </div>
        </div>
    )
}
