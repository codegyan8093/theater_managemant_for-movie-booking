import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { assets, dummyShowsData } from "../assets/assets";
import { dummyDateTimeData } from "../assets/assets";
import Loading from "../component/Loading";
import { ArrowRightIcon, ClockIcon } from "lucide-react";
import isoTimeFoemat from "../lib/isoTimeFormat";
import { toast } from 'react-hot-toast';


const SeatLayout=()=>{
   const groupRows=[["A",'B'],["C","D"],["E","F"],["G","H"],["I","J"]]
   
   const {id,date}= useParams()

   const[selecetedSeats, setSelectedSeats]=useState([])
   const[selecetedTime, setSelectedTime]=useState(null)
   const [show,setShow]=useState(null)
   
   const navigate=useNavigate()


   const getShow =async()=>{
     
      const show=dummyShowsData.find(show => show._id == id)
      if(show){
        setShow({
            movie:show,
            dateTime: dummyDateTimeData
        })
      }
   }
   //  const handleSeatClick=(seatId)=>{
   //    if(!selecetedTime){
   //       return toast("please select the time first")
   //    }
   //    if(selecetedSeats.includes(seatId) && selecetedSeats.length >4){
   //       return toast("You can select maximum 5 seats")

   //    }
   //    setSelectedSeats(prev=> prev.includes(seatId) ? prev.filter(seat=> seat !== seatId) : [...prev,seatId])

   //  }

   const handleSeatClick = (seatId) => {
  if (!selecetedTime) {
    return toast("Please select the time first");
  }

  // If seat is already selected, deselect it
  if (selecetedSeats.includes(seatId)) {
    setSelectedSeats(prev => prev.filter(seat => seat !== seatId));
  } 
  // If seat is not selected and user already selected 4 seats
  else if (selecetedSeats.length >= 4) {
    toast("You can select a maximum of 4 seats");
  } 
  // Else, add the seat
  else {
    setSelectedSeats(prev => [...prev, seatId]);
  }
};


     

    const  renderSeats=(row,count=9)=>(
      <div key={row} className="flex gap-2 mt-2">
         <div className="flex flex-wrap items-center justify-center gap-2">
            {Array.from({length:count},(_,i)=>{
               const seatId= `${row}${i+1}`;
               return(
                  <button key={seatId} onClick={()=> handleSeatClick(seatId)} 
                  className={`w-8 h-8  rounded-sm text-sm border border-primary/60
                  curser-pointer ${selecetedSeats.includes(seatId) && "bg-primary text-white"}`}>
                     {seatId}

                  </button>
               );

            })}

         </div>

      </div>
    )
     


     useEffect(()=>{
        getShow()
     },[])

    return show ?(
        <div  className="flex flex-col md:flex-row gap-x-30 px-6 md:px-16 lg:px-40 py-30 md:pt-50">
             {/* available Timing */}
             <div className="w-60 bg-primary/10 border border-primary/20  rounded-lg
             py-10 h-max md:sticky md:top-30">
                <p className="text-white font-semibold text-lg px-6"> Available Timings</p>
                <div className="mt-5 space-y-2 overflow-hidden">
                    {show.dateTime[date].map((item) =>
                    (
                      <div  key={item.time } onClick={()=> setSelectedTime(item)} className={`flex items-center gap-2 px-6 py-4 w-max rounded-r-md cursor-pointer transition 
                      ${selecetedTime?.time === item.time ? "bg-primary text-white" : "hover:bg-primary/20"}`}>
                         <ClockIcon className="w-5 h-5 text-primary inline-block mr-2"/>
                         <p className="text-sm">{isoTimeFoemat(item.time) }</p>
                      </div>
                    ))}
                </div>
                   
             </div>


                    {/* seat layout */}
                    <div className="relative flex-1 flex flex-col items-center max-md:mt-16">
                     <h1 className="text-2xl font-semibold mb-4">Select your seat</h1>
                     <img src={assets.screenImage} alt="screen" />
                     <p className="text-gray-400 text-sm mb-6 ">SCREEN SIDE</p>

                     <div className="flex flex-col items-center mt-10 text-sm text-gray-600  ">
                        <div className="grid grid-cols-1  gap-8 md:gap-2 mb-6">
                           {groupRows[0].map(row=> renderSeats(row))}
                        </div>
                        <div className="grid grid-cols-2 gap-11">
                        {groupRows.slice(1).map((group,idx)=>(
                           <div key={idx}>
                              {group.map(row => renderSeats(row))}
                           </div>
                        ))}

                     </div>
                     </div>

                     < button  onClick={()=>navigate('/my-bookings')} className="flex item-center gap-3 mt-20 px-10 py-3 text-sm bg-primary hover:bg-primary-dull
                     transition rounded-full font-medium curser-pointer active:scale-95">
                        Press To Chackout
                        <ArrowRightIcon strokeWidth={3} className="w-4 h-4"/>
                     </button>
                     </div>

                     








             </div>

                
                             
                 
    ):
    (
        <Loading />
    )
}

export default SeatLayout ;