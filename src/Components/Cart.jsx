import React from 'react';
import Empty from './Empty';
import NotEmpty from './NotEmpty';
const Cart = ({temp,sum,setSum,setTemp}) => {
    return (
        <div className='col-span-3'>
            {temp.length!==0?<NotEmpty temp={temp} setSum={setSum} sum={sum} setTemp={setTemp}></NotEmpty>:<Empty></Empty>}
        </div>
    );
};

export default Cart;