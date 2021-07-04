import '../styles/Register.css';
import { Link, useParams } from 'react-router-dom';
import { useForm } from '../hooks/useForm';
import { useState } from 'react';

export default function Register({setContacts}) {

    let { buddy } = useParams();

    const initialFormState = {name: "", lastname: "", email: "", checked: `${buddy="become-buddy"}`, };
    const [form, handleInputChange] = useForm(initialFormState); // Custom Hook

    const API_PROFILES = 'http://localhost:8000/api/buddies';

    const[addUser, setAddUser] = useState({});

    function handleSubmit(e) {
        e.preventDefault();

        fetch(API_PROFILES, {
            method: "POST",
            body: JSON.stringify(),
            headers: {"Content-type": "application/json; charset=UTF-8"}
        })
        .then(response => response.json())
        .then(json => console.log(json));

        setAddUser({});
    }

    return (
        <div className="register-form">
            {/* <fieldset> */}
                {/* <legend>Forma parte de nuestra comunidad</legend> */}
                <h2>Forma parte de nuestra comunidad</h2>
                <form onSubmit={handleSubmit}>
                <div className="choose-option">
                        <div>
                            <input onChange={handleInputChange} type="radio" name="userType" id="User"/>
                            <label for="User">Busco un buddy</label>
                        </div>                                     
                        <div>
                            <input onChange={handleInputChange} type="radio" name="UserType" id="Buddy"/>
                            <label for="Buddy">Quiero ser un buddy</label>
                        </div>
                </div>
                <div className="inputs-form">
                    <label htmlFor="name">Nombre</label>
                    <input onChange={handleInputChange} value={form.name} name="name" type="text" id="nameInput" placeholder="Nombre" required/>
                </div>
                <div className="inputs-form">
                    <label htmlFor="lastName">Apellidos</label>
                    <input onChange={handleInputChange} value={form.lastName} name="lastName" type="text" id="lastNameInput" placeholder="Apellidos" required/>
                </div>
                <div className="select-options">
                    <select name="city-move" id="cityInput" disabled>
                        <option value={form.cityUser}>Selecciona la ciudad en la que vives o a la que te mudas</option>
                    </select>
                </div>
                <fieldset>
                    <legend>¿Qué idiomas hablas?</legend>
                        <div className="languages">
                            <div>
                                <input type="checkbox" name="Spanish" id="Spanish" />
                                <label for="Spanish">Español</label>
                            </div>
                            <div>
                                <input type="checkbox" name="English" id="English" />
                                <label for="English">Inglés</label>
                            </div>
                            <div>
                                <input type="checkbox" name="French" id="French" />
                                <label for="French">Francés</label>
                            </div>
                            <div>
                                <input type="checkbox" name="Portuguese" id="Portuguese" />
                                <label for="Portuguese">Portugués</label>
                            </div>
                            <div>
                                <input type="checkbox" name="Italian" id="Italian" />
                                <label for="Italian">Italiano</label>
                            </div>
                            <div>
                                <input type="checkbox" name="German" id="German" />
                                <label for="German">Alemán</label>
                            </div>
                        </div>
                </fieldset>

                <fieldset>
                    <legend>¿Qué buscas o qué puedes ofrecer?</legend>
                        <div className="languages">
                            <div>
                                <input type="checkbox" name="routesInput" id="routes"/>
                                <label for="routes">Rutas</label>
                            </div>
                            <div>
                                <input type="checkbox" name="proceduresInput" id="procedures"/>
                                <label for="procedures">Trámites</label>
                            </div>
                            <div>
                                <input type="checkbox" name="workInput" id="work"/>
                                <label for="work">Trabajo</label>
                            </div>
                            <div>
                                <input type="checkbox" name="cultureInput" id="culture"/>
                                <label for="culture">Cultura</label>
                            </div>
                            <div>
                                <input type="checkbox" name="politicInput" id="politic"/>
                                <label for="politic">Política</label>
                            </div>
                            <div>
                                <input type="checkbox" name="meetPeopleInput" id="meetPeople"/>
                                <label for="meetPeople">Conocer gente</label>
                            </div>
                            <div>
                                <input type="checkbox" name="languagesInput" id="languages"/>
                                <label for="languages">Idiomas</label>
                            </div>
                        </div>
                </fieldset>
                <div className="inputs-form">
                    <label htmlFor="EmailInput">Email</label>
                    <input onChange={handleInputChange} value={form.email} name="email" type="email" id="EmailInput" placeholder="tuemail@tuemail.com" required/>
                </div>
                <div className="inputs-form">
                    <label htmlFor="PasswordInput">Contraseña</label>
                    <input onChange={handleInputChange} value={form.password} name="password" type="password" id="PasswordInput" placeholder="***************" required/>
                </div>
                {/* <div className="inputs-form">
                    <label htmlFor="PasswordInput">Vuelve a introducir tu contraseña</label>
                    <input onChange={handleInputChange} value={form.password} name="password" type="password" id="PasswordInput" placeholder="***************" required/>
                </div> */}
                {/* TODO: Averiguar como insertar el campo vuelva a introducir contraseña y sus atributos */}

                <button onSubmit = {handleSubmit} type="submit" value="Log in">Accede</button>
                </form>
                <div>
                <Link to="/login">¿Ya tienes una cuenta con nosotros?</Link>
                </div>
            {/* </fieldset> */}
        </div>
     
    )
}
