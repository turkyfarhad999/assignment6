import React from 'react';
// {
//     "id": 6,
//     "title": "Social Media Content Kit",
//     "badge": "Best Seller",
//     "image": "/social-media.png",
//     "description": "Complete toolkit for creating engaging social media content across all platforms.",
//     "price": "$39",
//     "billing_cycle": "Mo",
//     "features": ["5000+ assets", "Scheduler included", "Analytics dashboard"]
//   }
 
const Card = ({card,setTemp,temp,sum,setSum}) => {
    
    const buyNow=()=>{
     const arr=[...temp,card]
      setTemp(arr)
      console.log(card.price)
      setSum(sum+Number(card.price))
      console.log(sum)
      
    }
    return (
        <div className='flex flex-col justify-center shadow-2xl rounded-2xl p-5 relative h-full'>
             <div className='absolute top-2 right-4'>new</div>
            <div className='space-y-1.5 mt-6'> 
              
               <img src={card.image} alt="" className='rounded-2xl p-1.5' /> 
               <p className='text-2xl font-semibold'>{card.title}</p>
               <p>{card.description} </p>
               <p className='text-2xl font-semibold'>{card.price}$<span className='text-[18px] font-normal'>/{card.billing_cycle}</span></p>
               <ul>
               {card.features.map(da=><li><i class="fa-solid fa-check" style={{color: "#16f522"}}></i>{da}</li>)}

               </ul>
                 <button onClick={()=>{
                    buyNow()
                 }} className='btn btn-primary w-[100%] rounded-3xl'> buy now</button>
            </div>
        </div>
    );
};

export default Card;