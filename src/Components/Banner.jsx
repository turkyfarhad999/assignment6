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
        </div>
    );
};

export default Banner;