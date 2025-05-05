import React from 'react'
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import  Button from "../layouts/Button";

const ProductCard = (props) => {
  return (
    <div className='w-full lg:w-1/4  bg-white p-3 rounded-lg sm:w-[260px] '>
      <img className='rounded-lg sm:h-[240px] flex justify-center items-center' src={props.image} alt="img" />

       <div className='flex flex-col items-center mt-5 gap-3' >
        <h2 className='font-semibold text-xl'>{props.title}</h2>
        <div className='flex'>
            <StarIcon style={{color:"yellow"}} className='text-primary'/>
            <StarIcon  style={{color:"yellow"}}/>
            <StarIcon  style={{color:"yellow"}}/>
            <StarIcon style={{color:"yellow"}}/>
            <StarHalfIcon  style={{color:"yellow"}}/>
        </div>   

        <h3 className='font-semibold text-lg'>$15.99</h3> 
        <Button title="ADD" />
        </div> 

    </div>
  )
}

export default ProductCard
