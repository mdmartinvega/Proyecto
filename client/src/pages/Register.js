import React from 'react'

export default function Register() {
    return (
        <div className="login-form">
            <h1>Regístrate</h1>
            <form action="text" method="post">
                <label htmlFor="name">Nombre</label>
                <input type="text" name="name" id="nameInput" placeholder="Nombre" required/>
                <label htmlFor="lastName">Apellidos</label>
                <input type="text" name="lastName" id="lastNameInput" placeholder="Apellidos" required/>

                <label htmlFor="EmailInput">Email</label>
                <input type="email" name="email" id="EmailInput" placeholder="tuemail@tuemail.com" required/>
                <label htmlFor="PasswordInput">Contraseña</label>
                <input type="password" name="password" id="PasswordInput" placeholder="***************" required/>
                <label htmlFor="PasswordInput">Vuelve a introducir tu contraseña</label>
                <input type="password" name="password" id="PasswordInput" placeholder="***************" required/>

                <button type="submit" value="Log in">Accede</button>
            </form>
            <div>
                <a href="">¿Has olvidado tu contraseña?</a>
                <a href="index.html">Regístrate para ser un buddy</a>
            </div>
        </div>
     
    )
}
