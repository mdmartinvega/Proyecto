import '../styles/Filter.css';

export default function Filter() {
    return (
        <div className="filter">
            <form action="">
                <fieldset>
                <legend>Filtra tu búsqueda</legend>
                <h3>Por idioma</h3>
                <div className="languages">
                    <div>
                        <input type="checkbox" name="Spanish" id="Spanish" />
                        <label for="Spanish">Español</label>
                    </div>
                    <div>
                        <input type="checkbox" name="English" id="English" />
                        <label for="English">Inglés</label>
                    </div>
                    <div>
                        <input type="checkbox" name="French" id="French" />
                        <label for="French">Francés</label>
                    </div>
                    <div>
                        <input type="checkbox" name="Portuguese" id="Portuguese" />
                        <label for="Portuguese">Portugués</label>
                    </div>
                    <div>
                        <input type="checkbox" name="Italian" id="Italian" />
                        <label for="Italian">Italiano</label>
                    </div>
                    <div>
                        <input type="checkbox" name="German" id="German" />
                        <label for="German">Alemán</label>
                    </div>
                </div>
                </fieldset>
            </form>
            
        </div>
    )
}
