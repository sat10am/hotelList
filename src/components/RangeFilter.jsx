import 'react-input-range/lib/css/index.css'

import React, { useState } from 'react'
import InputRange from 'react-input-range'

function RangeFilter({label, htmlFor, minValue, maxValue, step, width, height, padding = 20, onChange, formatLabel, value }) {
  return (
    <div style={{ height, width, padding}}>
    <label htmlFor={htmlFor}>{label}</label>
      <div style={{marginTop: '20px'}}>
        <InputRange
          style={{marginTop: '20px'}}
          minValue={minValue}
          maxValue={maxValue}
          value={value}
          step={step}
          formatLabel={formatLabel}
          onChange={onChange}
        />
      </div>
    </div>
  )
}

export default RangeFilter;