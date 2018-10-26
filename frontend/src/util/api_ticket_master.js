const axios = require('axios');
const Geohash = require('latlon-geohash');
const apiKeyTicketMaster = require("../../../config/keys").apiKeyTicketMaster;
const apiSecretTicketMaster = require("../../../config/keys").apiSecretTicketMaster;

const TMSegmentIds = require("./api_ticket_master_ids.js").segment
const TMGenreIds = require("./api_ticket_master_ids.js").genre

console.log(TMGenreIds.Sports.Basketball);


// https://developer.ticketmaster.com/products-and-docs/apis/discovery-api/v2/#event-details-v2

// export const fetchTicketMaster = (options) => (
const fetchTicketMaster = (options) => {
  // Default query parameters
  const defaults = {
    latitude: 37.7986717, // San Francisco, CA
    longitude: -122.4012891, // San Francisco, CA
    radius: 50, // radius in miles

    includeFamily: 'no', // family-friendly?

    size: 20, // how many query results to return
    page: 0, // aka offset
  };

  // Final query params
  const queryParams = Object.assign(defaults, options);

  // Generate DateTime based on date options input
  const currentDate = new Date().toISOString().slice(0, 10); // 'YYYY-MM-DD'
    const startDateTime = `${currentDate}T00:00:00Z`;
    // const endDateTime = `${currentDate}T23:59:59Z`;
    const endDateTime = `2018-10-30T23:59:59Z`;
    const onsaleEndDateTime = `${currentDate}T23:59:59Z`;

  // Generate geoPoint parameter based on latitude, longitude
  const geoPoint = Geohash.encode(queryParams.latitude, queryParams.longitude, 3);

  // Generate URL path
  let url = 'https://app.ticketmaster.com/discovery/v2/events.json?';

  // url += startDateTime ? `&startDateTime=${startDateTime}` : ''
  url += endDateTime ? `&endDateTime=${endDateTime}` : ''
  // url += onsaleEndDateTime ? `&onsaleEndDateTime=${onsaleEndDateTime}` : ''

  url += geoPoint ? `&geoPoint=${geoPoint}` : ''

  url += queryParams.radius ? `&radius=${queryParams.radius}` : ''

  url += queryParams.includeFamily ? `&includeFamily=${queryParams.includeFamily}` : ''

  url += queryParams.size ? `&size=${queryParams.size}` : ''
  url += queryParams.page ? `&page=${queryParams.page}` : ''

  url += queryParams.segmentId ? `&segmentId=${queryParams.segmentId}` : ''

  url += `&apikey=${apiKeyTicketMaster}`

  console.log(queryParams);
  console.log(url) // temp, take out!

  // Return axios Promise
  // return axios({
  //   method: 'get',
  //   url: url,
  //   responseType: 'json'
  // })
}

fetchTicketMaster({
    // latitude: 42.35984802,
    // longitude: -71.05888367,
    segmentId: 'KZFzniwnSyZfZ7v7na',

    // size: 2, // temp return size
  })
  // .then((res) => {
  //   console.log(res.data._embedded.events) // Array of events
  //   // console.log(res.data._embedded.events[0]._embedded.venues) // Single event's venue
  //   // console.log(res.data._embedded.events[0].dates) // Single event's date
  // })