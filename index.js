//const { fetchMyIP } = require('./iss');
//const { fetchCoordsByIP } = require('./iss');
//const { fetchISSFlyOverTimes } = require('./iss');

const { nextISSTimesForMyLocation } = require('./iss');

//fetchMyIP((error, ip) => {
//  if (error) {
//    console.log("It didn't work!", error);
//    return;
//  }
//
//  console.log("It worked! Returned IP:" , ip);
//});

//fetchCoordsByIP("99.250.25.74", (error, coords) => {
//  if (error) {
//    console.log("It didn't work!", error);
//    return;
//  }
//  console.log("It worked! Returned coordinates:", coords)
//});

//const coordinates = { latitude: '43.474', longitude: '-80.554'};
//
//fetchISSFlyOverTimes(coordinates, (error, times) => {
//  if (error) {
//    console.log("It didn't work!", error);
//    return;
//  }
//  console.log("It worked! Returned flyover times:", times);
//});

const formatPassTime = function(passTimes) {
  for (const time of passTimes) {
    let dateAndTime = new Date(0);
    dateAndTime.setUTCSeconds(time.risetime);
    const duration = time.duration;
    console.log(`Next pass at ${dateAndTime} for ${duration} seconds!`);
  }
};

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  formatPassTime(passTimes);
});