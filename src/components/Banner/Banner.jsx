import React from 'react';
import bookImage from '../../assets/books.jpg'

const Banner = () => {
    return (
        <div className='max-w-[1140px] md:h-[554px] mx-auto h-auto bg-[#1313130d] flex flex-col md:flex-row justify-around items-center p-5'>
           <div className='flex flex-col  gap-6 items-start p-20'>
                <h1 className='text-5xl'>Books to freshen up your bookshelf</h1>
                <button className='btn btn-primary px-6 py-3 text-base md:text-lg'>View The List</button>
            </div>
            <div>
                <img className='w-full max-w-xs md:max-w-sm md:pr-20 lg:pr-20' src={bookImage} alt="" />
            </div> 
        </div>
    );
};

export default Banner;