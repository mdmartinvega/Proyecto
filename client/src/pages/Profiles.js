import Profile_Card from '../components/Profile_Card';
import '../styles/Profiles.css';
export default function Profiles() {
    
    const API_profiles = {
        page: 1,
        results: [
            {
                name: "Alicia",
                city: "Marsella",
                age: 38,
                languages: ["Español", "Francés"],
                interests: ["Cultura", "Política", "Rutas"],
                other_Details: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis est sunt cumque, accusantium dolor suscipit iste unde id adipisci voluptatum molestias dignissimos sequi neque minima assumenda eum at molestiae voluptatibus omnis officia nulla placeat? Sit distinctio nulla doloribus odit nesciunt temporibus voluptates ipsum ea libero voluptate aliquid assumenda, recusandae ab?"
            },
            {
                name: "Pedro",
                city: "Bucarest",
                age: 25,
                languages: ["Español", "Inglés"],
                interests: ["Cultura", "Política", "Rutas"],
                other_Details: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis est sunt cumque, accusantium dolor suscipit iste unde id adipisci voluptatum molestias dignissimos sequi neque minima assumenda eum at molestiae voluptatibus omnis officia nulla placeat? Sit distinctio nulla doloribus odit nesciunt temporibus voluptates ipsum ea libero voluptate aliquid assumenda, recusandae ab?"
            },
            {
                name: "Leticia",
                city: "Oporto",
                age: 41,
                languages: ["Español", "Portugués"],
                interests: ["Cultura", "Política", "Rutas"],
                other_Details: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis est sunt cumque, accusantium dolor suscipit iste unde id adipisci voluptatum molestias dignissimos sequi neque minima assumenda eum at molestiae voluptatibus omnis officia nulla placeat? Sit distinctio nulla doloribus odit nesciunt temporibus voluptates ipsum ea libero voluptate aliquid assumenda, recusandae ab?"
            },
            {
                name: "Carlos",
                city: "Túnez",
                age: 22,
                languages: ["Español", "Árabe"],
                interests: ["Cultura", "Política", "Rutas"],
                other_Details: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis est sunt cumque, accusantium dolor suscipit iste unde id adipisci voluptatum molestias dignissimos sequi neque minima assumenda eum at molestiae voluptatibus omnis officia nulla placeat? Sit distinctio nulla doloribus odit nesciunt temporibus voluptates ipsum ea libero voluptate aliquid assumenda, recusandae ab?"
            },
            {
                name: "Sara",
                city: "Londres",
                age: 31,
                languages: ["Español", "Inglés"],
                interests: ["Cultura", "Política", "Rutas"],
                other_Details: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis est sunt cumque, accusantium dolor suscipit iste unde id adipisci voluptatum molestias dignissimos sequi neque minima assumenda eum at molestiae voluptatibus omnis officia nulla placeat? Sit distinctio nulla doloribus odit nesciunt temporibus voluptates ipsum ea libero voluptate aliquid assumenda, recusandae ab?"
            },
            {
                name: "Sara",
                city: "Londres",
                age: 31,
                languages: ["Español", "Inglés"],
                interests: ["Cultura", "Política", "Rutas"],
                other_Details: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis est sunt cumque, accusantium dolor suscipit iste unde id adipisci voluptatum molestias dignissimos sequi neque minima assumenda eum at molestiae voluptatibus omnis officia nulla placeat? Sit distinctio nulla doloribus odit nesciunt temporibus voluptates ipsum ea libero voluptate aliquid assumenda, recusandae ab?"
            },
            {
                name: "Sara",
                city: "Londres",
                age: 31,
                languages: ["Español", "Inglés"],
                interests: ["Cultura", "Política", "Rutas"],
                other_Details: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis est sunt cumque, accusantium dolor suscipit iste unde id adipisci voluptatum molestias dignissimos sequi neque minima assumenda eum at molestiae voluptatibus omnis officia nulla placeat? Sit distinctio nulla doloribus odit nesciunt temporibus voluptates ipsum ea libero voluptate aliquid assumenda, recusandae ab?"
            },
            {
                name: "Sara",
                city: "Londres",
                age: 31,
                languages: ["Español", "Inglés"],
                interests: ["Cultura", "Política", "Rutas"],
                other_Details: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis est sunt cumque, accusantium dolor suscipit iste unde id adipisci voluptatum molestias dignissimos sequi neque minima assumenda eum at molestiae voluptatibus omnis officia nulla placeat? Sit distinctio nulla doloribus odit nesciunt temporibus voluptates ipsum ea libero voluptate aliquid assumenda, recusandae ab?"
            }
        ]
    }

    return (
        <div>
            <h1>Ciudad que hemos puesto en el input </h1>
            <div className="container-cards">
                {
                    API_profiles.results.map(person => {
                        return (
                            <Profile_Card person={person}/>
                        )
                    })
                }
            
            </div>
        </div>
    )
}
