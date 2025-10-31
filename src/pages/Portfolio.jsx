import React from 'react';
import Image1 from '../img/portfolio/1.png'
import Image2 from '../img/portfolio/2.png'
import Image3 from '../img/portfolio/3.png'
import Image4 from '../img/portfolio/4.png'
import Image5 from '../img/portfolio/5.png'

import { Link } from 'react-router-dom'

const Portfolio = () => {
  return <section className='section'>
    <div className='container mx-auto h-full relative'>
      <div className='flex flex-col lg:flex-row h-full items-center justify-start gap-x-24 text-center lg:text-left pt-24 lg:pt-36 pb-8'>
        <div className='flex flex-col lg:flex-row h-full items-center justify-center gap-x-24 text-center lg:text-left lg:pt-16'>
          <div className='flex flex-col lg:items-start'> 
            <h1 className='h1'> Portfolio </h1>
            <p className='mb-12 max-w-sm'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <Link to={'./contact'} className='btn mb-[30px] mx-auto lg:mx-0'>
              Hire meß
            </Link>
          </div>
        </div>
        <div className='grid grid-cols-2 lg:gap-2'> 
          <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
            <img src={Image1} className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500'></img>
          </div>
          <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
            <img src={Image2} className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500'></img>
          </div>
          <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
            <img src={Image3} className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500'></img>
          </div>
          <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
            <img src={Image4} className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500'></img>
          </div>
        </div>
      </div>
    </div>
  </section>;
};

export default Portfolio;
