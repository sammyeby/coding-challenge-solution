

export const storeSessionData = (key: string, value: string): void => {
    // Do stuff -- maybe JSON stringify
    sessionStorage.setItem(key, value);
};


export const getSessionData = (dataKey: string) => sessionStorage.getItem(dataKey);

export const clearStoredData = (dataKey: string): void => {
    localStorage.removeItem(dataKey);
};