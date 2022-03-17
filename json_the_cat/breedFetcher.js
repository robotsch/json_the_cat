const request = require('request');

const fetchBreedDescription = function(breed, cb) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
    if (error || body === '[]') {
      return console.log("Failed to get breed");
    }
    const desc = JSON.parse(body)[0].description;
    cb(error, desc);
  });
};

module.exports = fetchBreedDescription;