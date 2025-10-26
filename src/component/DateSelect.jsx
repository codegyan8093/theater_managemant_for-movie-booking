import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import react, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';


const DateSelect = ({dateTime,id}) => {

  const navigate = useNavigate();

const[selected, setSelected] = useState(null)
const onBookHandler = () =>{
  if(!selected){
    return toast("please select a date" , {className:"toast-error"})
  } 
  navigate(`/movies/${id}/${selected}`)
  scrollTo(0,0)
}

  return (
    <div id='dateSelect' className='mt-10 px-6 md:px-16 lg:px-36 xl:px-44 pb-10'>
        <div className='flex flex-col gap-10  mx-auto md:flex-row items-center justify-between 
        relative p-8 bg-primary/10 border border-primary/20 rounded-xl'>

            <div>
                <p className='text-lg font-semibold'>Choose Date</p>

                <div className='flex items-center gap-6 mt-5 text-sm'>
                  <ChevronLeftIcon width={28}/>
                  <span className='grid grid-cols-3 md:flex flex-wrap md:max-w-lg gap-4'>
                   {Object.keys(dateTime).map((date)=>(
                    <button onClick={()=>setSelected(date)} keys={date} className={`w-14 h-14 rounded flex flex-col items-center justify-center 
                    active:scale-95 transition cursor-pointer
                      ${selected === date ? "bg-primary text-black font-bold"
                         : 
                         "bg-white/10 hover:bg-white/20 border border-primary/70"

                      }`} >


                        <span>{new Date(date).getDate()}</span>
                        <span>{new Date(date).toLocaleString("en-US",
                            {month:"short"} )}</span>


                    </button>
                   ))}
                  </span>
                    <ChevronRightIcon className='rotate-180' width={28}/>
                </div>
            </div>
            <button onClick={onBookHandler} className='bg-primary text-black text-semibold px-8 py-4 mt-6 rounded-xl hover:bg-primary-dull
            active:scale-95 transition cursor-pointer'>Book Now</button>

        </div>

    </div>
  )
}

export default DateSelect