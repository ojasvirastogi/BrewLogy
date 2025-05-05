import React from 'react'
import MenuCard from '../layouts/MenuCard'
import image01 from "../assets/menu1.jpg"
import image02 from "../assets/menu2.jpg"
import image03 from "../assets/menu3.jpg"
import image04 from "../assets/menu4.jpg"
import image05 from "../assets/menu5.jpg"
import image06 from "../assets/menu6.jpg"



const Menu = () => {
  return (
    <div className='min-h-screen flex flex-col justify-center lg:px-32 px-5 bg-secondary'>
     <h1 className='font-semibold text-center text-6xl mt-24 mb-8 border-b-4 border-black '>Our Menu</h1>
     <div className='flex flex-wrap pb-8 gap-8 justify-center'>
        <MenuCard image={image01} title="Macciato"/>
        <MenuCard image={image02} title="Expresso"/>
        <MenuCard image={image03} title="Cappuccino"/>
        <MenuCard image={image04} title="Latte"/>
        <MenuCard image={image05} title="Americano"/>
        <MenuCard image={image06} title="Doppio"/>
       

     </div>
    </div>
  )
}

export default Menu
