const request = require('request');
const args = process.argv.slice(2);

const fetchBreed = function(breed) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
    if (error || body === '[]') {
      return console.log("Failed to get breed");
    }
    console.log(JSON.parse(body));
  });
};

fetchBreed(args);