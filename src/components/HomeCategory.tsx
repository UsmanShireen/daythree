import React from 'react'
import { FaCheck } from "react-icons/fa";


const HomeCategory = () => {
  return (
    <main className="w-full h-full flex justify-center items-center mt-[535px] bg-black mb-1">
          <div className="sm:w-full md:w-[85%] sm:p-5 md:p-5 sm:h-auto md:h-[full] flex sm:flex-col md:flex-row sm:justify-start md:justify-center sm:items-start md:items-center bg-black">
            <div className="sm:w-full md:w-[50%] p-4">
              <h3 className="About text-[#FF9F0D] font-bold mt-20">About Us</h3>
              <h1 className="text-white font-bold sm:text-md md:text-3xl lg:text-3xl pt-3">
                <span className="text-[#FF9F0D]">We </span>Create the best
              </h1>
              <h1 className="text-white font-bold sm:text-md md:text-3xl lg:text-3xl ">
                foody product
              </h1>
    
              <div className="text-white mt-6 text-sm font-thin">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                  diam pellentesque bibendum non dui volutpat fringilla bibendum.
                  Urna, elit <br /> augue urna, vitae feugiat pretium donec id elementum.
                  Ultrices mattis <br /> sed vitae mus risus. Lacus nisi, et ac dapibus sit
                  eu velit in <br /> consequat.
                </p>
              </div>
    
              <div className="flex text-white mt-6">
              <FaCheck className="mt-1"/>
              <p className="ml-4"> Lacus nisi, et ac dapibus sit eu velit in consequat.</p>
              </div>
    
              <div className="flex text-white mt-4">
              <FaCheck className="mt-1"/>
              <p className="ml-4">Quisque diam pellentesque bibendum non dui volutpat fringilla </p>
              </div>
    
              <div className="flex text-white mt-4">
              <FaCheck className="mt-1"/>
              <p className="ml-4"> Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              </div>
    
              <button className="bg-[#FF9F0D] hover:bg-yellow-800 sm:hidden md:block sm:px-3 md:px-10 sm:text-sm py-0 text-white rounded-3xl h-12 mt-6">
                Read More
              </button>
            </div>
    
            {/* Image */}
    
            <div className="sm:w-full md:w-[40%] lg:w-[40%] pl-6 justify-center items-center ml-10">
                <div className="">
              <img
                src="HomeMenu1.png"
                alt="Music Speaker"
                className="w-full h-[230px] mt-16 shadow-md"
              />
              </div>
              <div className="grid grid-cols-2 pt-5 gap-5">
              <img
                src="HomeMenu2.png"
                alt="Music Speaker"
                className="w-full h-[150px] shadow-md"
              />
              <img
                src="HomeMenu3.png"
                alt="Music Speaker"
                className="w-full h-[150px] shadow-md"
              />
              </div>
            </div>
          </div>
        </main>
  )
}

export default HomeCategory
