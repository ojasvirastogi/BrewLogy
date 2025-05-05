import React from 'react'
import image01 from "../assets/about.jpg"
import Button from "../layouts/Button"
const About = () => {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center lg:px-32 px-5 bg-secondary '>
      <h1 className='font-semibold text-center text-6xl lg:mt-14 mt-24 mb-8 border-b-4 border-black'>  About Us</h1>
      <div className='flex flex-col lg:flex-row items-center gap-5'>
        <div className='w-full lg:w-2/4'>
            <img className='rounded-lg' src={image01} alt="" />
        </div>
        <div className='w-full lg:w-2/4 p-4 space-y-3'>
            <h2 className='font-semibold text-6xl'>What Makes Our Coffee Special?</h2>
            <p className=' pt-[10px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ipsam dicta dolorum error magni qui eos perferendis repudiandae expedita nulla! Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, voluptatibus asperiores. Veniam nulla recusandae cupiditate rem! Architecto, voluptatibus. Laboriosam, incidunt.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur possimus assumenda maiores doloribus qui odio temporibus adipisci ullam at earum?</p>
            
            <Button title="Learn More"/>
        </div>
      </div>
    </div>
  )
}

export default About
