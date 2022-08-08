export const getConvertTime = (ms) => {
    const data = new Date(ms * 1000);
    const hours = data.getHours();
    const minutes = "0" + data.getMinutes();
    return hours + ':' + minutes.slice(-2);
}
