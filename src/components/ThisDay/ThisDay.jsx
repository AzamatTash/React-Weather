import React from 'react';
import classes from './ThisDay.module.sass'
import sun from '../../assets/img/sun.svg'

const ThisDay = (props) => {
    return (
        <div className={classes.thisDay}>
            <div className={classes.wrapper}>
                <div>
                    <div className={classes.temp}>{20}°</div>
                    <h1 className={classes.weekDay}>{'Cегодня'}</h1>
                </div>
                <div>
                    <img className={classes.currenWeatherIcon} src={sun } alt="sun"/>
                </div>
            </div>
            <time className={classes.time}>Время: {'21:54'}</time>
            <div className={classes.currentCity}>Город: {'Санкт-Петербург'}</div>
        </div>
    );
};

export default ThisDay;