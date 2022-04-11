const fs = require('fs');

function generateDidsData(didsQuantity) {
  let dataArr = [];

  for (let i = 1; i <= didsQuantity; i++) {
    let newdObj = {
      id: i,
      value: `+55 84 91234-432${i}`,
      monthyPrice: Math.random().toFixed(2),
      setupPrice: (Math.random() * 11).toFixed(2),
      currency: 'U$',
    };

    dataArr.push(newdObj);
  }
  return dataArr;
}

const dids = generateDidsData(5);

fs.writeFile('src/api/data/dids.json', JSON.stringify(dids), (err) => {
  // Checking for errors
  if (err) throw err;

  console.log('Done writing'); // Success
});
