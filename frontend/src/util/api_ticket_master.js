const axios = require('axios');
const Geohash = require('latlon-geohash');
const apiKeyTicketMaster = require("../../../config/keys").apiKeyTicketMaster;
const apiSecretTicketMaster = require("../../../config/keys").apiSecretTicketMaster;

// export const fetchTicketMaster = (options) => (
const fetchTicketMaster = (options) => {
  // Default query parameters
  const defaults = {
    latitude: 37.7986717,
    longitude: -122.4012891, // San Francisco, CA

    includeFamily: 'no',

    radius: 50,
    size: 20,
  };

  // Combine defaults and options query parameters
  const {
    date,

    latitude,
    longitude,
    radius,

    includeFamily,

    size,
    page,
  } = Object.assign(defaults, options);

  // Generate DateTime based on date options input
  const startDateTime = `${date}T00:00:00Z`;
  const endDateTime = `${date}T23:59:59Z`;
  const onsaleEndDateTime = `${date}T23:59:59Z`;

  // Generate geoPoint parameter based on latitude, longitude
  const geoPoint = Geohash.encode(latitude, longitude, 3);

  // Generate URL path
  let url = 'https://app.ticketmaster.com/discovery/v2/events.json?';

  url += startDateTime ? `&startDateTime=${startDateTime}` : ''
  url += endDateTime ? `&endDateTime=${endDateTime}` : ''
  url += onsaleEndDateTime ? `&onsaleEndDateTime=${onsaleEndDateTime}` : ''

  url += geoPoint ? `&geoPoint=${geoPoint}` : ''
  url += radius ? `&radius=${radius}` : ''

  url += includeFamily ? `&includeFamily=${includeFamily}` : ''

  url += size ? `&size=${size}` : ''
  url += page ? `&page=${page}` : ''

  url += `&apikey=${apiKeyTicketMaster}`

  console.log(url)

  // Return axios Promise
  return axios({
    method: 'get',
    url: url,
    responseType: 'json'
  })
}

// fetchTicketMaster()
fetchTicketMaster({
    latitude: 42.35984802,
    longitude: -71.05888367,

    date: '2018-11-30',

    includeFamily: 'no', // family-friendly?

    size: 20, // how many query results to return
    page: 0, // aka offset
  })
  .then((res) => {
    console.log(res.data._embedded.events) // Array of events
    // console.log(res.data._embedded.events[0]._embedded.venues) // Single event's venue
    // console.log(res.data._embedded.events[0].dates) // Single event's date
  })