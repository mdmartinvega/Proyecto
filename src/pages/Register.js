import '../styles/Register.css';
import { Link } from 'react-router-dom';
import { useForm } from '../hooks/useForm';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { useState, useEffect } from 'react';
import { API_PROFILES } from '../Settings';

export default function Register({}) {

    const initialFormState = {name: "", lastname: "", email: "", password: "", role: "", languages: [], interests: [], cityUser: "" };
    const [form, handleInputChange] = useForm(initialFormState); // Custom Hook

    // const API_CITIES = "http://localhost:8000/api/cities";

    // const [profileCards, setProfileCards] = useState([]);

    // useEffect(() => {
    //     fetch(API_CITIES)
    //     .then(response => response.json())
    //     .then(data => setProfileCards(data));  
    //     }, []);


    async function handleSubmit(e){
        e.preventDefault();

        const options = {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(form)
        }

        const response = await fetch(API_PROFILES, options);
        const data = await response.json();
        console.log(data);
    }
    return (
        <div className="register-form">
                <h2>Forma parte de nuestra comunidad</h2>
                <form onSubmit={handleSubmit}>
                <div className="choose-option">
                        <div>
                            <input onChange={handleInputChange} type="radio" name="userType" value={form.buddy} id="user"/>
                            <label htmlFor="user">Busco un buddy</label>
                        </div>                                     
                        <div>
                            <input onChange={handleInputChange} type="radio" name="userType" value={form.buddy} id="buddy"/>
                            <label htmlFor="buddy">Quiero ser un buddy</label>
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
                {/* TODO://Introdducir ciudad del user */}
                {/* <div className="select-options">
                    <label htmlFor="lastName">Selecciona la ciudad en la que vives o a la que te mudas</label>
                    <select name="city-move" id="cityInput">
                            <Autocomplete
                                value={form.cityUser}
                                id="input-index"
                                options = {profileCards}
                                getOptionLabel = {(option) => option.name}
                                renderInput = {(params) => <TextField {...params} label="¿A dónde viajas?" variant="outlined" />}
                            />
                    </select> */}
                {/* </div> */}
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
                <div className="inputs-form">
                    <label htmlFor="PasswordInput">Vuelve a introducir tu contraseña</label>
                    <input onChange={handleInputChange} value={form.password} name="password" type="password" id="PasswordInput" placeholder="***************" required/>
                </div>
                {/* TODO: Averiguar como insertar el campo vuelva a introducir contraseña y sus atributos */}

                <button onSubmit = {handleSubmit} type="submit" value="Log in">Accede</button>
                </form>
                <div>
                <Link to="/login">¿Ya tienes una cuenta con nosotros?</Link>
                </div>
        </div>
     
    )
}
