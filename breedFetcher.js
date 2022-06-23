//require request
const request = require('request');

const fetchBreedDescription = function(breedName, callback) {

  request(`http://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error) {
      callback(error);
      return;
    } else {
    //turn JSON to object
      const data = JSON.parse(body);
      if (data.length === 0) {
        error = 'Breed not found, please try again.';
        callback(error);
      } else {
        callback(error, data[0].description);
      }
    }
  });
};
//fetchBreedDescription(breedName, callback);

module.exports = { fetchBreedDescription };