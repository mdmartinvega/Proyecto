import { Link } from 'react-router-dom';
import '../styles/NavBar.css';
export default function NavBar() {

    const logo = 'images/images/logo.png';

    return (
        <div className="navbar">
            <Link to="/"><img src={logo} alt="" /></Link>
            <div className="buttons-navbar">
                <Link to="/profiles">Profiles-test</Link>
                <Link to="/about">Qué somos</Link>
                <Link to="/register">Únete!</Link>
                <Link to="/login">Accede</Link>
            </div>

        </div>
    )
}
