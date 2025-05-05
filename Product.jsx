import React from 'react'
import ProductCard from '../layouts/ProductCard'
import image01 from "../assets/product1.jpg"
import image02 from "../assets/product2.jpg"
import image03 from "../assets/product3.jpg"

const Product = () => {
  return (
    <div className='min-h-screen flex  flex-col justify-center lg:px-32 px-5 bg-secondary '>
      <h1 className='font-semibold text-center text-6xl lg:mt-14  lg:py-9 mt-02 mb-8  border-b-4 border-black'>Our Products</h1>

      <div className='flex flex-col justify-center lg:flex-row gap-5 sm:flex-row sm:flex-wrap '>
        <ProductCard image={image01} title="Nespresso"/>
        <ProductCard image={image02} title="Aero"/>
        <ProductCard image={image03} title="Chemex"/>
        <ProductCard image={image01} title="Nespresso"/>
        <ProductCard image={image02} title="Aero"/>
        <ProductCard image={image03} title="Chemex"/>
        
      </div>
      
    </div>
  )
}

export default Product
