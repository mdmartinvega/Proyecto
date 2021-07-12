import {Link} from 'react-router-dom';

import '../styles/ProfileCard.css';

export default function Profile({profile}) {

    return (
        <div>
            <div className="card">
                <img src={profile.image} alt="..." />
                <div className="description-cardProfile">
                    <p className="name">{`${profile.name}, ${profile.age}`}</p>
                    <p className="city">{profile.cityId}</p>
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
