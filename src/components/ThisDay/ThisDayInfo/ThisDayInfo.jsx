import React from 'react';
import classes from './ThisDayInfo.module.sass'
import thermometerIcon from '../../../assets/img/thermometer-icon.svg'
import humidityIcon from '../../../assets/img/humidity-icon.svg'
import precipitationIcon from '../../../assets/img/precipitation-icon.svg'
import windIcon from '../../../assets/img/wind-icon.svg'
import cloudBgImg from '../../../assets/img/cloud-image.png'

const ThisDayInfo = (props) => {
    return (
        <div className={classes.thisDayInfo}>
            <img className={classes.bgImg} src={cloudBgImg} alt="cloud"/>
            <div className={classes.wrapper}>
                <img className={classes.icon} src={thermometerIcon} alt="thermometerIcon"/>
                <div className={classes.title}>Температура</div>
                <div>{' 20'}° - ощущается как {'17'}°</div>
            </div>
            <div className={classes.wrapper}>
                <img className={classes.icon} src={humidityIcon} alt="humidityIcon"/>
                <div className={classes.title}>Давление</div>
                <div>{'765'} мм ртутного столба - нормальное</div>
            </div>
            <div className={classes.wrapper}>
                <img className={classes.icon} src={precipitationIcon} alt="precipitationIcon"/>
                <div className={classes.title}>Осадки</div>
                <div>Без осадков</div>
            </div>
            <div className={classes.wrapper}>
                <img className={classes.icon} src={windIcon} alt="windIcon"/>
                <div className={classes.title}>Ветер</div>
                <div>{'3'} м/с {'юго-запад'} - легкий ветер</div>
            </div>
        </div>
    );
};

export default ThisDayInfo;