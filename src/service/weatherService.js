import api from '../axios/index';

export const weatherService = {
    getWeather(cityName) {
        return api.get(`weather?q=${cityName}`)
    },
    getForecast(cityName) {
        return api.get(`forecast?q=${cityName}`)
    }
}