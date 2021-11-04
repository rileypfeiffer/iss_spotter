const { nextISSTimesForMyLocation } = require('./iss_promised');

const formatPassTime = function(passTimes) {
  for (const time of passTimes) {
    let dateAndTime = new Date(0);
    dateAndTime.setUTCSeconds(time.risetime);
    const duration = time.duration;
    console.log(`Next pass at ${dateAndTime} for ${duration} seconds!`);
  }
};

nextISSTimesForMyLocation()
  .then((passTimes) => {
    formatPassTime(passTimes);
  })
  .catch((error) => {
    console.log("It didn't work: ", error.message);
  });
