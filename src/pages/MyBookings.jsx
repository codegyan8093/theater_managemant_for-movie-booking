import React, { useEffect, useState } from "react";
import {dummyBookingData} from "../assets/assets"
import Loading from "../component/Loading";
import timeFormat from "../lib/TimeFormate";
import DateFormate from "../lib/DateFormat";

 const MyBookings=()=>{
    const currency= import.meta.env.VITE_CURRENCY

    const [booking,setBooking]=useState([])
    const [isLoading , setIsLoading]=useState(true)

    const getMyBooking= async ()=>{
        setBooking(dummyBookingData)
        setIsLoading(false)

 }

  useEffect(()=>{
    getMyBooking()
  },[])

    return !isLoading ?(
        <div className="relative px-6 md:px-16 lg:px-40 pt-30 md:pt-40 min-h-[80vh]">
            <h1 className="text-white font-semibold text-md">My Booking</h1>

            {booking.map((item,index)=>(
                <div key={index } className="flex flex-col md:flex-row justify-between 
                bg-primary/8 border border-primary/20 rounded-sm mt-4 p-2 max-w-3xl">
                 <div className="flex flex-col md:flex-row">
                    <picture>
                        <img src={item.show.movie.poster_path}  alt=""className="
                        md:max-w-45 aspect-video h-auto object-cover object-bottom rounded " />
                    </picture>
                    <div className="flex flex-col p-4">
                        <p className="text-lg font-semibold">{item.show.movie.title}</p>
                         <p className="text-sm text-gray-800">{timeFormat(item.show.movie.runtime)}</p>
                         <p className="text-sm text-gray-800 mt-auto">{DateFormate(item.show.showDateTime)}</p>
                    </div>

                 </div>

                 <div className="flex flex-col  md:items-end md:text-right justify-between
                 p-4">
                    <div className="flex items-center gap-4">
                       <p className="text-2xl font-semibold mb-3">{currency}{item.amount}</p> 
                       {!item.isPaid && 
                          <button className="bg-primary px-4 py-2 mb-3
                          text-sm rounded-full font-mediun curser-pointer transition active:scale-95">Pay Now</button>
                       }
                    </div>
                    <div className="text-sm">
                       <p> <span className="text-gray-800">
                            Total Tickets:
                        </span>
                        {item.bookedSeats.length}</p>

                        <p> <span className="text-gray-800">
                            Seats Number:
                        </span>
                        {item.bookedSeats.join(", ")}</p>

                    </div>

                 </div>

                </div>
            ))}
        </div>
    ):
    (
        <Loading/>
    )
 }

 export default MyBookings