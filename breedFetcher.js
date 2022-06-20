//require request
const request = require('request');
//Use Node's fs (file system) module to write the file (enables interacting with the file system)
const args = process.argv.slice(2);
//accept arguments from command line and slice first two irrelevant arguments
const breedName = args[0];


const fetchBreedDescription = function(breedName) {

  request(`http://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {

  if (error) {
    console.log(error);
    return;
    }
    //turn JSON to object
    const data = JSON.parse(body);
      if(data.length === 0) {
        console.log('Breed not found, please try again.');
      } else {
        console.log(data[0].description);
      }
  });
};
fetchBreedDescription(breedName);