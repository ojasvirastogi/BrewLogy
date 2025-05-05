import React from 'react'
import ReviewCard from '../layouts/ReviewCard'
import image01 from "../assets/pic1.png"
import image02 from "../assets/pic2.png"
import image03 from "../assets/pic3.png"


const Reviews = () => {
  return (
    <div className='min-h-screen flex flex-col justify-center lg:px-32 px-5 bg-secondary'>
      <h1 className='font-semibold text-center text-6xl lg:mt-14 mt-24'>Customer's Reviews</h1>

      <div className='flex flex-col lg:flex-row gap-5 justify-center py-4 my-8 sm:flex-row '>
        <ReviewCard image={image01} title="Olivia Ava"/>
        <ReviewCard image={image02} title="John Deo"/>
        <ReviewCard image={image03} title="Sofia Zoe"/>
      </div>
    </div>
  )
}

export default Reviews
