import React from 'react';
import banner from '../assets/banner.png'

const Banner = () => {
    return (
        <div>
          <div className="hero bg-base-200 min-h-screen max-w-[80%] mx-auto bg-white mt-5  ">
  <div className="hero-content flex-col lg:flex-row-reverse gap-10 ">
    <img
      src={banner}
      className="max-w-[50%] rounded-2xl "
    />
    <div>
        <div className="flex items-center">
      <button className="flex items-center gap-2.5 px-5 py-2 rounded-full bg-[#E8EDFF] border border-[#D1D9FF] hover:bg-[#DEE5FF] ">
        
        
       
      
        <span className="text-[#7C3AED] font-semibold text-sm sm:text-base">
         <i class="fa-solid fa-circle  "></i> New: AI-Powered Tools Available
        </span>
      </button>
    </div>
      <h1 className="text-5xl font-bold text-[#101727]">Supercharge Your <br />
Digital Workflow</h1>
      <p className="py-6">
       Access premium AI tools, design assets, templates, and productivity <br />

software—all in one place. Start creating faster today. <br />


Explore Products    
      </p>
      <div className='flex gap-2'><button className="btn btn-primary rounded-4xl text-white font-semibold bg-gradient-to-r font-bold from-[#4f39f6] to-[#9514fa]">Get Started</button>
      <button className="btn   rounded-4xl border border-2 border-[#9514fa] "> <p className='text-[#9514fa]'><i class="fa-solid fa-play"></i> Watch Demo</p></button></div>
    </div>
  </div>
</div>  
    <div className='bg-gradient-to-r font-bold from-[#4f39f6] to-[#9514fa] grid grid-cols-3 text-white'>
       <div className='flex justify-center items-center flex-col py-14'>
        <h1 className='text-6xl'>50k+</h1>
        <p className='text-2xl'>Active Users</p>
       </div>
       <div className='flex justify-center items-center flex-col'>
        <h1 className='text-6xl'>200k+</h1>
        <p className='text-2xl'>Premium Tools</p>
       </div>
       <div className='flex justify-center items-center flex-col'>
        <h1 className='text-6xl'>4.9</h1>
        <p className='text-2xl'>Rating</p>
       </div>
    </div>
        </div>
    );
};

export default Banner;