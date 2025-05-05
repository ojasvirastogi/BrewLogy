import React from 'react'
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarIcon from '@mui/icons-material/Star';

import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

const ReviewCard = (props) => {
  return (
    <div className='flex flex-col w-full lg:w-2/6 bg-white p-3 rounded-lg gap-5'>
      <div className='flex items-center lg:justify-start justify-center '>
        <div className='w-1/4'>
            <img src={props.image} alt="" />
        </div>
        <div className='mx-3'>
            <h2 className='font-semibold text-lg'>{props.title}</h2>
            <div className="flex">
            <StarIcon style={{color:"yellow"}} className='text-primary'/>
            <StarIcon  style={{color:"yellow"}}/>
            <StarIcon  style={{color:"yellow"}}/>
            <StarIcon style={{color:"yellow"}}/>
            <StarHalfIcon  style={{color:"yellow"}}/>
           </div>
        </div>
        <span className='ml-16'>
        <FormatQuoteIcon style={{ fontSize: 100 }}  className="text-secondary ml-4" />
        </span>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad ratione fugiat, voluptates laboriosam necessitatibus libero, vel natus quia at maiores non cum atque voluptatum optio animi illum, pariatur praesentium veniam!
      </p>
    </div>
  )
}

export default ReviewCard
