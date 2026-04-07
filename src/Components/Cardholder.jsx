import React, { use, useState } from 'react';
import Card from './Card';

const Cardholder = ({data}) => {
    const cards=use(data);
    const [option , setOption]=useState(true)
    console.log(cards)
    return (
        <div className='max-w-[80%] mx-auto py-6 space-y-5'>
            <h1 className='text-5xl font-bold text-center'>Premium Digital Tools</h1>
            <p className=' text-center font-semibold'>Choose from our curated collection of premium digital products designed <br />
to boost your productivity and creativity.</p>
<div className='flex justify-center items-center'>
    <button onClick={()=>{setOption(true)}} className={`btn rounded-l-[40px] ${option===true?'btn-primary':'btn-active'}`} >Products</button>
    <button onClick={()=>{setOption(false)}} className={`btn rounded-r-[40px] ${option===false?'btn-primary':'btn-active'}`}>Carts</button>
</div>
            {cards.map(card=><Card card={card}></Card>)}
        </div>
    );
};

export default Cardholder;