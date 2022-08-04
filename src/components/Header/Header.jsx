import React from 'react';
import classes from './Header.module.sass'
import logoIcon from '../../assets/img/weather-logo.png'
import themeInvertIcon from '../../assets/img/theme-colors-icon.svg'
import searchIcon from '../../assets/img/search-icon.png'
import {connect} from "react-redux";
import {fetchWeatherCurrentDay} from "../../redux/Reducers/thisDayReducer";

const Header = (props) => {
    React.useEffect(() => {
        props.fetchWeatherCurrentDay('orenburg');
    },[])

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
                    <input className={classes.input} placeholder='Введите город...' type='text'/>
                    <img className={classes.input_img} src={searchIcon} alt='Поиск'/>
                </form>
            </div>
        </div>
    );
};


export default connect(null,{fetchWeatherCurrentDay})(Header);