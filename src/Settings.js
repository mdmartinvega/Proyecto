
const PORT = 8000;
const API_PROFILES = `http://localhost:${PORT}/api/buddies`;
const API_REGISTER_BUDDY = `http://localhost:${PORT}/api/buddies/addBuddy`;
const API_REGISTER_USER = `http://localhost:${PORT}/api/buddies/addUser`;
const LOGIN_URL = `http://localhost:${PORT}/api/login_check`;
const INTERESTSLIST_URL = "http://localhost:8000/api/buddies/interestsList";
const LANGUAGESLIST_URL = "http://localhost:8000/api/buddies/languagesList";
const API_MESSAGES = "http://localhost:8000/api/messages"
const API_CITIES = "http://localhost:8000/api/cities";
const PLACEHOLDER_URL = "https://images.pexels.com/photos/6455053/pexels-photo-6455053.png?auto=compress&cs=tinysrgb&dpr=1&w=500";

export {
    API_PROFILES,
    LOGIN_URL,
    INTERESTSLIST_URL,
    LANGUAGESLIST_URL,
    API_CITIES,
    API_REGISTER_BUDDY,
    API_REGISTER_USER,
    API_MESSAGES,
    PLACEHOLDER_URL
};