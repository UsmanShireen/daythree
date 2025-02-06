'use Client'

import React from "react";
import Image from "next/image";

const Client = () => {
  return (      
    <div >
     <div className="flex justify-center pt-16">
      <div className="h-[275px] w-[71%] flex flex-col justify-center items-center ml-4 gap-6">
        <div>
            <p className="flex justify-center font-normal text-xs">Partners & Clients</p>
            <h1 className="font-bold text-2xl">We work with the best pepole</h1>
        </div>
        <div className="flex justify-center items-center">
        <Image
          src={"/r-1.png"}
          alt="resturent"
          width={180}
          height={128}
        ></Image>

        <Image
          src={"/r-2.png"}
          alt="resturent"
          width={140}
          height={128}
        ></Image>

        <Image
          src={"/r-3.png"}
          alt="resturent"
          width={120}
          height={128}
        ></Image>

        <Image
          src={"/r-4.png"}
          alt="resturent"
          width={110}
          height={128}
        ></Image>

        <Image
          src={"/r-5.png"}
          alt="resturent"
          width={130}
          height={128}
        ></Image>

        <Image
          src={"/r-6.png"}
          alt="resturent"
          width={100}
          height={128}
        ></Image>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Client;
