import React from 'react';
import ChildImg from '../../assets/img/Child-img.png';
import { RFC_2822 } from 'moment';

const ChildSection = () => {
  return (
    <div
      className="relative flex items-center justify-start bg-center bg-no-repeat bg-contain text-left p-8 m-20 mr-10"
      style={{
        backgroundImage: `url(${ChildImg})`,
        height: '70vh', 
        width: '100%', 
      }}
    >
      <div className="absolute inset-0"></div>
      <main className="px-10 lg:px-14 z-10">
        <div className="text-right">
          <h2 className="text-2xl text-black">Categories</h2>
        </div>
        <p className="mt-3 text-black sm:mt-5 sm:max-w-xl text-6xl text-right">
          Enhance Your Experience
        </p>
        <p className="mt-3 text-yellow-500 sm:mt-5 sm:max-w-xl text-2xl text-right">
          Matching / Fit / comfy
        </p>
        <button className="ml-40 border rounded mt-6 border-black hover:bg-white hover:text-black hover:border-black text-white  bg-black w-44 h-12">
          Shop Now
        </button>
      </main>
    </div>
  );
};

export default ChildSection;
