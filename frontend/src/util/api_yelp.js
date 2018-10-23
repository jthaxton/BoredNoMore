const yelp = require('yelp-fusion');
const apiKeyYelp = require("../../../config/keys").apiKeyYelp;

const client = yelp.client(apiKeyYelp);

const apiYelp = ({
  searchLocationByLatLong,
  searchLocationByInput,
}) => {

  const searchLocation = searchLocationByInput ?
    searchLocationByInput : searchLocationByLatLong;

  const searchCategories = {
    // categories: ['active']
    // categories: ['arts']
    // categories: ['beautysvc']
    // categories: ['localservices']
    // categories: ['skiresorts', 'tours']
    // categories: ['shopping']
    categories: ['restaurants', 'food']
  };

  const searchLimit = {
    limit: 20
  };

  const searchOffset = {
    offset: 0 // will be useful when user wants to see more, aka next page.
  };

  const searchPrice = {
    // price: [1, 2, 3, 4]
    price: [1, 2]
  };

  const searchOpenTime = {
    open_now: true,
    // open_at: 1540320750
  };


  const searchRequest = Object.assign(
    searchLocation,
    searchCategories,
    searchLimit,
    searchOffset,
    searchPrice,
    searchOpenTime
  );

  console.log(searchRequest);

  return client.search(searchRequest)
};

apiYelp({
  searchLocationByLatLong: {
    latitude: 37.7986717,
    longitude: -122.4012891
  }
}).then(response => {
  console.log('called')
  console.log(JSON.stringify(response.jsonBody.businesses))
}).catch(e => {
  console.log(e);
});