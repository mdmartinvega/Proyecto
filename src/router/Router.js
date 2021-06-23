import NavBar from '../components/NavBar';
import Index from '../pages/Index';
import Profiles from '../pages/Profiles';
import ProfilePage from '../components/ProfilePage';
import Login from '../pages/Login';
import Register from '../pages/Register';
import ForgetPassword from '../pages/ForgetPassword';
import About from '../pages/About';
import Footer from '../components/Footer';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Dashboard from '../pages/Dashboard';

export default function Router() {
    return (
        <div className="router">
            <BrowserRouter>
            <NavBar />
                <Switch>
                    <Route exact path="/" component={Index} />
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                    <Route path="/forgetPassword" component={ForgetPassword} />
                    <Route path="/about?buddy=true" component={About} />
                    <Route path="/about?buddy=false" component={About} />
                    <Route path="/profiles" component={Profiles} />
                    <Route path="/profilePage/:id" component={ProfilePage} />
                    <Route path="/dashboard" component={Dashboard} />
                </Switch>
            </BrowserRouter>
            <Footer />
        </div>
    )
}