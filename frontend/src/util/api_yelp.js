const yelp = require('yelp-fusion');
const apiKeyYelp = require("./keys").apiKeyYelp;

const client = yelp.client(apiKeyYelp);

export const apiYelp = (searchOptions) => {

  const searchDefaults = {
    dataType: "jsonp",
    offset: 0, // AKA next page
    price: [1, 2], // [1,2,3,4] $ $$ $$$ $$$$
    open_now: true, // OR open_at: 1540320750
    limit: 20, // MAX: 50
    radius: 40000, // MAX: 40000 ~ 25 miles
    sort_by: 'best_match', // OR 'rating', 'review_count', 'distance'
    // attributes: 'hot_and_new' // OR 'request_a_quote', 'reservation', 'waitlist_reservation', 'cashback', 'deals', 'gender_neutral_restrooms'
  }

  const searchRequest = Object.assign(searchDefaults, searchOptions);

  console.log(searchRequest);

  return client.search(searchRequest)

};


// apiYelp({
//     latitude: 37.7986717,
//     longitude: -122.4012891,
//     categories: ['restaurants', 'food'],
//     limit: 1
//   })
//   .then(response => {
//     console.log(JSON.stringify(response.jsonBody.businesses))
//   })
//   .catch(e => {
//     console.log(e);
//   });




apiYelp({
    // searchOptions need categories and (lat/long OR location)

    // // complete list of category: https://www.yelp.com/developers/documentation/v3/category_list
    // categories: ['active'],
    // categories: ['arts'],
    // categories: ['beautysvc'],
    // categories: ['localservices'],
    // categories: ['skiresorts', 'tours'],
    // categories: ['shopping'],
    categories: ['restaurants', 'food'],

    latitude: 37.7986717,
    longitude: -122.4012891,
    // OR
    // location: 'san francisco, ca',

    // limit: 1
  })
  .then(response => {
    console.log(JSON.stringify(response.jsonBody.businesses))
  })
  .catch(e => {
    console.log(e);
  });





const response_example = [{
  "id": "PTFxtXS47ZVRCdZIrEWvGw",
  "alias": "golden-boy-pizza-san-francisco",
  "name": "Golden Boy Pizza",
  "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/F8OxoXdS51h2VfU9Je2cNQ/o.jpg",
  "is_closed": false,
  "url": "https://www.yelp.com/biz/golden-boy-pizza-san-francisco?adjust_creative=0tk3OrIh47fn8X6I-g846g&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=0tk3OrIh47fn8X6I-g846g",
  "review_count": 3084,
  "categories": [{
    "alias": "pizza",
    "title": "Pizza"
  }, {
    "alias": "italian",
    "title": "Italian"
  }],
  "rating": 4.5,
  "coordinates": {
    "latitude": 37.7997956,
    "longitude": -122.4080729
  },
  "transactions": [],
  "price": "$",
  "location": {
    "address1": "542 Green St",
    "address2": "",
    "address3": "",
    "city": "San Francisco",
    "zip_code": "94133",
    "country": "US",
    "state": "CA",
    "display_address": ["542 Green St", "San Francisco, CA 94133"]
  },
  "phone": "+14159829738",
  "display_phone": "(415) 982-9738",
  "distance": 608.9990840712641
}];