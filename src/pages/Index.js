import Input from '../components/Input';


export default function Index() {

    // const CITIES_URL = [{"city": "Málaga", "city": "París", "city": "Londres"}];
    // const initialState = [];
    // const [inputCities, setInputCities] = useState(initialState);
    
    // useEffect(() => {
    //     fetch(CITIES_URL)
    //      .then(response => response.json())
    //      .then(data => setInputCities(data))
    //    }, []);

    return (
        <div className="index">
            <div className="index-picture">
                <h1>Cambiar de ciudad nunca fue tan fácil</h1>
                <Input />
            </div>
        </div>
    )
}
