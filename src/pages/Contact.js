import { useForm } from "../hooks/useForm";
import { API_MESSAGES } from '../Settings';

export default function LogIn(languagesList, interestsList) {

    const initialFormState = {name:"", username: "", message: ""};
    const [form, handleInputChange] = useForm(initialFormState, languagesList, interestsList);

    const handleSubmit = async e => {
        e.preventDefault();
        
        const options = {
            method: "POST",
            headers: {"Content-type": "application/json"},
            body: JSON.stringify(form)
        }

        const response = await fetch(API_MESSAGES, options);
        const data = await response.json();
        console.log(data);
        
    };
    return (
        <div className="login-form">
            <h2>Envía tu mensaje</h2>
            <form onSubmit={handleSubmit}>
            <div className="inputs-form">
                    <label htmlFor="name">Nombre</label>
                    <input onChange={handleInputChange} value={form.name} name="name" type="text" id="nameInput" placeholder="Nombre" required/>
                </div>
                <div className="inputs-form">
                    <label htmlFor="EmailInput">Email</label>
                    <input onChange={handleInputChange} value={form.username} type="email" name="username" id="EmailInput" placeholder="tuemail@tuemail.com" required/>
                </div>
                <div class="inputs-form">
                    <label htmlFor="message">Escribe tu mensaje</label>
                    <br />
                    <small>Sé explícito, cuanta más información proporciones más posibilidades habrá de ayudar y ser ayudado.</small>
                    <br />
                    {/* TODO: deshabilitar el tamaño para usuarios  */}
                    <textarea onChange={handleInputChange} type="text" id="message" name="message" value={form.message} placeholder="Escriba aquí su texto"
                        cols="54" rows="7" required></textarea>
                </div>
                <button type="submit" value="sentMessage">Enviar</button>
            </form>
        </div>
    )
}
