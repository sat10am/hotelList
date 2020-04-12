import React, { useState } from 'react'
import styled, {css} from 'styled-components'

const HoteListStyled = styled.ul`
    display: flex; 
    flex-direction: column;
    padding: 40px 0px;
    margin: 0;
`
const HotelListItem = styled.li`
    list-style: none;
    display: flex; 
`
const HotelDetailCard = styled.div`
    display: flex; 
    flex-direction: column;
    padding: 20px;
`

const FlexBoxRow = styled.div`
    display: flex; 
    flex: 1;
    justify-content: space-between;
`

function HotelList({hotelList}) {
  return (
    <HoteListStyled>
        {hotelList.map(hotel => (
            <HotelListItem
              key={hotel.id}
            >
                <div>
                    <img 
                        src={hotel.imageUrl} 
                        width={288}
                        height={192}
                        alt="hotel"
                    />
                </div>
                <HotelDetailCard>
                    <FlexBoxRow>
                        <div style={{minWidth: '50%'}}>
                            {hotel.name}
                        </div>
                        <div>
                            <span style={{marginRight: '15px'}}>{hotel.totalReviewCount}</span>
                            <span>{hotel.reviewScore}</span>
                        </div>
                    </FlexBoxRow>
                    <div>
                        <p>
                            {hotel.freeServices}
                        </p>
                        <p>
                            {hotel.rate}
                        </p>
                    </div>
                </HotelDetailCard>
            </HotelListItem>
        ))}
         
    </HoteListStyled>
  )
}

export default HotelList;