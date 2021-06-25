
export default function ConfigurationDashboard() {
    return (
        <div className="main-dashboard">
                <h2>Configuración</h2>
                <p>Completa tu perfil para llegar a más usuarios</p>
                <form action="">
                    <div className="dashboard-form">
                        <label htmlFor="name">Nombre</label>
                        <input value="" name="name" type="text" id="nameInput" placeholder="Nombre" required/>
                    </div>
                    <div className="dashboard-form">
                        <label htmlFor="lastName">Apellidos</label>
                        <input value="" name="lastName" type="text" id="lastNameInput" placeholder="Apellidos" required/>
                    </div>
                    <div className="dashboard-form">
                        <label for="ageInput">Edad:</label>
                        <input type="number" id="ageInput" name="AgeInput" value="" min="0" max="120" placeholder="Tu edad"/>
                    </div>
                    <div className="dashboard-form">
                        <label for="cityInput">Elige tu ciudad</label>
                        <select name="city-move" id="cityInput" disabled>
                            <option value=""></option>
                        </select>
                    </div>
                    <fieldset>
                        <legend>Tus intereses</legend>
                        <div>
                            <input type="checkbox" name="politicsInput" id="politics"/>
                            <label for="politics">Política</label>
                        </div>
                        <div>
                            <input type="checkbox" name="routesInput" id="routes"/>
                            <label for="routes">Rutas</label>
                        </div>
                        <div>
                            <input type="checkbox" name="culturalInput" id="cultural"/>
                            <label for="cultural">Cultura</label>
                        </div>
                        <div>
                            <input type="checkbox" name="hangOutInput" id="hangOut"/>
                            <label for="hangOut">Salir</label>
                        </div>
                        <div>
                            <input type="checkbox" name="proceduresInput" id="procedures"/>
                            <label for="procedures">Trámites</label>
                        </div>
                        <div>
                            <input type="checkbox" name="aboutWorkInput" id="aboutWork"/>
                            <label for="aboutWork">Sobre trabajo</label>
                        </div>
                        <div>
                            <input type="checkbox" name="interestingPlacesInput" id="interestingPlaces"/>
                            <label for="interestingPlaces">Sitios de interés</label>
                        </div>
                    </fieldset>
                    <div class="others">
                        <label for="MessageInput">Háblanos sobre tí:</label>
                        <textarea type="text" id="MessageInput" name="MessageInput" placeholder=""
                        cols="44" rows="7" required></textarea>
                    </div>
                    
                
                </form>
                
            </div>
    )
}
