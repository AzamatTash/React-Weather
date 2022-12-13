export const storage = {
    setItem(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    },
    getItem(key) {
        const value = localStorage.getItem(key);
        if(value) {
            return JSON.parse(value);
        }
    }
};