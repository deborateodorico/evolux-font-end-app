const { faker } = require('@faker-js/faker');

const fs = require('fs');

function generateDidsData(didsQuantity) {
  let dataArr = [];

  for (let i = 1; i <= didsQuantity; i++) {
    let newdObj = {
      id: i,
      value: faker.phone.phoneNumber('+## (##) #####-####'),
      monthyPrice: Math.random().toFixed(2),
      setupPrice: (Math.random() * 11).toFixed(2),
      currency: faker.finance.currencyCode(),
    };

    dataArr.push(newdObj);
  }
  return dataArr;
}

const dids = generateDidsData(800);

fs.writeFile('src/api/data/dids.json', JSON.stringify(dids), (err) => {
  // Checking for errors
  if (err) throw err;

  console.log('Done writing'); // Success
});
