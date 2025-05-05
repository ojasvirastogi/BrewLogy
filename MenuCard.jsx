import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const MenuCard = (props) => {
  return (
    <div className='w-full lg:w-1/4 bg-white p-3 rounded-lg sm:w-[280px]'>
      <div>
        <img className='rounded-xl items-center sm:h-[240px] ' src={props.image} alt="" />
      </div>
      <div className='p-2 mt-5'>
        <div className='flex justify-between'>
            <h3 className='font-semibold text-xl '>{props.title}</h3>
            <h3 className='font-semibold text-xl'>{props.value}</h3>
        </div>
        <div className='flex justify-between mt-3'>
            <div className='flex gap-2'>
                <button className='px-3 text-md border-2 border-primary bg-secondary hover:text-primary transition-all rounded-xl'>Hot</button>
                <button className='px-3 text-md border-2 border-primary bg-secondary hover:text-primary transition-all rounded-xl'>Cold</button>
                
            </div>
           <span className='flex items-center bg-secondary px-3 py-2 rounded-full cursor-pointer'>
           <ShoppingCartIcon style={{ fontSize: 30 }}/></span>
        </div>
      </div>
    </div>
  )
}

export default MenuCard
