export const getDirectionWind = (deg) => {
    switch (true) {
        case (deg === 0):
            return 'север';
        case (deg < 90):
            return 'северо-восток';
        case (deg === 90):
            return 'восток';
        case (deg < 180):
            return 'юго-восток';
        case ( deg === 180):
            return 'юг';
        case (deg < 270):
            return 'юго-запад';
        case (deg === 270):
            return 'запад';
        case (deg < 360):
            return 'северо-запад';
    }
}