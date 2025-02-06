import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaPinterest } from "react-icons/fa";
import Link from 'next/link';

const footer2 = () => {
  return (
    <div>
      <div className="w-[100%] h-[80px] flex justify-around items-center border-gray-700 bg-[#4F4F4F] ">
        <div className="flex justify-center align-center">
        <p className="text-white text-sm">
        Copyright © 2022 by Ayeman. All Rights Reserved.
        </p>
        </div>
        <div className="flex gap-2 justify-center align-center">
        <Link href="#"><FaFacebookF className="bg-white hover:text-[#FF9F0D] h-6 w-6 px-1 py-1 flex justify-center items-center"/></Link>
        <Link href="#"><FaTwitter className="bg-white hover:text-[#FF9F0D] h-6 w-6 px-1 py-1 flex justify-center items-center"/></Link>
        <Link href="#"><FaInstagram className="bg-white hover:text-[#FF9F0D] h-6 w-6 px-1 py-1 flex justify-center items-center"/></Link> 
        <Link href="#"><FaYoutube className="bg-white hover:text-[#FF9F0D] h-6 w-6 px-1 py-1 flex justify-center items-center"/></Link>
        <Link href="#"><FaPinterest className="bg-white hover:text-[#FF9F0D] h-6 w-6 px-1 py-1 flex justify-center items-center"/></Link>
        </div>
        </div>
    </div>
  )
}

export default footer2
