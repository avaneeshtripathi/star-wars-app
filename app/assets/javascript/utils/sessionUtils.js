export function doGetSession (key) {
    return JSON.parse(sessionStorage.getItem(key));
};

export function doSetSession (key, value) {
    sessionStorage.setItem(key, JSON.stringify(value));
};

export function doClearSession () {
    sessionStorage.clear();
};
