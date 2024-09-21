import {FaQuoteLeft,FaQuoteRight} from 'react-icons/fa'

function Card({review}){

    return(
        <div className='flex flex-wrap flex-col md:relative'>
            <div>
                <img 
                    className='w-[100px] h-[100px] rounded-full absolute top-[-6rem] left-[-2rem] z-20' 
                    src={review.image} 
                />
                <div className='w-[100px] h-[100px] rounded-full bg-violet-700 absolute top-[-104px] left-[-25px] z-10'>
                </div>
            </div>
                <p className='tracking-wider text-lg font-bold capitalize'>{review.name}</p>
            <div  >
                <p className='opacity-50 uppercase text-xs font-semibold'>{review.job}</p>
            </div>

            <div className='text-violet-500 mt-5 mx-auto'>
                <FaQuoteLeft/>
            </div>

            <div className='text-slate-500'>
                {review.text}
            </div>

            <div className='text-violet-500 mt-5 mx-auto'>
                <FaQuoteRight/>
            </div>
            
        </div>
    )
}

export default Card;