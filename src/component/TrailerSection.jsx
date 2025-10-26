import React, { useState } from "react";
import { dummyTrailers } from "../assets/assets";
import {  PlayCircleIcon } from "lucide-react";
import ReactPlayer from "react-player";


const TrailerSection =() =>{

    const [currentTrailer,setCurrentTrailer]=useState(dummyTrailers[0]);
    return(

        <div className="px-6 md:px-16 lg:px-36 xl:px-44 py-10 overflow-hidden">
            <p className="text-gray-300 text-2xl font-semibold max-w-[960px]"> 
                Trailers
            </p>

            <div className="relative mt-6">

                         <iframe
                          width="960"
                          height="540"
                          src={`https://www.youtube.com/embed/${currentTrailer.videoUrl.split('v=')[1]}`}
                              title="YouTube video player"
                               frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                       allowFullScreen
                          ></iframe>
  

                

            </div>

            <div className="group grid grid-cols-4 gap-4 md:gap-8 mt-6 max-w-3xl mx-auto"> 
                {dummyTrailers.map((trailer)=>(
                    <div key={trailer.image} className="relative cursor-pointer group-hover:not-hover:opacity-50
                    hover:-translate-y-1 duration-300 transition max-md:h-60 md:max-h-60
                    " onClick={()=>setCurrentTrailer(trailer)}>


                        <img
                         src={trailer.image}
                          alt="trailer"
                           className="
                        rounded-lg w-full h-full object-cover brightness-60"/>

                        <PlayCircleIcon 
                        strokeWidth={1.6}
                         className="absolute top-1/2
                        left-1/2 w-5 md:w-8 h-5 md:h-12 transform -translate-x-1/2
                        -translate-y-1/2"/>
                    </div>
                ))}

            </div>

        </div>
    )
}



export default TrailerSection;