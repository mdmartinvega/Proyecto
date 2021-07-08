import '../styles/Input.css';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";


export default function Input() {

    const API_CITIES = "http://localhost:8000/api/cities";

    const [cities, setCities] = useState([]);
    const [cityTarget, setCityTarget] = useState('');

    useEffect(() => {
        fetch(API_CITIES)
        .then(response => response.json())
        .then(data => setCities(data));  
        }, []);

    let results = cities.filter(function (city) { return city.name === cityTarget; });
    let cityId = (results.length > 0) ? results[0].id : null;

    return (
        <div className="input-search">
                <Autocomplete
                    id="input-index"
                    onChange={e => setCityTarget(e.target.innerText)}
                    options = {cities}
                    getOptionLabel = {(option) => option.name}
                    style = {{ width: 300 }}
                    renderInput = {(params) => <TextField {...params} label="¿A dónde viajas?" variant="outlined" />}
                />
                <Link to={`/profiles/${cityId}`} className="btn btn-primary">Sign up</Link>
 
        </div>
    )
}