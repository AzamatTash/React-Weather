import React from 'react';
import classes from './Cards.module.sass'
import rainIcon from '../../assets/img/rain-icon.svg'

const Cards = (props) => {
    return (
        <div className={classes.wrapperMain}>
            <div className={classes.wrapperCard}>
                <div className={classes.title}>{'Сегодня'}</div>
                <time className={classes.date}>{'28 авг'}</time>
                <img className={classes.icon} src={rainIcon} alt="rainIcon"/>
                <div className={classes.weatherData}>
                    <div className={classes.temp}>{'+18'}°</div>
                    <div className={classes.description}>{'Облачно'}</div>
                </div>
            </div>

            <div className={classes.wrapperCard}>
                <div className={classes.title}>{'Сегодня'}</div>
                <time className={classes.date}>{'28 авг'}</time>
                <img className={classes.icon} src={rainIcon} alt="rainIcon"/>
                <div className={classes.weatherData}>
                    <div className={classes.temp}>{'+18'}°</div>
                    <div className={classes.description}>{'Облачно'}</div>
                </div>
            </div>

            <div className={classes.wrapperCard}>
                <div className={classes.title}>{'Сегодня'}</div>
                <time className={classes.date}>{'28 авг'}</time>
                <img className={classes.icon} src={rainIcon} alt="rainIcon"/>
                <div className={classes.weatherData}>
                    <div className={classes.temp}>{'+18'}°</div>
                    <div className={classes.description}>{'Облачно'}</div>
                </div>
            </div>

            <div className={classes.wrapperCard}>
                <div className={classes.title}>{'Сегодня'}</div>
                <time className={classes.date}>{'28 авг'}</time>
                <img className={classes.icon} src={rainIcon} alt="rainIcon"/>
                <div className={classes.weatherData}>
                    <div className={classes.temp}>{'+18'}°</div>
                    <div className={classes.description}>{'Облачно'}</div>
                </div>
            </div>

            <div className={classes.wrapperCard}>
                <div className={classes.title}>{'Сегодня'}</div>
                <time className={classes.date}>{'28 авг'}</time>
                <img className={classes.icon} src={rainIcon} alt="rainIcon"/>
                <div className={classes.weatherData}>
                    <div className={classes.temp}>{'+18'}°</div>
                    <div className={classes.description}>{'Облачно'}</div>
                </div>
            </div>

            <div className={classes.wrapperCard}>
                <div className={classes.title}>{'Сегодня'}</div>
                <time className={classes.date}>{'28 авг'}</time>
                <img className={classes.icon} src={rainIcon} alt="rainIcon"/>
                <div className={classes.weatherData}>
                    <div className={classes.temp}>{'+18'}°</div>
                    <div className={classes.description}>{'Облачно'}</div>
                </div>
            </div>
        </div>
    );
};

export default Cards;