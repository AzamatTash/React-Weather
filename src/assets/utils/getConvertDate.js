export const getConvertDate = (unixDate) => {
    let data = new Date(unixDate * 1000);
    let months = ['Января','Февраля','Марта','Апреля','Мая','Июня','Июля','Августа','Сентебря','Октября','Ноября','Декабря'];
    let date = data.getDate();
    let month = months[data.getMonth()];
    return date + ' ' + month;
}