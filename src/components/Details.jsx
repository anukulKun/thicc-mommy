import React from 'react'
import { Link } from 'react-router-dom'

function Details() {
  return (
    <div className='w-[70%] items-center flex justify-between gap-10  h-full p-[10%] m-auto'>

        <img className='object-contain w-[50%] h-[70%]' src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="" />
        <div className='content '>
            <h1 className='text-4xl'>Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</h1>
            <h3 className='text-zinc-400 my-5'> men's clothing</h3>
            <h1 className='text-red-400 mb-3'>109.95</h1>
            <p className='mb-[5%]'>Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday</p>
        
        <Link className=" mr-3 py-2 px-4 border rounded border-blue-200 text-blue-400" >Edit</Link>
            <Link className="py-2 px-4 border rounded border-red-200 text-red-400">Delete</Link>


        </div>
      
    </div>
  )
}

export default Details
