import React, { useState } from 'react'
import StarRatingComponent from "react-star-rating-component";

const Filter =({search,searchRate,keyRate}) => {
    const onStarClick=(nextValue, prevValue) =>{
        searchRate(nextValue);
    }
      
  return (
    <div>
        <input type="text" placeholder='search for film' onChange={(e)=>search(e.target.value)}></input>
            <StarRatingComponent
              name="rate1"
              starCount={5}
              value={keyRate}
              onStarClick={onStarClick}
            />
    </div>
  )
}

export default Filter