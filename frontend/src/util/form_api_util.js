import axios from 'axios';

export const getRestaurants = (cuisines) => (
    axios.get('api/restaurants', cuisines)
)


// export const fetchRestaurants = (cuisines) => {
//     return $.ajax({
//         url: 'api/restaurants',
//         method: 'GET',
//         data: { cuisines }
//     })
// }

export const getStreams = (subs) => (
    axios.get('api/streams', subs)
)

// export const fetchStreams = (subs) => {
//     return $.ajax({
//         url: 'api/streams',
//         method: 'GET',
//         data: { subs }
//     })
// }

export const getEvents = (eventTypes) => (
    axios.get('api/events', eventTypes)
)
// export const fetchEvents = (eventTypes) => {
//     return $.ajax({
//         url: 'api/events',
//         method: 'GET',
//         data: { eventTypes }
//     })
// }

export const getMovies = (genres) => (
    axios.get('api/movies', genres)
)
// export const fetchMovies = ( genres ) => {
//     return $.ajax({
//         url: 'api/movies',
//         method: 'GET',
//         data: { genres }
//     })
// }



