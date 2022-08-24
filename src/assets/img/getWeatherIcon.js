import thunderstorm from './weather-icon/Thunderstorm.png';
import rain from './weather-icon/Rain.png';
import snow from './weather-icon/Snow.png';
import atmosphere from './weather-icon/Atmosphere.png';
import clearDay from './weather-icon/Clear-day.png';
import clearNight from './weather-icon/Clear-night.png';
import cloudsDay from './weather-icon/Clear-day.png';
import cloudsNight from './weather-icon/Clear-night.png';
import cloudsScattered from './weather-icon/Clouds-03dn.png';
import cloudsOvercast from './weather-icon/Clouds-04dn.png';

const getWeatherIcon = (icon) => {
    switch (true) {
        case (icon === '11d'):
        case (icon === '11n'):
            return thunderstorm;
        case (icon === '09d'):
        case (icon === '09n'):
        case (icon === '10d'):
        case (icon === '10n'):
            return rain;
        case (icon === '13d'):
        case (icon === '13n'):
            return snow
        case (icon === '50d'):
        case (icon === '50n'):
            return atmosphere
        case (icon === '01d'):
            return clearDay
        case (icon === '01n'):
            return clearNight
        case (icon === '02d'):
            return cloudsDay
        case (icon === '02n'):
            return cloudsNight
        case (icon === '03d'):
        case (icon === '03n'):
            return cloudsScattered
        case (icon === '04d'):
        case (icon === '04n'):
            return cloudsOvercast
    }
};

export default getWeatherIcon;