const request = require('request');

const fetchBreedDescription = function(breed, cb) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
    cb(error, JSON.parse(body)[0].description)
  });
};

module.exports = fetchBreedDescription;