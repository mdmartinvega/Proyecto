import '../styles/Register.css';
import { Link } from 'react-router-dom';
import { useForm } from '../hooks/useForm';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { useState, useEffect } from 'react';
import { API_PROFILES, INTERESTSLIST_URL, LANGUAGESLIST_URL } from '../Settings';

export default function Register({}) {

    const initialFormState = {name: "", lastname: "", email: "", password: "", roles: false, languages: [], interests: [], cityUser: "" };
    const [form, handleInputChange] = useForm(initialFormState); // Custom Hook


    const [interestsList, setInterestsList] = useState([]);
    useEffect(() => {
        fetch(INTERESTSLIST_URL)
        .then(response => response.json())
        .then(data => setInterestsList(data));  
        }, []);

    const [languagesList, setLanguagesList] = useState([]);
    useEffect(() => {
        fetch(LANGUAGESLIST_URL)
        .then(response => response.json())
        .then(data => setLanguagesList(data));  
        }, []);

    const [checkboxState, setCheckboxState] = useState();
    useEffect (() => setCheckboxState(new Array(interestsList.length).fill(false)), [interestsList]);
    console.log('CheckboxState: '+checkboxState)
    
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
                            <input onChange={handleInputChange} type="radio" name="buddySearch" value={form.roles} id="user"/>
                            <label htmlFor="user">Busco un buddy</label>
                        </div>                                     
                        <div>
                            <input onChange={handleInputChange} type="radio" name="buddySearch" value={!form.roles} id="buddy"/>
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
                        {languagesList.map(language => {
                            return (<div>
                                <input type="checkbox" name={language.name} id={language.name} value={language.id} />
                                <label htmlFor={language.name} >{language.name}</label>
                            </div>)
                        })}
                        </div>
                </fieldset>

                <fieldset>
                    <legend>¿Qué buscas o qué puedes ofrecer?</legend>          
                        <div className="languages">
                        {interestsList.map(interest => {
                            return ( <div>
                                <input type="checkbox" name={interest.tag} id={interest.tag} value={interest.id}/>
                                <label htmlFor={interest.tag}>{interest.tag}</label>
                            </div>)
                        })}
                           
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
                    <input onChange={handleInputChange} value={form.passwordRepeat} name="password" type="password" id="PasswordInput" placeholder="***************" required/>
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
