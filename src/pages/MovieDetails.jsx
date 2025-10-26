import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { dummyDateTimeData, dummyShowsData } from "../assets/assets";
import { HeartIcon, PlayCircleIcon, StarIcon } from "lucide-react";
import timeFormat from "../lib/TimeFormate";
import DateSelect  from "../component/DateSelect";
import MovieCard from "../component/MovieCard";
import Loading from "../component/Loading";
 const MovieDetails=()=>{

 const navigate= useNavigate();
    const{ id }=useParams()
    const[show,setShow]=useState(null)

    const getShow= async ()=>{
        const show= dummyShowsData.find(show => String(show._id)===String(id));

        if(show){
            setShow({
            movie:show,
            dateTime: dummyDateTimeData
        })
        }
    }

    useEffect(()=>{
        getShow();
    },[id])
    return show ?(
        <div className="px-6 md:px-16 lg:px-36 xl:px-44 py-10 md:pt-50">

         <div className="flex flex-col md:flex-row gap-10 max-w-6xl mx-auto">

             <img 
             src={show.movie.poster_path}
             alt=""
             className="max-md:mx-auto rounded-xl h-104 max-w-70 object-cover" />
            
            <div className="relative flex flex-col  gap-4">
                <p className="text-white">ENGLISH</p>
                <h1 className="text-4xl font-semibold max-w-96 text-balance">
                    {show.movie.title}
                </h1>
               
                <div className="flex items-center gap-2 mt-3 text-gray-400">
                    <StarIcon className="w-5 h-5 text-primary fill-primary "/>
                    {show.movie.vote_average.toFixed(1)} User Rating
                </div>

                <p className="text-gray-300 mt-6 max-w-lg text-sm leading-tight">
                    {show.movie.overview}
                </p>

                <p>
                    {timeFormat(show.movie.runtime)} | {new Date(show.movie.release_date).getFullYear()} | {show.movie.genres.slice(0,3).map(genre=>genre.name).join(' , ')}
                </p>

                <div className="flex items-center flex-wrap gap-8 mt-6">
                    <button onClick={""} className="flex items-center gap-2 bg-primary text-black px-4 py-2 rounded-lg hover:bg-primary/80 cursor-pointer font-semibold active:scale-95 transition">
                        <PlayCircleIcon className="w-5 h-5"/>
                        Watch Trailer
                        </button>
                    <a href="#dateSelect" className=" flex gap-2 bg-primary text-black hover:bg-primary-dull cursor-pointer px-4 py-2 font-semibold active:scale-95 transitio rounded-lg">Buy Tickets</a>
                    <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                        <HeartIcon className='w-5 h-5'/>
                    </button>
                
                </div>

            </div>

         </div>

           <p className="text-lg font-medium mt-20 semi-bold">Movie Cast</p>

           <div className="mt-4 flex gap-4 overflow-x-auto no-scrollbar">

            <div className="flex item-center gap-4 w-max px-4 ">
                {show.movie.casts.slice(0,12).map((cast,index)=>(
                    <div key={index} className="flex flex-col gap-2 min-w-max items-center text-center">
                        <img src={cast.profile_path} alt="" className="w-16 h-16 rounded-full object-cover"/>
                        <p>{cast.name}</p>

                    </div>
                    

                ))}

            </div>

           </div>
           <div className="mt-40">
            <DateSelect dateTime={show.dateTime} id={id}/>
           </div>
           <p className="text-lg font-medium font-bold mt-20 mb-8">You May Also Like</p>
           <div className="flex flex-warp max-sm:justify-center gap-8">
            {
                dummyShowsData.slice(0,4).map((movie,index)=>(
                    <MovieCard key={index} movie={movie} />
                ))
            }

           </div >

           <div className="flex justify-center mt-20">
                <button onClick={()=> {navigate('/movies');scrollTo(0,0)}} className="px-8 py-3 rounded-lg bg-primary text-black font-semibold hover:bg-primary-dull
                active:scale-95 transition cursor-pointer"> 
                    Show More

                </button>
           </div>
        </div>
    ):
    (
    
             <Loading/>
        
    )
 }

 export default MovieDetails