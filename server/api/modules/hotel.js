const ApiService = require('../index');

require('dotenv').config();

const hotelAPi = {
  getHotels(qs) {
    return ApiService.get(`${process.env.HOTEL_BASE_URL}/hotels?${qs}`);
  }
};

module.exports = hotelAPi;
