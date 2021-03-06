import NavBar from '../components/NavBar';
import Index from '../pages/Index';
import ProfilesBuddies from '../pages/ProfilesBuddies';
import ProfilePage from '../components/ProfilePage';
import Login from '../pages/Login';
import BuddyRegister from '../pages/BuddyRegister';
import ForgetPassword from '../pages/ForgetPassword';
import About from '../pages/About';
import Footer from '../components/Footer';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import UserRegister from '../pages/UserRegister';
import Contact from '../pages/Contact';
import sentMessage from '../pages/SentMessage';
import ProfilesUsers from '../pages/ProfilesUsers';


export default function Router() {
    return (
        <div className="router">
                <BrowserRouter>
                <NavBar />
                    <Switch>
                        <Route exact path="/" component={Index} />
                        <Route path="/login" component={Login} />
                        <Route path="/buddy-register" component={BuddyRegister} />
                        <Route path="/user-register" component={UserRegister} />
                        <Route path="/forgetPassword" component={ForgetPassword} />
                        <Route path="/about" component={About} />
                        <Route path="/profilesBuddies/:id" component={ProfilesBuddies} />
                        <Route path="/profilesUsers/:id" component={ProfilesUsers} />
                        <Route path="/profilePage/:id" component={ProfilePage} />
                        <Route path="/dashboard" component={Dashboard} />
                        <Route path="/contact/:id" component={Contact} />
                        <Route path="/successful" component={sentMessage} />
                    </Switch>
                </BrowserRouter>
            <Footer />
        </div>
    )
}
