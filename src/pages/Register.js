import '../styles/Register.css';
import { Link } from 'react-router-dom';
import { useForm } from '../hooks/useForm';

export default function Register({setContacts}) {

    const initialFormState = {name: "", lastname: "", email: "", password:""};
    const [form, handleInputChange] = useForm(initialFormState); // Custom Hook

    const handleSubmit = e => {
        e.preventDefault();
        setContacts(contacts => [...contacts, form])
    };

    return (
        <div className="register-form">
            {/* <fieldset> */}
                {/* <legend>Forma parte de nuestra comunidad</legend> */}
                <h2>Forma parte de nuestra comunidad</h2>
                <form onSubmit={handleSubmit}>
                <div className="choose-option">

                        <div>
                            <input type="radio" name="UserType" id="User"/>
                            <label for="User">Busco un buddy</label>
                        </div>
                    
                        <div>
                            <input type="radio" name="UserType" id="Buddy"/>
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

                <button type="submit" value="Log in">Accede</button>
                </form>
                <div>
                <Link to="/login">¿Ya tienes una cuenta con nosotros?</Link>
                </div>
            {/* </fieldset> */}
        </div>
     
    )
}
