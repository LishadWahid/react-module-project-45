import React from 'react';
import bookImage from '../../assets/books.jpg'

const Banner = () => {
    return (
        <div className='border-2 border-green-500 max-w-[1140px] h-[554px] bg-[#1313130d] flex justify-around items-center p-5'>
           <div className='flex flex-col  gap-8 items-start p-20'>
                <h1 className='text-5xl'>Books to freshen up your bookshelf</h1>
                <button className='btn btn-primary p-5'>View The List</button>
            </div>
            <div>
                <img className='pr-20' src={bookImage} alt="" />
            </div> 
        </div>
    );
};

export default Banner;