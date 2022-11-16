import api from '../axios/index';
import axios from '../axios/index';

export const weatherService = {
    getGeocoding(cityName) {
        return axios.get(`https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=2&appid=${process.env.REACT_APP_API_KEY}`);
    },
    getWeather(lat, lon) {
        return api.get(`weather?lat=${lat}&lon=${lon}`);
    },
    getForecast(lat, lon) {
        return api.get(`forecast?lat=${lat}&lon=${lon}`);
    }
};