import React from 'react'

const Footer = () => {
  return (
    <div className='bg-gradient-to-r from-[#FFDACB] to-[#AB6B2E] text-black rounded-t-3xl mt-8 md:mt-0'>
      <div className='flex flex-col md:flex-row justify-between p-8 md:px-32 px-5' >
        <div className='w-full md:w-1/4'>
            <h1 className='font-semibold text-xl pb-4 text-primary'><b><i>BrewLogy</i></b></h1>
            <p className='text-sm'>Welcome to our coffee heaven! Explore our aromatic brews, Saver artisanal flavors ,and discover the perfect roas to elevate your daily ritual</p>
        </div>
        <div>
            <h1 className='font-medium text-xl pb-4 pt-5 md:pt-0'>Links</h1>
            <nav className='flex flex-col gap-2'>
                <a className='hover:text-primary transition-all cursor-pointer ' href="/menu">Menu</a>
                <a className='hover:text-primary transition-all cursor-pointer ' href="/about">About Us</a>
                <a className='hover:text-primary transition-all cursor-pointer ' href="/products">Products</a>
                <a className='hover:text-primary transition-all cursor-pointer ' href="/reviews">Reviews</a>
                
            </nav>
        </div>
        <div>
            <h1 className='font-medium text-xl pb-4 pt-5 md:pt-0'>Menu</h1>
            <nav className='flex flex-col gap-2'>
                <a className='hover:text-primary transition-all cursor-pointer ' href="/">Cappuccino</a>
                <a className='hover:text-primary transition-all cursor-pointer ' href="/">Latte</a>
                <a className='hover:text-primary transition-all cursor-pointer ' href="/">Americano</a>
                
            </nav>
        </div>
        <div>
            <h1 className='font-medium text-xl pb-4 pt-5 md:pt-0'>Contact Us</h1>
            <nav className='flex flex-col gap-2'>
                <a className='hover:text-primary transition-all cursor-pointer ' href="/">brewlogy@example.com</a>
                <a className='hover:text-primary transition-all cursor-pointer ' href="/">+1223 897 456</a>
                <a className='hover:text-primary transition-all cursor-pointer ' href="/">Social media</a>                
            </nav>
        </div>
      </div>
        <div>
            <p className='text-center py-4 font-semibold'>@copyright developed by
                <span className='text-secondary font-semibold'>   | Ojasvi Rastogi |</span>
               <br /> All rights reserved
                
            </p>
        </div>
    </div>
  )
}

export default Footer
