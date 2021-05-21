import NavBar from '../components/NavBar';
import Index from '../pages/Index';
import LogIn from '../pages/LogIn';
import Footer from '../components/Footer';
import {BrowserRouter, Route, Switch} from 'react-router-dom';


export default function Router() {
    return (
        <div className="router">
            <NavBar />
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Index} />
                    <Route path="/login" component={LogIn} />
                </Switch>
            </BrowserRouter>
            <Footer />
          
            
        </div>
    )
}
