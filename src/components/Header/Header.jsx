import React from 'react';
import {connect} from 'react-redux';
import {storage} from '../../storage/storage';
import {setCurrentCity, setCurrentTheme} from '../../redux/reducers/initializationReducer';
import {weatherService} from '../../service/weatherService';
import classes from './Header.module.sass'
import logoIcon from '../../assets/img/clobal-icon/weather-logo.svg'
import themeInvertIcon from '../../assets/img/clobal-icon/theme-colors-icon.svg'
import searchIcon from '../../assets/img/clobal-icon/search-icon.png'


const Header = (props) => {
    const [value, setValue] = React.useState('');
    const [cityName, setCityName] = React.useState(storage.getItem('city') || 'москва');

    const onChangeCityName = (e) => setValue(e.currentTarget.value);

    const onClickSendBtn = (e) => {
        e.preventDefault();
        setCityName(value);
        storage.setItem('city', value === '' ? 'москва' : value);
        setValue('');
    };

    React.useEffect(() => {
        const getGeocodingCity = async() => {
            const {data} = await weatherService.getGeocoding(cityName);
            props.setCurrentCity(data);
        }
        getGeocodingCity().catch(() => alert('Город не найден!'));
    },[cityName]);

    const onChangeTheme = () => {
        if (props.currentTheme === 'light') {
            storage.setItem('theme', 'dark');
            props.setCurrentTheme('dark');
        } else {
            storage.setItem('theme', 'light');
            props.setCurrentTheme('light');
        }
    };

    React.useEffect(() => {
        const root = document.querySelector(':root');
        const components = [
            'body-background',
            'components-background',
            'card-background',
            'font',
            'components-shadow',
            'btn-next-prev'
        ];
        components.forEach(component => {
            root.style.setProperty(`--${component}-default`, `var(--${component}-${props.currentTheme})`);
        });
    },[props.currentTheme]);

    return (
        <div className={classes.header}>
            <div className={classes.left}>
                <img className={classes.logo_img} src={logoIcon} alt='Логотип'/>
                <h1 className={classes.title}>react weather</h1>                
            </div>
            <div className={classes.right}>
                <button onClick={onChangeTheme} className={classes.btn}>
                    <img className={classes.btn_img} src={themeInvertIcon} alt='Смена темы'/>
                </button>
                <form className={classes.form}>
                    <input onChange={onChangeCityName} value={value} className={classes.input} placeholder='поиск...' type='text'/>
                    <button onClick={onClickSendBtn} className={classes.btn} >
                        <img src={searchIcon} alt='Поиск'/>
                    </button>
                </form>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        currentTheme: state.initializationReducer.currentTheme
    };
};
export default connect(mapStateToProps,{setCurrentCity, setCurrentTheme})(Header);