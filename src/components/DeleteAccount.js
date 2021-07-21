import { useHistory } from 'react-router-dom';
import { useAuthContext } from "../context/AuthContext";
import { API_DELETE_ACCOUNT } from '../Settings';


export default function DeleteAccount({user}) {

    const history = useHistory();
    const {getToken} = useAuthContext();
    const {signOut} = useAuthContext();

    async function handleSubmit (e) {
        e.preventDefault();

        const options = {
            method: "DELETE",
            headers: {"Authorization": `Bearer ${getToken()}`},
        }

        const response = await fetch(API_DELETE_ACCOUNT + `${user.id}`, options);
        // eslint-disable-next-line
        const data = await response.json();

        if(response.status >= 200 && response.status < 300) {
            alert("Tu cuenta se ha eliminado correctamente");
            history.push("/");
            signOut();
        } else {
            alert("Oooops! Algo fue mal");
        }
    };
    
    return (
        <form onSubmit={handleSubmit} className="delete-account">
            <input type="submit" value="Eliminar cuenta" />
        </form>
    )
}
