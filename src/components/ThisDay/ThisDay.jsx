import React from 'react';
import classes from './ThisDay.module.sass'
import {connect} from 'react-redux';
import {fetchWeatherCurrentDay} from "../../redux/reducers/weatherReducer";

const ThisDay = (props) => {
    React.useEffect(() => {
        props.fetchWeatherCurrentDay(props.currentCity);
    },[props.currentCity]);

    return (
        <div className={classes.thisDay}>
            <div className={classes.wrapper}>
                <div className={classes.itemLeft}>
                    <div className={classes.temp}>{props.temp}°</div>
                    <h1 className={classes.weekDay}>{props.weekDay}</h1>
                </div>
                <div className={classes.itemRight}>
                    <img className={classes.currenWeatherIcon}
                         src={`https://openweathermap.org/img/wn/${props.icon}@4x.png`} alt="icon"/>
                </div>
            </div>
            <time className={classes.time}>Время: {props.time}</time>
            <div className={classes.currentCity}>Город: {props.cityName}</div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        currentCity: state.weatherReducer.currentCity,
        temp: state.weatherReducer.temp,
        weekDay: state.weatherReducer.weekDay,
        time: state.weatherReducer.time,
        cityName: state.weatherReducer.cityName,
        icon: state.weatherReducer.icon
    }
}

export default connect(mapStateToProps, {fetchWeatherCurrentDay})(ThisDay);