import { Link, NavLink } from 'react-router-dom';
import '../styles/NavBar.css';
import { useAuthContext } from "../context/AuthContext";

export default function NavBar() {

    const {signOut, isAuthenticated} = useAuthContext();
    const logo = './images/logo.png';

    return isAuthenticated ? (
        <div className="navbar">
            <Link to="/"><img src={logo} alt="" /></Link>
            <div className="buttons-navbar">
                <NavLink to="/about">Qué somos</NavLink>
                <NavLink to="/dashboard">Mi Perfil</NavLink>
                <NavLink to="/" onClick={signOut}>Cerrar sesión</NavLink>
            </div>
        </div>
    ) : (
        <div className="navbar">
            <Link to="/"><img src={logo} alt="" /></Link>
            <div className="buttons-navbar">
                <NavLink to="/about">Qué somos</NavLink>
                <NavLink to="/login">Accede</NavLink></div>
        </div>
)
}
