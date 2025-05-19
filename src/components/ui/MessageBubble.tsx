function MessageBubble() {
  return (
    <div className="mt-5">
      <div className="flex items-center gap-2">
        <img
          src="https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg?semt=ais_hybrid&w=740"
          alt=""
          className="size-5 rounded-full"
        />
        <div>
          <p className="text-sm">
            siam hasan{' '}
            <span className="dark:text-gray-500 text-gray-800 text-[.6rem]">at 5.20 pm</span>
          </p>
        </div>
      </div>
      <div className="p-5 bg-primary mt-3 ml-10 size-fit max-w-[200px] md:max-w-[300px] rounded-lg  relative ">
         <p className=" text-sm md:text-[1rem]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, officiis.</p>
        <div className="absolute w-0 h-0  -left-5 -top-5  border-r-transparent border-l-transparent  border-r-[25px] border-l-[25px]  border-b-[50px]  border-b-primary rotate-[-40deg] -z-1"></div>
      </div>
    </div>
  );
}

export default MessageBubble;
