import NavBar from '../components/NavBar';
import Index from '../pages/Index';
import Profiles from '../pages/Profiles';
import LogIn from '../pages/LogIn';
import Register from '../pages/Register';
import Footer from '../components/Footer';
import {BrowserRouter, Route, Switch} from 'react-router-dom';


export default function Router() {
    return (
        <div className="router">
            <BrowserRouter>
            <NavBar />
                <Switch>
                    <Route exact path="/" component={Index} />
                    <Route path="/login" component={LogIn} />
                    <Route path="/register" component={Register} />
                    <Route path="/profiles" component={Profiles} />
                </Switch>
            </BrowserRouter>
            <Footer />
          
            
        </div>
    )
}
