import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from '../hooks/useForm';

export default function ConfigurationDashboard({user, reload}) {

    const [interestsList] = useState([]);    
    const [languagesList] = useState([]);
    
    const initialFormState = {name: user?.name, lastName: user?.lastName, email: user?.email, password: user?.password, age: user?.age, bio: user?.bio};
    const [form, handleInputChange] = useForm(initialFormState, languagesList, interestsList); // Custom Hook
    const history = useHistory();

    async function handleSubmit(e){
        e.preventDefault();
 
        const options = {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(form)
        }

        const response = await fetch(`http://localhost:8000/api/buddies/updatedUser/${user.id}`, options);
        // eslint-disable-next-line
        const data = await response.json();


        if(response.status >= 200 && response.status < 300) {
            alert("Tus datos se han modificado correctamente");
            history.push("/dashboard");
            reload(!reload);
        } 
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
                        <label htmlFor="age">??Cu??ntos a??os tienes?</label>
                        <input onChange={handleInputChange} type="number" id="age" name="age" value={form.age} min="0" max="120" placeholder="Escoge"/>
                    </div>
                    <div className="inputs-form">
                        <label htmlFor="bio">H??blanos sobre t??</label>
                        <textarea onChange={handleInputChange} type="password" id="bio" name="bio" value={form.bio} placeholder="Escriba aqu?? su texto"
                            ></textarea>
                    </div>
                    <div className="inputs-form">
                        <label htmlFor="EmailInput">Email</label>
                        <input onChange={handleInputChange} value={form.email} name="email" type="email" id="EmailInput" placeholder="tuemail@tuemail.com"/>
                    </div>
                    <div className="inputs-form">
                        <label htmlFor="PasswordInput">Contrase??a</label>
                        <input onChange={handleInputChange} value={form.password} name="password" type="password" id="PasswordInput" placeholder="***************"/>
                    </div>
                    <input className="input-button" type="submit" value="Enviar"/>
                </form>
            </div>
        </div>
    )
}
