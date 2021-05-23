
export default function LogIn() {
    return (
        <div className="login-form">
            <h1>Accede a tu cuenta</h1>
            <form action="text" method="get">
                <label htmlFor="EmailInput">Email</label>
                <input type="email" name="email" id="EmailInput" placeholder="tuemail@tuemail.com"/>
                <label htmlFor="PasswordInput">Contraseña</label>
                <input type="password" name="password" id="PasswordInput" placeholder="***************"/>
                <button type="submit" value="Log in">Accede</button>
            </form>
            <div>
                <a href="">¿Has olvidado tu contraseña?</a>
                <a href="index.html">Regístrate para ser un buddy</a>
            </div>
        </div>
    )
}
