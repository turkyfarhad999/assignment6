import React, { useState } from 'react';
import CartData from './CartData';

const NotEmpty = ({temp,sum,setSum,setTemp}) => {
   const clearCart=()=>{
    setTemp([])
    setSum(0)
   }
    // console.log(temp)
    return (
       <div className=' space-y-5  text-left shadow-2xl rounded-r-4xl p-10' >
           <h1 className='font-bold text-2xl'>Your cart</h1> 
          <div>
            {temp.map(cartData=><CartData cartData={cartData} sum={sum} setSum={setSum} temp={temp} setTemp={setTemp} ></CartData>)}
          </div>
          <div className='flex justify-between'>
            <h1 className='text-xl font-semibold'>Total:</h1>
            <h1 className='text-xl font-semibold'>{sum}$</h1>
          </div>
          <button className='w-[100%] btn btn-primary' onClick={()=>{
           clearCart()
          }}>Add to Cart</button>
        </div>
    );
};

export default NotEmpty;