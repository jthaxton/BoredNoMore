const axios = require('axios');
const apiKeyTicketMaster = require("../../../config/keys").apiKeyTicketMaster;
const apiSecretTicketMaster = require("../../../config/keys").apiSecretTicketMaster;

// // export const fetchTicketMaster = () => (
// const fetchTicketMaster = () => (
//   $.ajax({
//     method: 'GET',
//     url: "https://app.ticketmaster.com/discovery/v2/events.json?size=2&geoPoint=txd8bzr&apikey=elVpo7apIVQYzAZxikTRVLfd43PHzikt",
//     async: true,
//     dataType: "json",
//   })
// );

// fetchTicketMaster()
// fetchTicketMaster().then((res) => console.log(res), (res) => console.log(res));


const size = 1;
const geoPoint = '9q8zn9n';

let url = 'https://app.ticketmaster.com/discovery/v2/events.json?';
url += size ? `&size=${size}` : ''
url += geoPoint ? `&geoPoint=${geoPoint}` : ''
url += `&apikey=${apiKeyTicketMaster}`

axios({
    method: 'get',
    url: url,
    responseType: 'json'
  })
  .then((res) => {
    console.log(res.data._embedded.events)
    console.log(res.data._embedded.events[0].dates)
  })