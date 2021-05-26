import { Link } from 'react-router-dom';
export default function NavBar() {

    const logo = 'images/images/logo.png';

    return (
        <div className="navbar">
            <Link to="/"><img src={logo} alt="" /></Link>
            <div className="buttons-navbar">
                <Link to="/profiles">Profiles-test</Link>
                <a href="#">Qué somos</a>
                <Link to="/register">Únete!</Link>
                <Link to="/login">Accede</Link>
            </div>

        </div>
    )
}
