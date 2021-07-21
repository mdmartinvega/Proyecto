
const PORT = 8000;
const API_BASE = `http://localhost:${PORT}/`;

const API_PROFILES = API_BASE + `api/buddies/`;
const API_PROFILES_BY_CITY = API_BASE + `api/buddies/city/`;
const API_REGISTER_BUDDY = API_BASE + `api/buddies/addBuddy`;
const API_REGISTER_USER = API_BASE + `api/buddies/addUser`;
const API_REGISTER_IMAGE = API_BASE + `api/buddies/imageupdated/`;
const LOGIN_URL = API_BASE + `api/login_check`;
const INTERESTSLIST_URL = API_BASE + `api/buddies/interestsList`;
const LANGUAGESLIST_URL = API_BASE + `api/buddies/languagesList`;
const API_MESSAGES = API_BASE + `api/messages/`;
const API_MESSAGES_RECEIVED = API_BASE + `api/messages/receivedMessages/`;
const API_CITIES = API_BASE + `api/cities`;
const API_DELETE_ACCOUNT = API_BASE + `api/buddies/delete/`
const PLACEHOLDER_URL = "https://images.pexels.com/photos/6455053/pexels-photo-6455053.png?auto=compress&cs=tinysrgb&dpr=1&w=500";
const API_ME = API_BASE + `api/buddies/me`;

export {
    API_PROFILES,
    LOGIN_URL,
    INTERESTSLIST_URL,
    LANGUAGESLIST_URL,
    API_CITIES,
    API_REGISTER_BUDDY,
    API_REGISTER_USER,
    API_MESSAGES,
    PLACEHOLDER_URL,
    API_REGISTER_IMAGE,
    API_DELETE_ACCOUNT,
    API_MESSAGES_RECEIVED,
    API_ME,
    API_PROFILES_BY_CITY
};