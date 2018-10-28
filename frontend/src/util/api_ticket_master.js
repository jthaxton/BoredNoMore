// https://developer.ticketmaster.com/products-and-docs/apis/discovery-api/v2/#event-details-v2

const axios = require('axios');
const Geohash = require('latlon-geohash');
const apiKeyTicketMaster = require("./keys").apiKeyTicketMaster;

// const ticketMasterIds = require("./api_ticket_master_ids.js")

export const apiTicketMaster = (searchOptions) => {

  // Default query parameters
  const searchDefaults = {
    // latitude: 42.35984802, // Boston, MA
    // longitude: -71.05888367, // Boston, MA
    // latitude: 37.7986717, // San Francisco, CA
    // longitude: -122.4012891, // San Francisco, CA
    radius: 100, // radius in miles

    includeFamily: 'no', // family-friendly?

    size: 25, // how many query results to return
    page: 0, // aka offset
  };

  // Final query params
  const queryParams = Object.assign(searchDefaults, searchOptions);

  // Generate DateTime based on date options input
  const currentDate = new Date().toISOString().slice(0, 10); // 'YYYY-MM-DD'
  const endDateTime = `${currentDate}T23:59:59Z`;
  const onsaleEndDateTime = `${currentDate}T23:59:59Z`;

  // Generate geoPoint parameter based on latitude, longitude
  const geoPoint = Geohash.encode(queryParams.latitude, queryParams.longitude, 3);

  // Generate URL path
  let url = 'https://app.ticketmaster.com/discovery/v2/events.json?';

  url += endDateTime ? `&endDateTime=${endDateTime}` : ''
  url += onsaleEndDateTime ? `&onsaleEndDateTime=${onsaleEndDateTime}` : ''
  url += geoPoint ? `&geoPoint=${geoPoint}` : ''
  url += queryParams.radius ? `&radius=${queryParams.radius}` : ''
  url += queryParams.includeFamily ? `&includeFamily=${queryParams.includeFamily}` : ''
  url += queryParams.size ? `&size=${queryParams.size}` : ''
  url += queryParams.page ? `&page=${queryParams.page}` : ''
  url += queryParams.segmentId ? `&segmentId=${queryParams.segmentId}` : ''
  url += `&apikey=${apiKeyTicketMaster}`

  // console.log(queryParams);
  // console.log(url)

  // Return axios Promise
  return axios({
    method: 'get',
    url: url,
    responseType: 'json'
  })
}

// apiTicketMaster({
//     latitude: 42.35984802,
//     longitude: -71.05888367,

//     // segmentId: ticketMasterIds.Miscellaneous.id,
//     // segmentId: ticketMasterIds.Sports.id,
//     // segmentId: ticketMasterIds.Music.id,
//     // segmentId: ticketMasterIds.ArtsTheatre.id,
//     // segmentId: ticketMasterIds.Film.id,
//   })
//   .then((res) => {
//     console.log(res.data._embedded.events) // Array of events
//   })