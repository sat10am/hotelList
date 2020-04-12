import 'react-input-range/lib/css/index.css';
import React, { useState, useEffect } from 'react';
import styled, {css} from 'styled-components'
import colors from '../../styles/colors'
import HotelFilters from '../../components/HotelFilters.jsx';
import HotelList from '../../components/HotelList.jsx';
import hotelApi from '../../api/modules/hotel'

const HotelPageWrapper = styled.div`
  display: flex; 
  justify-content: space-between;
  min-height: 100vh;
  background-color: ${colors.gray[2]};
  padding: 24px 48px;
`;

export default function HotelListPage() {

  const [searchParams, setSearchParams] = useState({
    PRICE: {
      min: 0,
      max: 1000000,
    },
    'REVIEW-SCORE': {
      min: 0,
      max: 10,
    },
    FREE: []
  });
  const [hotelList, setHotelList] = useState([]);

  async function getHotels() {
    const response = await hotelApi.getHotels()
    console.log(response)
  }

  useEffect(() => {
    getHotels()
  }, [])


  return (
    <HotelPageWrapper>
      <HotelFilters title="필터" />
      <HotelList/>
    </HotelPageWrapper>
  )
}
