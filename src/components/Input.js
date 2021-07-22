import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { API_CITIES } from '../Settings';


export default function Input() {

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
            <div className="input-search-single">
                <h3>¿Te mudas?</h3>
                <p>Cambiar de ciudad nunca fue tan fácil, busca la ciudad a la que te mudas y encuentra el buddy que necesitas</p>
                <div className="autocomplete">
                    <Autocomplete
                        id="input-index"
                        onChange={e => setCityTarget(e.target.innerText)}
                        options = {cities}
                        getOptionLabel = {(option) => option.name}
                        // style = {{ width: 300 }}
                        renderInput = {(params) => <TextField {...params} label="¿A dónde te mudas?" variant="outlined" />}
                    />
                </div>
                <Link to={`/profilesBuddies/${cityId}`} className="btn btn-primary">Vamos allá</Link>
            </div>

            <div className="input-search-single">
                <h3>¿Quieres ayudar a alguien a integrarse en tu ciudad?</h3>
                <p>Entonces busca la ciudad en la que vives y ayuda a integrarse en ella al que esté perdido.</p>
                <div className="autocomplete">
                    <Autocomplete
                        id="input-index"
                        onChange={e => setCityTarget(e.target.innerText)}
                        options = {cities}
                        getOptionLabel = {(option) => option.name}
                        // style = {{ width: 300 }}
                        renderInput = {(params) => <TextField {...params} label="¿Dónde vives?" variant="outlined" />}
                    />
                </div>
                    <Link to={`/profilesUsers/${cityId}`} className="btn btn-primary">Vamos allá</Link>
                </div>
        </div>
    )
}