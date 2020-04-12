import React, { useState } from 'react'
import RangeFilter from './RangeFilter.jsx';

function HotelFilters({title}) {
  const maxPrice = 1000000;
  const maxRate = 10;

  const [price, setPrice] = useState(maxPrice);
  const [rate, setRate] = useState(maxRate);

  return (
    <section>
      <h1>{title}</h1>
    <div>
      <div>
        <RangeFilter
          label="1박당 요금"
          minValue={0}
          maxValue={maxPrice}
          step={1000}
          value={price}
          formatLabel={value => (value === maxPrice ? '1,000,000+' : value.toString())}
          onChange={value => setPrice(value)}
        />
        <RangeFilter
          label="리뷰점수"
          minValue={0}
          maxValue={maxRate}
          step={1}
          value={rate}
          formatLabel={rate => rate}
          onChange={value => setRate(value)}
        />
      </div>
    <div>
      <h3>시설 정보</h3>
      <form>
        <div>
          <input
          name="free-wifi"
          type="checkbox"
          onChange={value => setRate(value)}
          />
          <label htmlFor="free-wifi">Free Wifi</label>
        </div>
        <div>
          <input
            name="free-parking"
            type="checkbox"
            onChange={value => setRate(value)}
          />
          <label htmlFor="free-parking">Free Parking</label>
        </div>
        <div>
          <input
            name="free-pickup"
            type="checkbox"
            onChange={value => setRate(value)}
          />
          <label htmlFor="free-pickup">Free Airport PickUp</label>
        </div>
      </form>
    </div>
  </div>
  </section>
  )
}

export default HotelFilters;