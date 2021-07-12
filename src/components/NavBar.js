import { Link, NavLink } from 'react-router-dom';
import '../styles/NavBar.css';
export default function NavBar() {

    const logo = 'images/images/logo.png';

    return (
        <div className="navbar">
            <Link to="/"><img src='images/images/logo.png' alt="" /></Link>
            <div className="buttons-navbar">
                <NavLink to="/about">Qué somos</NavLink>
                <NavLink to="/register">Únete!</NavLink>
                <NavLink to="/login">Accede</NavLink>
                <NavLink to="/logout">Cerrar sesión</NavLink>
            </div>

        </div>
    )
}
