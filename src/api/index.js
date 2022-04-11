import didsData from './data/dids.json';

export const fetchDids = async () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(didsData), 2000);
  });
};
