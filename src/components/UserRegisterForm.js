import { Link } from 'react-router-dom';
import { useForm } from '../hooks/useForm';
import { API_REGISTER_USER } from '../Settings';
import { useState, useEffect } from 'react';

export default function UserRegisterForm({ languagesList, interestsList, cities }) {

    const initialFormState = {name: "", lastname: "", email: "", password: "", age: "", yearsLiving: "", cityUser: "", roles: "['ROLE_BUDDY']", bio:""};

    const [form, setForm, handleInputChange] = useForm(initialFormState); // Custom Hook

    //Gestionar estado de intereses
    const [intCheckedState, setIntCheckedState] = useState();
        useEffect(() => setIntCheckedState(new Array(interestsList.length).fill(false)), [interestsList]);
    
        const handleIntCheckboxChange = (position) => {
          const updatedintCheckedState = intCheckedState.map((item, index) =>
            index === position ? !item : item
          );
          setIntCheckedState(updatedintCheckedState);
          console.log("intCheckedState: "+intCheckedState)

        const intIdsArrayTemp = [];
        updatedintCheckedState.map(
        (state, index) => {
            if (state === true) {
            intIdsArrayTemp.push(interestsList[index].id);
            }
            return 0;
        }
        );
        console.log('idsArrayTemp: '+intIdsArrayTemp);

        setForm(previousState => {
            return {...previousState, 'interests': intIdsArrayTemp}
        });
        };

        //Gestionar estado de idiomas
        const [langCheckedState, setLangCheckedState] = useState();
        useEffect(() => setLangCheckedState(new Array(languagesList.length).fill(false)), [languagesList]);
    
        const handleLangCheckboxChange = (position) => {
          const updatedlangCheckedState = langCheckedState.map((item, index) =>
            index === position ? !item : item
          );
          setLangCheckedState(updatedlangCheckedState);
          console.log("langCheckedState: "+langCheckedState)

        const langIdsArrayTemp = [];
        updatedlangCheckedState.map(
        (state, index) => {
            if (state === true) {
            langIdsArrayTemp.push(languagesList[index].id);
            }
            return 0;
        }
        );

        setForm(previousState => {
            return {...previousState, 'languages': langIdsArrayTemp}
        });
        };

    //Método POST del formulario + intereses + idiomas
    async function handleSubmit(e){
        e.preventDefault();
 
        const options = {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(form)
        }

        const response = await fetch(API_REGISTER_USER, options);
        const data = await response.json();
        console.log(data);

    }
    return (
        <div className="register-form">
                <h2>Únete a nuestra comunidad para encontrar tu buddy</h2>
                <form onSubmit={handleSubmit}>
                <div className="inputs-form">
                    <label htmlFor="name">Nombre</label>
                    <input onChange={handleInputChange} value={form.name} name="name" type="text" id="nameInput" placeholder="Nombre" required/>
                </div>
                <div className="inputs-form">
                    <label htmlFor="lastName">Apellidos</label>
                    <input onChange={handleInputChange} value={form.lastName} name="lastName" type="text" id="lastNameInput" placeholder="Apellidos" required/>
                </div>
                <div className="inputs-form">
                <label htmlFor="age">¿Cuántos años tienes?</label>
                    <input onChange={handleInputChange} type="number" id="age" name="age" value={form.age} min="0" max="120" placeholder="Escoge"/>
                </div>
                <div className="inputs-form">
                    <label for="city_id" className="form-label">¿A dónde te mudas?</label>
                    <select required onChange={handleInputChange} value={form.cityId} name="cityId">
                        <option value="" disabled defaultValue>Selecciona la ciudad</option>
                        {cities.map(city => <option value={city.id} key={city.id}>{city.name}</option>)}
                    </select>
                </div>
                <fieldset>
                    <legend>¿Qué idiomas hablas?</legend>
                        <div className="languages">
                        {languagesList.map((language, index) => {
                            return (<div>
                                <input onChange={() => handleLangCheckboxChange(index)} checked={langCheckedState[index]} type="checkbox" name={language.name} id={language.name} value={language.id} />
                                <label htmlFor={language.name} >{language.name}</label>
                            </div>)
                        })}
                        </div>
                </fieldset>

                <fieldset>
                    <legend>¿Qué ayuda necesitas?</legend>          
                        <div className="interests">
                        {interestsList.map((interest, index) => {
                            return ( <div>
                                <input  onChange={() => handleIntCheckboxChange(index)} checked={intCheckedState[index]} type="checkbox" name={interest.tag} id={interest.tag} value={interest.id}/>
                                <label htmlFor={interest.tag}>{interest.tag}</label>
                            </div>)
                        })}                       
                        </div>
                </fieldset>
                <div class="inputs-form">
                    <label htmlFor="bio">Háblanos sobre tí</label>
                    <br />
                    <textarea onChange={handleInputChange} type="password" id="bio" name="bio" value={form.bio} placeholder="Escriba aquí su texto"
                        cols="54" rows="7" required></textarea>
                </div>
                
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
                {/* TODO: Agregar link que lleve a la página de login */}
                <button onSubmit = {handleSubmit} type="submit" value="Log in">Accede</button>
                </form>
                <div>
                <Link to="/login">¿Ya tienes una cuenta con nosotros?</Link>
                </div>
        </div>
    )
}
