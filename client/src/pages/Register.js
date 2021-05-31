import '../styles/Register.css';
import { Link } from 'react-router-dom';

export default function Register() {
    return (
        <div className="register-form">
            {/* <fieldset> */}
                {/* <legend>Forma parte de nuestra comunidad</legend> */}
                <h2>Forma parte de nuestra comunidad</h2>
                <form action="text" method="post">
                <div className="choose-option">
                    
                        <div>
                            <input type="radio" name="UserType" id="User"/>
                            <label for="User">Busco un buddy</label>
                        </div>
                    
                        <div>
                            <input type="radio" name="UserType" id="Buddy"/>
                            <label for="Buddy">Quiero ser un buddy</label>
                        </div>
                    
                </div>
                <div className="inputs-form">
                    <label htmlFor="name">Nombre</label>
                    <input type="text" name="name" id="nameInput" placeholder="Nombre" required/>
                </div>
                <div className="inputs-form">
                    <label htmlFor="lastName">Apellidos</label>
                    <input type="text" name="lastName" id="lastNameInput" placeholder="Apellidos" required/>
                </div>

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
                <Link to="/login">¿Ya tienes una cuenta con nosotros?</Link>
                </div>
            {/* </fieldset> */}
        </div>
     
    )
}
