import '../styles/ForgetPassword.css';

export default function ForgetPassword() {
    return (
        <div className="forgetPassword-form">
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
                <button type="submit" value="Login">Accede</button>
            </form>
        </div>
    )
}
