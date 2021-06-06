import ProfileCard from '../components/ProfileCard';
import Filter from '../components/Filter';
import '../styles/Profiles.css';
export default function Profiles() {
    
    const API_PROFILES = {
        page: 1,
        results: [
            {   
                id_user: 1,
                name: "Alicia",
                city: "Marsella",
                age: 38,
                languages: ["Español", "Francés"],
                interests: ["Cultura", "Política", "Rutas"],
                other_Details: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis est sunt cumque, accusantium dolor suscipit iste unde id adipisci voluptatum molestias dignissimos sequi neque minima assumenda eum at molestiae voluptatibus omnis officia nulla placeat? Sit distinctio nulla doloribus odit nesciunt temporibus voluptates ipsum ea libero voluptate aliquid assumenda, recusandae ab?"
            },
            {
                id_user: 2,
                name: "Pedro",
                city: "Bucarest",
                age: 25,
                languages: ["Español", "Inglés"],
                interests: ["Cultura", "Política", "Rutas"],
                other_Details: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis est sunt cumque, accusantium dolor suscipit iste unde id adipisci voluptatum molestias dignissimos sequi neque minima assumenda eum at molestiae voluptatibus omnis officia nulla placeat? Sit distinctio nulla doloribus odit nesciunt temporibus voluptates ipsum ea libero voluptate aliquid assumenda, recusandae ab?"
            },
            {
                id_user: 3,
                name: "Leticia",
                city: "Oporto",
                age: 41,
                languages: ["Español", "Portugués"],
                interests: ["Cultura", "Política", "Rutas"],
                other_Details: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis est sunt cumque, accusantium dolor suscipit iste unde id adipisci voluptatum molestias dignissimos sequi neque minima assumenda eum at molestiae voluptatibus omnis officia nulla placeat? Sit distinctio nulla doloribus odit nesciunt temporibus voluptates ipsum ea libero voluptate aliquid assumenda, recusandae ab?"
            },
            {
                id_user: 4,
                name: "Carlos",
                city: "Túnez",
                age: 22,
                languages: ["Español", "Árabe"],
                interests: ["Cultura", "Política", "Rutas"],
                other_Details: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis est sunt cumque, accusantium dolor suscipit iste unde id adipisci voluptatum molestias dignissimos sequi neque minima assumenda eum at molestiae voluptatibus omnis officia nulla placeat? Sit distinctio nulla doloribus odit nesciunt temporibus voluptates ipsum ea libero voluptate aliquid assumenda, recusandae ab?"
            },
            {
                id_user: 5,
                name: "Sara",
                city: "Londres",
                age: 31,
                languages: ["Español", "Inglés"],
                interests: ["Cultura", "Política", "Rutas"],
                other_Details: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis est sunt cumque, accusantium dolor suscipit iste unde id adipisci voluptatum molestias dignissimos sequi neque minima assumenda eum at molestiae voluptatibus omnis officia nulla placeat? Sit distinctio nulla doloribus odit nesciunt temporibus voluptates ipsum ea libero voluptate aliquid assumenda, recusandae ab?"
            },
            {
                id_user: 6,
                name: "Sara",
                city: "Londres",
                age: 31,
                languages: ["Español", "Inglés"],
                interests: ["Cultura", "Política", "Rutas"],
                other_Details: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis est sunt cumque, accusantium dolor suscipit iste unde id adipisci voluptatum molestias dignissimos sequi neque minima assumenda eum at molestiae voluptatibus omnis officia nulla placeat? Sit distinctio nulla doloribus odit nesciunt temporibus voluptates ipsum ea libero voluptate aliquid assumenda, recusandae ab?"
            },
            {
                id_user: 7,
                name: "Sara",
                city: "Londres",
                age: 31,
                languages: ["Español", "Inglés"],
                interests: ["Cultura", "Política", "Rutas"],
                other_Details: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis est sunt cumque, accusantium dolor suscipit iste unde id adipisci voluptatum molestias dignissimos sequi neque minima assumenda eum at molestiae voluptatibus omnis officia nulla placeat? Sit distinctio nulla doloribus odit nesciunt temporibus voluptates ipsum ea libero voluptate aliquid assumenda, recusandae ab?"
            },
            {
                id_user: 8,
                name: "Sara",
                city: "Londres",
                age: 31,
                languages: ["Español", "Inglés"],
                interests: ["Cultura", "Política", "Rutas"],
                other_Details: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis est sunt cumque, accusantium dolor suscipit iste unde id adipisci voluptatum molestias dignissimos sequi neque minima assumenda eum at molestiae voluptatibus omnis officia nulla placeat? Sit distinctio nulla doloribus odit nesciunt temporibus voluptates ipsum ea libero voluptate aliquid assumenda, recusandae ab?"
            }
        ]
    }

    let profiles = API_PROFILES.results;

    return (
        <div className="profiles-page">
            <h1>Encuentra a tu buddy en -Ciudad que hemos puesto en el input- </h1>
            <Filter />
            <div className="container-cards">
                {
                    profiles.map(profile => {
                        return (
                            <ProfileCard profile={profile} key={profile.id_user} />
                        )
                    })
                }
            
            </div>
        </div>
    )
}
