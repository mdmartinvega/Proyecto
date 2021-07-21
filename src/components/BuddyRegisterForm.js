import { Link, useHistory } from 'react-router-dom';
import { useForm } from '../hooks/useForm';
import { API_REGISTER_BUDDY, API_REGISTER_IMAGE } from '../Settings';
import { useState } from 'react';

export default function BuddyRegisterForm({ languagesList, interestsList, cities }) {

    const history = useHistory();

    const initialFormState = {name: "", lastname: "",cityId:"", email: "", password: "", age: "", image:"", yearsLiving: "", roles: "['ROLE_BUDDY']", bio:""};
    const [form, handleInputChange, handleLangCheckboxChange, langCheckedState, handleIntCheckboxChange, intCheckedState] = useForm(initialFormState, languagesList, interestsList); // Custom Hook
    const [image, setImage] = useState('');

     //Manejo de la imagen
     const handleImageUploaded = e => setImage(e.target.files[0]);

    //Método POST del formulario + imagen
    async function handleSubmit(e){
        e.preventDefault();
 
        const options = {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(form)
        }

        const response = await fetch(API_REGISTER_BUDDY, options);
        const data = await response.json();

        const formImage = new FormData();
        formImage.append("File", image);

        const optionsImg = {
            method: "POST",
            // headers: {"Content-Type": "multipart/form-data"},
            body: formImage
        }

        const responseImage = await fetch(API_REGISTER_IMAGE + `${data.id}`, optionsImg);
        // eslint-disable-next-line
        const dataImage = await responseImage;

        
        if(response.status >= 200 && response.status < 300) {
            alert("Tu cuenta se ha creado correctamente, accede con ella");
            history.push("/login");
        } else {
            alert("Verifique los datos introducidos, el email debe ser único");
        }
    }

    return (
        <div className="register-form">
            <h2>Únete como buddy a nuestra comunidad</h2>
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
                    <label for="city_id" className="form-label">¿Dónde vives?</label>
                    <select required onChange={handleInputChange} value={form.cityId} name="cityId">
                        <option value="" disabled defaultValue>Selecciona la ciudad</option>
                        {cities.map(city => <option value={city.id} key={city.id}>{city.name}</option>)}
                    </select>
                </div>
                <div className="inputs-form">
                    <label htmlFor="yearsLiving">¿Cuántos años llevas viviendo allí??</label>
                    <input onChange={handleInputChange} type="number" id="yearsLivingInput" name="yearsLiving" value={form.yearsLiving} min="0" max="120" placeholder="Escoge"/>
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
                    <legend>¿Qué puedes ofrecer?</legend>          
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
                <div class="inputs-form">
                    <label htmlFor="image">Queremos saber más, sube una foto que te identifique</label>
                    <input onChange={handleImageUploaded} name="image" type="file" id="image" accept="png jpg jpeg" />
                </div>
                <div className="inputs-form">
                    <label htmlFor="EmailInput">Email</label>
                    <input onChange={handleInputChange} value={form.email} name="email" type="email" id="EmailInput" placeholder="tuemail@tuemail.com" required/>
                </div>
                <div className="inputs-form">
                    <label htmlFor="PasswordInput">Contraseña</label>
                    <input onChange={handleInputChange} value={form.password} name="password" type="password" id="PasswordInput" placeholder="***************" required/>
                </div>
                <input className="input-button" type="submit" value="Enviar"/>
            </form>
            <div>
                <Link to="/login">¿Ya tienes una cuenta con nosotros?</Link>
            </div>
        </div>
    )
}
