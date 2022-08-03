import React from 'react';
import classes from './CardsToggle.module.sass'

const CardsToggle = () => {
    return (
        <div className={classes.wrapper}>
            <button className={classes.active}>Через 3 часа</button>
            <button className={classes.btn}>На 6 дней</button>
        </div>
    );
};

export default CardsToggle;