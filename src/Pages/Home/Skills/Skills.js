import React from "react";

const Skills = () => {
  return (
    <div className="px-4 md:w-1/2 mx-auto" id="skills">
      <h2 className="text-2xl font-bold text-center text-white">My Skills</h2>

      <h1 className="mx-2 pt-2 sm:pt-5 text-white  pt-5 ">
        Html <span className=" text-xs text-yellow-400">90%</span>
      </h1>
      <div className="w-[90%] mt-2 mx-2 h-4 relative rounded-full overflow-hidden">
        <div className=" w-full h-full bg-gray-200 absolute "></div>
        <div className=" h-full bg-yellow-400 sm:bg-green-500 absolute w-[90%]"></div>
      </div>

      <h1 className="mx-2 pt-2 sm:pt-5 text-white  pt-5 ">
        CSS <span className=" text-xs text-yellow-400">85%</span>
      </h1>
      <div className="w-[90%] mt-2 mx-2 h-4 relative rounded-full overflow-hidden">
        <div className=" w-full h-full bg-gray-200 absolute "></div>
        <div className=" h-full bg-yellow-400 sm:bg-green-500 absolute w-[85%]"></div>
      </div>

      

      <h1 className="mx-2 pt-2 sm:pt-5 text-white  pt-5 ">
        JavaScript <span className=" text-xs text-yellow-400">80%</span>
      </h1>
      <div className="w-[90%] mt-2 mx-2 h-4 relative rounded-full overflow-hidden">
        <div className=" w-full h-full bg-gray-200 absolute "></div>
        <div className=" h-full bg-yellow-400 sm:bg-green-500 absolute w-[80%]"></div>
      </div>


      <h1 className="mx-2 pt-2 sm:pt-5 text-white  pt-5 ">
        React <span className=" text-xs text-yellow-400">70%</span>
      </h1>
      <div className="w-[90%] mt-2 mx-2 h-4 relative rounded-full overflow-hidden">
        <div className=" w-full h-full bg-gray-200 absolute "></div>
        <div className=" h-full bg-yellow-400 sm:bg-green-500 absolute w-[70%]"></div>
      </div>


      <h1 className="mx-2 pt-2 sm:pt-5 text-white  pt-5 ">
        MongoDB <span className=" text-xs text-yellow-400">60%</span>
      </h1>
      <div className="w-[90%] mt-2 mx-2 h-4 relative rounded-full overflow-hidden">
        <div className=" w-full h-full bg-gray-200 absolute "></div>
        <div className=" h-full bg-yellow-400 sm:bg-green-500 absolute w-[60%]"></div>
      </div>



    </div>
  );
};

export default Skills;
