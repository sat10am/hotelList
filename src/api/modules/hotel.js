import fetchApi from '../index.js';

const makeQueryString = (queryObj) => {
  const queryString = Object.keys(queryObj)
    .filter(query => queryObj[query] !== undefined)
    .map(
      query =>
        `${encodeURIComponent(query)}=${encodeURIComponent(queryObj[query])}`
    ).join('&');
  return queryString;
};

const getHotels = (searchParams = {}) => {
  console.log(`/hotels?${makeQueryString(searchParams)}`)
  return fetchApi(`/hotels?${makeQueryString(searchParams)}`);
};

const getHotelPrice = (hotelId) => {
  return fetchApi(`/hotel-price?ids=${hotelId}`)
};

export default {
  getHotels,
  getHotelPrice
}
