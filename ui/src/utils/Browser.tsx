export const getLocalStorageObject = (key: string): any => {
  if (localStorage) {
    const stored = localStorage.getItem(key);
    if (stored) {
      return JSON.parse(stored);
    }
  }
  return null;
};

export const setLocalStorageObject = (key: string, value: any) => {
  if (localStorage) {
    localStorage.setItem(key, JSON.stringify(value));
  }
};

export const getSessionObject = (key: string): any => {
  if (sessionStorage) {
    const stored = sessionStorage.getItem(key);
    if (stored) {
      return JSON.parse(stored);
    }
  }
  return null;
};

export const setSessionObject = (key: string, value: any) => {
  if (sessionStorage) {
    sessionStorage.setItem(key, JSON.stringify(value));
  }
};
