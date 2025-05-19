import React from 'react';

function OwnMessageBubble() {
  return (
   <div className='mt-5  flex justify-end'>
     <div className=''>
      <p className="text-sm text-end">
        By me <span className="dark:text-gray-500 text-gray-800 text-[.6rem]">at 5.20 pm</span>
      </p>
      <div className=" p-3 md:p-5  bg-pink-700 mt-3 mr-10   size-fit max-w-[200px] md:max-w-[300px] rounded-lg relative ">
        <p className=" text-sm md:text-[1rem] text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, officiis.
        </p>
        <div className="absolute w-0 h-0  -right-5 -top-5  border-r-transparent border-l-transparent  border-r-[25px] border-l-[25px]  border-b-[50px]  border-b-pink-700 rotate-[40deg] -z-1"></div>
      </div>
    </div>
   </div>
  );
}

export default OwnMessageBubble;
