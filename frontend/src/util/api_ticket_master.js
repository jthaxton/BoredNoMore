const axios = require('axios');
const Geohash = require('latlon-geohash');
const apiKeyTicketMaster = require("../../../config/keys").apiKeyTicketMaster;
const apiSecretTicketMaster = require("../../../config/keys").apiSecretTicketMaster;

// export const fetchTicketMaster = () => (
const fetchTicketMaster = (options) => {
  const defaults = {
    latitude: 37.7986717,
    longitude: -122.4012891, // San Francisco, CA
    radius: 50,
    size: 20,
  };

  const {
    startDateTime,
    endDateTime,
    geoPoint,
    latitude,
    longitude,

    radius,
    size,
  } = Object.assign(defaults, options);

  let url = 'https://app.ticketmaster.com/discovery/v2/events.json?';

  url += startDateTime ? `&startDateTime=${startDateTime}` : ''
  url += endDateTime ? `&endDateTime=${endDateTime}` : ''
  url += geoPoint ? `&geoPoint=${geoPoint}` : ''

  url += radius ? `&radius=${radius}` : ''
  url += size ? `&size=${size}` : ''

  url += `&apikey=${apiKeyTicketMaster}`


  return axios({
    method: 'get',
    url: url,
    responseType: 'json'
  })

  console.log(Geohash.encode(latitude, longitude, 3));
}

// fetchTicketMaster()
fetchTicketMaster({
  geoPoint: 'drt2zp',

  latitude: 37.7986717,
  longitude: -122.4012891,

  startDateTime: '2018-10-27T00:00:00Z',
  endDateTime: '2018-10-27T23:59:59Z',
  size: 1,
})
// .then((res) => {
//   console.log(res.data._embedded.events)
//   console.log(res.data._embedded.events[0].dates)
// })