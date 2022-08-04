import React from 'react';
import classes from './ThisDay.module.sass'
import sun from '../../assets/img/sun.svg'
import {connect} from "react-redux";

const ThisDay = (props) => {
    return (
        <div className={classes.thisDay}>
            <div className={classes.wrapper}>
                <div>
                    <div className={classes.temp}>{props.temp}°</div>
                    <h1 className={classes.weekDay}>{props.weekDay}</h1>
                </div>
                <div>
                    <img className={classes.currenWeatherIcon} src={sun } alt="sun"/>
                </div>
            </div>
            <time className={classes.time}>Время: {props.time}</time>
            <div className={classes.currentCity}>Город: {props.cityName}</div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        temp: state.thisDayReducer.temp,
        weekDay: state.thisDayReducer.weekDay,
        time: state.thisDayReducer.time,
        cityName: state.thisDayReducer.cityName
    }
}

export default connect(mapStateToProps)(ThisDay);