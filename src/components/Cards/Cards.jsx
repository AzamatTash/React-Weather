import React from 'react';
import classes from './Cards.module.sass'
import {connect} from 'react-redux';
import {fetchForecast} from '../../redux/reducers/forecastReducer';
import {getConvertDate, getConvertTime} from '../../assets/utils/getTime';
import getWeatherIcon from '../../assets/img/getWeatherIcon';

const Cards = (props) => {
    React.useEffect(() => {
        props.fetchForecast(props.lat, props.lon);
    }, [props.lat, props.lon]);

    const cardsElements = props.list.map(card => {
        return (
            <div className={classes.wrapperCard} >
                <div className={classes.header}>
                    <div className={classes.weatherData}>
                        <time className={classes.date}>{getConvertDate(card.dt)}</time>
                        <div className={classes.temp}>{Math.round(card.main.temp)}°</div>
                    </div>
                    <time className={classes.time}>{getConvertTime(card.dt)}</time>
                </div>
                <img className={classes.icon} src={getWeatherIcon(card.weather[0].icon)}
                     alt='icon'/>
                <div className={classes.footer}>
                    <div className={classes.description}>{card.weather[0].description}</div>
                </div>
            </div>
        )
    });

    return (
        <div className={classes.wrapperMain}>
            {cardsElements}
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        lat: state.initializationReducer.currentCity.lat,
        lon: state.initializationReducer.currentCity.lon,
        list: state.forecastReducer.list
    };
};

export default connect(mapStateToProps, {fetchForecast})(Cards);