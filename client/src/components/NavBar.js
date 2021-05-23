import { Link } from 'react-router-dom';
export default function NavBar() {

    const logo = 'images/images/logo.png';

    return (
        <div className="navbar">
            <img src={logo} alt="" />
            <div className="buttons-navbar">
                <Link to="/register">Únete!</Link>
                <Link to="/login">Accede</Link>
            </div>

        </div>
    )
}
