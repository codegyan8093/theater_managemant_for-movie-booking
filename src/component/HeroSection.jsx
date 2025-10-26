import react from 'react';
import { assets } from '../assets/assets';
import {  ArrowRight, CalendarIcon, ClockIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const HeroSection =() =>{

    const navigate=useNavigate()
    return(
        <div className='flex flex-col items-start  justify-center text-center
        gap-6  px-6 md:px-16 lg:px-36 bg-[url("/backgroundImage.png")] bg-cover bg-center h-screen'>

         <img src={assets.marvelLogo} alt="" className='max-h-11 lg:h-11 mt-20'/>  
         <h1 className='text-5xl md:text-[60px] md:leading-18 font-semibold max-w-110'>Guardians <br />of the Galaxy</h1> 
         
         <div className='flex  items-center gap-4 text-gray-300'>
            <span>Action | Adventure |Sci-Fi</span>
            <div className='flex items-center gap-1'>
                <CalendarIcon className='w-4.5 h-4.5'/>2018
            </div>
            <div className='flex items-center gap-1'>
                <ClockIcon className='w-4.5 h-4.5'/>2h 8m
            </div>


         </div>
         <button onClick={()=>navigate('/Movies')}className='flex  items-center gap-2 bg-primary px-6 py-3 rounded-full text-black font-medium hover:bg-primary-dull
         transition duration-300 rounded-full cursor-pointer'>
            Movie Explore
            <ArrowRight className='w-5 h-5'/>
         </button>
         
         </div>


    )
}

export default HeroSection;