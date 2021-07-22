import {Link} from 'react-router-dom';
import { PLACEHOLDER_URL } from '../Settings';


export default function Profile({profile}) {

    const src = profile.image ? `http://localhost:8000/images/${profile.image}` : PLACEHOLDER_URL;

    return (
        <div>
            <div className="card">
                <img src={src} alt="..." />
                <div className="description-cardProfile">
                    <p className="name">{`${profile.name}, ${profile.age}`}</p>

                    {`${profile.roles.length > 1}`
                    ? <p className="city">Vivo en {profile.cityId}</p> 
                    : <p className="city">Me mudo a {profile.cityId}</p>}

                    <div className="languages">
                        {profile.languages?.map(language => {
                            return <div> {`${language.name}`} </div>
                        })
                        }
                    </div>
                    <div className="interests">
                        {profile.interests?.map(interest => {
                            return <div> {`${interest.tag}`} </div>
                        })
                        }
                    </div>
                    <p className="other_Details">{profile.bio}</p>
                    <Link to={`/profilePage/${profile.id}`} className="btn">Descubre más</Link>
                </div>
            </div>
        </div>
    )
}
