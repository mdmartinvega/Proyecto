import { useHistory } from 'react-router-dom';
export default function NavBar() {

    const logo = 'images/images/logo.png';
    const history = useHistory();

    function handleClick() {
        history.push('/login');
    }
    
    return (
        <div className="navbar">
            <img src={logo} alt="" />
            <div className="buttons-navbar">
                <a>Únete!</a>
                <a className="btn-login" onClick={handleClick}>Accede</a>
            </div>

        </div>
    )
}
