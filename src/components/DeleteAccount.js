import '../styles/DeleteAccount.css';

export default function DeleteAccount({user}) {

    const handleSubmit = async e => {
        e.preventDefault();

        const options = {
            method: "DELETE",
            headers: {"Content-type": "application/json"},
            body: JSON.stringify(user)
        }

        const response = await fetch(`http://localhost:8000/api/messages/${user.id}`, options);
        const data = await response.json();
        console.log(data);
   
    };
    
    return (
        <div className="delete-account">
            <button onSubmit = {handleSubmit} type="submit" value="Eliminar cuenta">Eliminar cuenta</button>
        </div>
    )
}
