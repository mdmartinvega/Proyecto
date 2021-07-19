import { useForm } from "../hooks/useForm";
import { useParams } from "react-router";
import { useAuthContext } from "../context/AuthContext";
import jwt_decode from "jwt-decode";
import { useHistory, Redirect  } from 'react-router-dom';

export default function Contact(languagesList, interestsList) {

    const {id} = useParams();
    const history = useHistory();
    const {isAuthenticated} = useAuthContext();


    const {getToken} = useAuthContext();
    let token = getToken();
    let decodedToken = jwt_decode(token);

    const initialFormState = {message: "", sender: decodedToken.username, receiver: id};
    const [form, handleInputChange] = useForm(initialFormState, languagesList, interestsList);

    const handleSubmit = async e => {
        e.preventDefault();

        const options = {
            method: "POST",
            headers: {"Content-type": "application/json"},
            body: JSON.stringify(form)
        }

        const response = await fetch(`http://localhost:8000/api/messages/${id}`, options);
        const data = await response.json();
        console.log(data);

        if(response.status >= 200 && response.status < 300) {
            history.push("/successful")
        }
        
    };

    // TODO:Redireccionar a successful page
    return isAuthenticated ? (
        <div className="login-form">
            <h2>Envía tu mensaje</h2>
            <form onSubmit={handleSubmit}>
            <div className="inputs-form">
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
    ) : <Redirect to="/login" />
}
