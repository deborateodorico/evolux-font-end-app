import didsData from './data/dids.json';

export const fetchDids = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const localStorageDidsData = localStorage.getItem('dids-data');
      const localStorageDids = JSON.parse(localStorageDidsData);

      if (localStorageDids && localStorageDids.length !== 0) {
        resolve(localStorageDids);
      } else {
        resolve(didsData);
      }
    }, 2000);
  });
};
