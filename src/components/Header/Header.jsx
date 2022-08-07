import React from 'react';
import classes from './Header.module.sass'
import logoIcon from '../../assets/img/weather-logo.png'
import themeInvertIcon from '../../assets/img/theme-colors-icon.svg'
import searchIcon from '../../assets/img/search-icon.png'
import {connect} from "react-redux";
import {fetchWeatherCurrentDay, setCurrentCity, weatherReducer} from "../../redux/reducers/weatherReducer";

const Header = (props) => {
    const [cityName, setCityName] = React.useState();

    const onChangeCityName = (e) => {
        setCityName(e.currentTarget.value);
    };

    const onClick = (e) => {
        props.setCurrentCity(cityName);
        e.preventDefault();
    };

    React.useEffect(() => {
        props.fetchWeatherCurrentDay(props.currentCity);
    },[props.currentCity]);

    return (
        <div className={classes.header}>
            <div className={classes.left}>
                <img className={classes.logo_img} src={logoIcon} alt='Логотип'/>
                <h1 className={classes.title}>react weather</h1>                
            </div>
            <div className={classes.right}>
                <button className={classes.btn}>
                    <img className={classes.btn_img} src={themeInvertIcon} alt='Смена темы'/>
                </button>
                <form className={classes.form}>
                    <input onChange={onChangeCityName} className={classes.input} placeholder='поиск...' type='text'/>
                    <img onClick={onClick} className={classes.input_img} src={searchIcon} alt='Поиск'/>
                </form>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        currentCity: state.weatherReducer.currentCity
    };
};

export default connect(mapStateToProps,{fetchWeatherCurrentDay, setCurrentCity})(Header);