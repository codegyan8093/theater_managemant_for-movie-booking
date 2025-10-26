import React from 'react';

import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { dummyShowsData } from '../assets/assets';
import MovieCard from './MovieCard';


const FeaturedSection =() =>{

    const navigate=useNavigate()
    const shows = Array.isArray(dummyShowsData) ? dummyShowsData : [];

    return(
        <div className='px-6 md:px-16 lg:px-24 xl:px-44 overflow-hidden'>

            <div className='relative flex items-center justify-between
            pt-16 pb-8'>
            <p className='text-gray-300 font-medium text-lg'>Now Showing</p>
                <button onClick={() => navigate('/Movies')}className='group flex items-center gap-2 text-sm text-gray-300 cursor-pointer'>
                    View ALL
                    <ArrowRight className='w-4 h-4 group-hover:translate-x-0.5 transition'/>
                </button>
            </div>

            <div className='flex flex-wrap max-sm:justify-center gap-8'>
                {shows.slice(0,4).map((show)=>(
                    <MovieCard key={show._id} movie={show}/>
            ))}
                

            </div>

            <div className='flex justify-center mt-20'>
                <button onClick={() => {navigate('/Movies');scrollTo(0, 0)}}
                className='px-10 py-3 text-sm bg-primary hover:bg-primary-dull
                transition rounded-full text-black font-medium cursor-pointer'> Show More</button>

            </div>

        </div>
        )
}

export default FeaturedSection;