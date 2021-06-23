import '../styles/ProfilePage.css';

export default function Profile_page() {

    const PHOTO_PERSON = "http://placeimg.com/370/250/people";

    //TODO: Hacer un fetch()-GET a un endpoint PROFILE-DETAILS
    //TMDBAPI/FILMS/1225214 <- el ID lo capturas por useParams()
    return (

        <div className="profile-page">
            <div className="details-profile">
            </div>
            <div className="image-profile">
                <img src={PHOTO_PERSON} alt="" />
            </div>

        </div>
    )
}
