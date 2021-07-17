import { useState } from 'react';
import '../styles/ConfigurationDashboard.css';
import { useForm } from '../hooks/useForm';


export default function ConfigurationDashboard({user}) {

    const [interestsList] = useState([]);    
    const [languagesList] = useState([]);

    
    const initialFormState = {name: user?.name, lastName: user?.lastName, email: user?.email, password: user?.password, age: user?.age, bio: user?.bio};
    const [form, handleInputChange] = useForm(initialFormState, languagesList, interestsList); // Custom Hook

    async function handleSubmit(e){
        e.preventDefault();
 
        const options = {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(form)
        }

        const response = await fetch(`http://localhost:8000/api/buddies/${user.id}`, options);
        const data = await response.json();
        console.log(data);
    }

    return (
        <div className="main-dashboard">
                <div className="register-form">
                <h2>Modifica tu perfil</h2>
                <form onSubmit={handleSubmit}>
                <div className="inputs-form">
                    <label htmlFor="name">Nombre</label>
                    <input onChange={handleInputChange} value={form.name} name="name" type="text" id="nameInput" placeholder="Nombre"/>
                </div>
                <div className="inputs-form">
                    <label htmlFor="lastName">Apellidos</label>
                    <input onChange={handleInputChange} value={form.lastName} name="lastName" type="text" id="lastNameInput" placeholder="Apellidos"/>
                </div>
                <div className="inputs-form">
                <label htmlFor="age">¿Cuántos años tienes?</label>
                    <input onChange={handleInputChange} type="number" id="age" name="age" value={form.age} min="0" max="120" placeholder="Escoge"/>
                </div>
                <div class="inputs-form">
                    <label htmlFor="bio">Háblanos sobre tí</label>
                    <br />
                    <textarea onChange={handleInputChange} type="password" id="bio" name="bio" value={form.bio} placeholder="Escriba aquí su texto"
                        ></textarea>
                </div>
                <div className="inputs-form">
                    <label htmlFor="EmailInput">Email</label>
                    <input onChange={handleInputChange} value={form.email} name="email" type="email" id="EmailInput" placeholder="tuemail@tuemail.com"/>
                </div>
                <div className="inputs-form">
                    <label htmlFor="PasswordInput">Contraseña</label>
                    <input onChange={handleInputChange} value={form.password} name="password" type="password" id="PasswordInput" placeholder="***************"/>
                </div>
                <div className="inputs-form">
                    <label htmlFor="PasswordInput">Vuelve a introducir tu contraseña</label>
                    <input onChange={handleInputChange} value={form.passwordRepeat} name="password" type="password" id="PasswordInput" placeholder="***************"/>
                </div>
                {/* TODO: Averiguar como insertar el campo vuelva a introducir contraseña y sus atributos */}
                {/* TODO: Agregar link que lleve a la página de login */}
                <button type="submit" value="Enviar">Enviar</button>
                </form>
                <div>

                    
                
          
                
            </div>
            </div>
        </div>
    )
}
