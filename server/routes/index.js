/* eslint-disable */
const express = require('express');
const hotelApi = require('../api/modules/hotel');

const router = express.Router();

router.get('/hotels', async (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  const { data } = await hotelApi.getHotels(req.query)
  console.log('hotels', data);
  res.status(200).json({
    hotelList: data
  });
  
});

module.exports = router;
