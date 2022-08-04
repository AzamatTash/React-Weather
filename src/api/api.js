import * as axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5/'
});

const apiKey = 'f660a2fb1e4bad108d6160b7f58c555f';

export const weatherAPI = {
    getWeather(cityName) {
        return instance.get(`weather?q=${cityName}&lang=ru&appid=${apiKey}&units=metric`)
    },
    getForecast(cityName) {
        return instance.get(`forecast?q=${cityName}&lang=ru&appid=${apiKey}&units=metric`)
    }
}