import React from 'react';
import Empty from './Empty';
import NotEmpty from './NotEmpty';
const Cart = ({temp,sum,setSum,setTemp,setCount}) => {
    return (
        <div className='md:col-span-3'>
            {temp.length!==0?<NotEmpty temp={temp} setSum={setSum} sum={sum} setTemp={setTemp} setCount={setCount}></NotEmpty>:<Empty></Empty>}
        </div>
    );
};

export default Cart;