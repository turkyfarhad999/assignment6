import React from 'react';

const Empty = () => {
    return (
        <div className=' space-y-5  text-left shadow-2xl rounded-r-4xl p-5 md:p-10' >
           <h1 className='font-bold text-2xl'>Your cart</h1> 
           <div className='space-y-5 m-20 text-center' >
             <i class="fa-solid fa-cart-shopping text-9xl"></i>
             <p>Your Cart is empty</p>
           </div>
        </div>
    );
};

export default Empty;