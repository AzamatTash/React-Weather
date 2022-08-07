export const getTime = () => {
    const data = new Date();
    const hours = data.getHours();
    const minutes = "0" + data.getMinutes();
    return hours + ':' + minutes.slice(-2);
}