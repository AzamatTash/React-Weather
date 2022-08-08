import React from 'react';
import classes from './Cards.module.sass'
import {fetchForecast} from "../../redux/reducers/forecastReducer";
import {connect} from "react-redux";
import {getConvertDate, getConvertTime} from "../../assets/utils/getTime";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Cards = (props) => {
    React.useEffect(() => {
        props.fetchForecast(props.currentCity);
    }, [props.currentCity]);

    const cardElement = props.list.map(card => {
        return (
            <div className={classes.wrapperCard}>
                <div className={classes.weatherData}>
                    <time className={classes.title}>{getConvertDate(card.dt)}</time>
                    <div className={classes.temp}>{Math.round(card.main.temp)}°</div>
                </div>
                <time className={classes.date}>{getConvertTime(card.dt)}</time>
                <img className={classes.icon} src={`https://openweathermap.org/img/wn/${card.weather[0].icon}@4x.png`}
                     alt="icon"/>
                <div className={classes.description}>{card.weather[0].description}</div>
            </div>
        )
    })

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 6,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 4.5,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 3.5,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2.5
                }
            }
        ]
    };

    return (
        <Slider {...settings} className={classes.wrapperMain}>
            {cardElement}
        </Slider>
    )
};

const mapStateToProps = (state) => {
    return {
        currentCity: state.weatherReducer.currentCity,
        list: state.forecastReducer.list
    };
};

export default connect(mapStateToProps, {fetchForecast})(Cards);