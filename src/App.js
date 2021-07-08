import './App.css';
import Router from './router/Router';
import AuthContext from "./context/AuthContext";

export default function App() {
  return (
    <div>
      <AuthContext>
        <Router />
      </AuthContext>
    </div>
  )
}


