import React from 'react'
 import image01 from "../assets/hero.png"
import Button from "../layouts/Button"

const Home = () => {
  return (
    <div className='min-h-screen flex flex-col justify-center lg:flex-row lg:justify-between items-center lg:px-32 gap-10 bg-gradient-to-r from-[#FFDCAB] to-[#AB6B2E]'>
      <div className='w-full lg:w-2/4 space-y-4 mt-14 lg:mt-0'>      
      <h1 className='font-semibold text-8xl text-center lg:text-start leading-tight'>Start your day with a streaming cup of coffee</h1>
       <p>Boost your productivity and build your mood with a glass of coffe in the morning</p>
      <div className='flex gap-4'>
        <Button title="ADD TO CARD"/>
        <Button title="MORE MENU"/>
      </div>
      </div>
      <div className='relative'>
        <img className='h-[530px]' src={image01} alt="" />
        <div className='absolute bg-white px-8 py-2 top-5 right-0 rounded-full shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]'>
          <h2 className='  font-semibold '>14K</h2>
        </div>
        <div className='absolute bg-white px-8 py-2 bottom-0 left-7 rounded-full'>
          <h2 className='  font-semibold '>Cappuccino</h2>
        </div>

      </div>
      
    </div>
  )
}

export default Home
