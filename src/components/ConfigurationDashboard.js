import '../styles/ConfigurationDashboard.css';
import { useForm } from '../hooks/useForm';
import { API_REGISTER_BUDDY } from '../Settings';



export default function ConfigurationDashboard(languagesList, interestsList ) {

    const initialFormState = {name: "", lastname: "", email: "", password: "", age: "", yearsLiving: "", image:"", roles: "['ROLE_BUDDY', 'ROLE_USER']", bio:""};
    const [form, handleInputChange, handleLangCheckboxChange, langCheckedState, handleIntCheckboxChange, intCheckedState] = useForm(initialFormState, languagesList, interestsList); // Custom Hook
    

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
            console.log(data);
        }

    return (
        <div className="main-dashboard">
                <h2>Configuración</h2>
                <p>Modifica tu perfil</p>
                <div className="register-form">
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
                    <label htmlFor="yearsLiving">¿Cuántos años llevas viviendo allí??</label>
                    <input onChange={handleInputChange} type="number" id="yearsLivingInput" name="yearsLiving" value={form.yearsLiving} min="0" max="120" placeholder="Escoge"/>
                </div>
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
                <button onSubmit = {handleSubmit} type="submit" value="Enviar">Enviar</button>
                </form>
                <div>

                    
                
          
                
            </div>
            </div>
        </div>
    )
}
