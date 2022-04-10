export default function generateDidsData(didsQuantity) {
  let dataArr = [];

  let obj = {
    id: 1,
    value: '+55 84 91234-4321',
    monthyPrice: '0.03',
    setupPrice: '3.40',
    currency: 'U$',
  };

  for (let i = 1; i <= didsQuantity; i++) {
    let newdObj = { ...obj, id: i };
    dataArr.push(newdObj);
  }
  return dataArr;
}
