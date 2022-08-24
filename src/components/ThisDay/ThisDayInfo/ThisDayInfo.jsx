import React from 'react';
import classes from './ThisDayInfo.module.sass'
import thermometerIcon from '../../../assets/img/clobal-icon/thermometer-icon.svg'
import humidityIcon from '../../../assets/img/clobal-icon/humidity-icon.svg'
import precipitationIcon from '../../../assets/img/clobal-icon/precipitation-icon.svg'
import windIcon from '../../../assets/img/clobal-icon/wind-icon.svg'
import cloudBgImg from '../../../assets/img/clobal-icon/cloud-image.png'
import {connect} from "react-redux";

const ThisDayInfo = (props) => {
    return (
        <>
            <div className={classes.thisDayInfo}>
                <img className={classes.bgImg} src={cloudBgImg} alt="cloud"/>
                <div className={classes.wrapper}>
                    <img className={classes.icon} src={thermometerIcon} alt="thermometerIcon"/>
                    <div className={classes.title}>Температура</div>
                    <div className={classes.description}>{props.temp}° - ощущается как {props.feelsLike}°</div>
                </div>
                <div className={classes.wrapper}>
                    <img className={classes.icon} src={humidityIcon} alt="humidityIcon"/>
                    <div className={classes.title}>Давление</div>
                    <div className={classes.description}>{props.pressure} мм ртутного столба</div>
                </div>
                <div className={classes.wrapper}>
                    <img className={classes.icon} src={precipitationIcon} alt="precipitationIcon"/>
                    <div className={classes.title}>Влажность</div>
                    <div className={classes.description}>{props.humidity} % - {props.description}</div>
                </div>
                <div className={classes.wrapper}>
                    <img className={classes.icon} src={windIcon} alt="windIcon"/>
                    <div className={classes.title}>Ветер</div>
                    <div className={classes.description}>{props.windSpeed} м/с {props.windDirection} - легкий ветер</div>
                </div>
            </div>
        </>
    );
};

const mapStateToProps = (state) => {
    return {
        temp: state.weatherReducer.temp,
        feelsLike: state.weatherReducer.feelsLike,
        pressure: state.weatherReducer.pressure,
        humidity: state.weatherReducer.humidity,
        windSpeed: state.weatherReducer.wind.speed,
        windDirection: state.weatherReducer.wind.direction,
        description: state.weatherReducer.description
    }
}

export default connect(mapStateToProps)(ThisDayInfo);