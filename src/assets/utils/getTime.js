export const getTime = () => {
    const data = new Date();
    const hours = data.getHours();
    const minutes = "0" + data.getMinutes();
    return hours + ':' + minutes.slice(-2);
}

export const getConvertTime = (ms) => {
    const data = new Date(ms * 1000);
    const hours = data.getHours();
    const minutes = "0" + data.getMinutes();
    return hours + ':' + minutes.slice(-2);
}

export const getConvertDate = (unixDate) => {
    let data = new Date(unixDate * 1000);
    let months = ['Января','Февраля','Марта','Апреля','Мая','Июня','Июля','Августа','Сентебря','Октября','Ноября','Декабря'];
    let date = data.getDate();
    let month = months[data.getMonth()];
    return date + ' ' + month;
}