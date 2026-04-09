import React, { use, useState } from 'react';
import Card from './Card';
import Cart from './Cart';

const Cardholder = ({data}) => {
    const cards=use(data);
    const [option , setOption]=useState(true)
    const [temp,setTemp]=useState([]);
    const [sum,setSum]=useState(0);
   
   
    return (
        <div className='max-w-[80%] mx-auto py-6 space-y-5'>
            <h1 className='text-5xl font-bold text-center'>Premium Digital Tools</h1>
            <p className=' text-center font-semibold'>Choose from our curated collection of premium digital products designed <br />
to boost your productivity and creativity.</p>
<div className='flex justify-center items-center'>
    <button onClick={()=>{setOption(true)}} className={`btn rounded-l-[40px] ${option===true?'btn-primary':'btn-active'}`} >Products</button>
    <button onClick={()=>{setOption(false)}} className={`btn rounded-r-[40px] ${option===false?'btn-primary':'btn-active'}`}>Carts ({temp.length})</button>
</div>
          <div className='grid grid-cols-3 gap-4'>  {option===true?cards.map(card=><Card card={card} setTemp={setTemp} temp={temp} setSum={setSum} sum={sum}></Card>):(<Cart temp={temp} setSum={setSum} sum={sum} setTemp={setTemp}></Cart>)}</div>
        </div>
    );
};

export default Cardholder;