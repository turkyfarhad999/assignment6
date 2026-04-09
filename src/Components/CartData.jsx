import React from 'react';

const CartData = ({cartData,sum,setSum,setTemp,temp,setCount}) => {
    
    const removeBtn=()=>{
        setSum(sum-Number(cartData.price))
        const arr=temp.filter(i=>i.title!==cartData.title)
        setTemp(arr);
        console.log(temp);
        setCount(arr.length)

    }
  
   console.log(sum)
    return (
        <div className='flex justify-between items-center'>
            <div className='flex gap-4 justify-center items-center'>
            <div>
                 <img src={cartData.image} alt="" className='flex justify-center items-center w-full'/>
            </div>
             <div>
                <h1 className='font-semibold text-2xl'>{cartData.title} </h1>
                <h1 className='font-semibold'>{cartData.price}$ </h1>
             </div>
            </div>
            <div>
            <button onClick={()=>{
                removeBtn()
            }}  className='btn'>remove</button>
            </div>
        </div>
    );
};

export default CartData;