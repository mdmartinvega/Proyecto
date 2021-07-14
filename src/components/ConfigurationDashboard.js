import '../styles/ConfigurationDashboard.css';

export default function ConfigurationDashboard() {

    return (
        <div className="main-dashboard">
                <h2>Configuración</h2>
                <p>Modifica tu perfil</p>
                <div className="inputs-form">
                    <label htmlFor="name">Nombre</label>
                    <input value="" name="name" type="text" id="nameInput" placeholder="Nombre" disabled/>
                </div>
                <div className="inputs-form">
                    <label htmlFor="lastName">Apellidos</label>
                    <input value="" name="lastName" type="text" id="lastNameInput" placeholder="Apellidos" disabled/>
                </div>
                <div className="inputs-form">
                <label htmlFor="age">Edad</label>
                    <input type="number" id="age" name="age" value="" min="0" max="120" placeholder="Escoge" disabled/>
                </div>
                <div class="inputs-form">
                    <label htmlFor="bio">Modifica tu descripción</label>
                    <br />
                    <textarea type="text" id="bio" name="bio" value="" placeholder="Escriba aquí su texto"
                        cols="54" rows="7" required></textarea>
                </div>
                <button type="submit" value="Log in">Enviar</button>


                    
                
          
                
            </div>
    )
}
