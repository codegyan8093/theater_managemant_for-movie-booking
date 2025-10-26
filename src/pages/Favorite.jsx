import React from "react";
import { dummyShowsData } from "../assets/assets";
import MovieCard from "../component/MovieCard";




 const Favorite=()=>{
    return dummyShowsData.length > 0 ?(
        <div className="relative my-40 mb-60 px-6 md:px-16 lg:px-40 xl:px-44
        overflow-hidden min-h-[80vh]">
        
             <h1 className="text-ig font-medium  my-4">Your Favorite Shows</h1>
             <div className="flex flex-wrap gap-8 max-sm:justify-center">
                {dummyShowsData.map((movie)=>(
                <MovieCard movie={movie} key={movie._id}/>
                ))}
            
             </div>
        </div>
    ) :(
        <div>
            <h1>no movie avilable</h1>
        </div>
    )
}
    
 

 export default Favorite