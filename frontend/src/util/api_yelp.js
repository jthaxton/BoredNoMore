import axios from "axios";

export const apiYelp = (searchOptions) => (
  axios.get('/api/api_yelp', {
    params: searchOptions}
    )
);