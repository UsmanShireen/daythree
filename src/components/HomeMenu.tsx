import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaCheck } from "react-icons/fa";
import { PiHamburgerThin, PiCookieLight, PiWineThin, PiChatDotsLight, PiShareNetworkBold } from "react-icons/pi";
import { AiOutlineLike } from "react-icons/ai";
import Chef from "@/app/Products/Chef";

const HomeMenu = () => {
  return (
    <main className="w-full h-full flex sm:flex-col justify-center items-center mt-[535px] bg-black">
      {/* 1st div */}

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
              Urna, elit <br /> augue urna, vitae feugiat pretium donec id
              elementum. Ultrices mattis <br /> sed vitae mus risus. Lacus nisi,
              et ac dapibus sit eu velit in <br /> consequat.
            </p>
          </div>

          <div className="flex text-white mt-6">
            <FaCheck className="mt-1" />
            <p className="ml-4">
              {" "}
              Lacus nisi, et ac dapibus sit eu velit in consequat.
            </p>
          </div>

          <div className="flex text-white mt-4">
            <FaCheck className="mt-1" />
            <p className="ml-4">
              Quisque diam pellentesque bibendum non dui volutpat fringilla{" "}
            </p>
          </div>

          <div className="flex text-white mt-4">
            <FaCheck className="mt-1" />
            <p className="ml-4">
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
          </div>

          <button className="bg-[#FF9F0D] hover:bg-green-800 sm:hidden md:block sm:px-3 md:px-10 sm:text-sm py-0 text-white rounded-3xl h-12 mt-6">
            Read More
          </button>
        </div>

        {/* Image */}
        {/* 2nd div */}

        <div className="sm:w-full md:w-[40%] lg:w-[40%] pl-6 justify-center items-center ml-10">
          <div className="">
            <img
              src="HomeMenu1.png"
              alt="Tasty Foods"
              className="w-full h-[230px] mt-16 shadow-md"
            />
          </div>
          <div className="grid grid-cols-2 pt-5 gap-5">
            <img
              src="HomeMenu2.png"
              alt="Tasty Foods"
              className="w-full h-[150px] shadow-md"
            />
            <img
              src="HomeMenu3.png"
              alt="Tasty Foods"
              className="w-full h-[150px] shadow-md"
            />
          </div>
        </div>
      </div>

      {/* 3rd div */}

      <div className="sm:w-full md:w-[85%] sm:p-5 md:p-5 sm:h-auto md:h-[full] flex sm:flex-col md:flex-col sm:justify-start md:justify-center sm:items-start md:items-center bg-black">
        <div className="sm:w-full md:w-[50%] p-4 ">
          <h3 className="About text-[#FF9F0D] font-bold mt-20 flex justify-center">
            {" "}
            Food Category
          </h3>
          <h1 className="text-white font-bold flex justify-center sm:text-md md:text-3xl lg:text-3xl pt-3">
            <span className="text-[#FF9F0D]">Ch</span>oose Food Iteam
          </h1>
        </div>

        {/* Image */}

        <div className="sm:w-full md:w-[40%] lg:w-[40%] gap-5 pl-6 pt-5 flex justify-center items-center ml-10">
          <img
            src="Category1.png"
            alt="Tasty Foods"
            className="w-[235px] h-[235px] shadow-md"
          />
          <img
            src="Category2.png"
            alt="Tasty Foods"
            className="w-[235px] h-[235px] shadow-md"
          />
          <img
            src="Category3.png"
            alt="Tasty Foods"
            className="w-[235px] h-[235px] shadow-md"
          />

          <img
            src="Category4.png"
            alt="Tasty Foods"
            className="w-[235px] h-[235px] shadow-md"
          />
        </div>
      </div>

      {/* 4th div */}

      <div className="sm:w-full md:w-[85%] sm:p-5 md:p-5 sm:h-auto md:h-[full] flex sm:flex-col md:flex-row-reverse sm:justify-start md:justify-center sm:items-start md:items-center bg-black">
        <div className="sm:w-full md:w-[50%] p-4 ml-6">
          <h3 className="About text-[#FF9F0D] font-bold mt-16">
            Why Choose us
          </h3>
          <h1 className="text-white font-bold sm:text-md md:text-3xl lg:text-3xl pt-3">
            <span className="text-[#FF9F0D]">Ex</span>tra ordinary taste
          </h1>
          <h1 className="text-white font-bold sm:text-md md:text-3xl lg:text-3xl ">
            And Experienced
          </h1>

          <div className="text-white mt-6 text-sm font-thin">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              diam pellentesque bibendum non dui volutpat fringilla bibendum.
              Urna, elit <br /> augue urna, vitae feugiat pretium donec id
              elementum. Ultrices mattis <br /> sed vitae mus risus. Lacus nisi,
              et ac dapibus sit eu velit in <br /> consequat.
            </p>
          </div>

          <div className="flex text-white gap-5 mt-6">
            <div>
              <div className="w-[60px] h-[60px] bg-[#FF9F0D] rounded-sm flex justify-center items-center">
                <PiHamburgerThin className="text-4xl " />
              </div>
              <p className="text-sm pt-2">Fast Food</p>
            </div>

            <div>
              <div className="w-[60px] h-[60px] bg-[#FF9F0D] rounded-sm flex justify-center items-center">
                <PiCookieLight className="text-4xl " />
              </div>
              <p className="text-sm pt-2 flex justify-center">Lunch</p>
            </div>

            <div>
              <div className="w-[60px] h-[60px] bg-[#FF9F0D] rounded-sm flex justify-center items-center">
                <PiWineThin className="text-4xl" />
              </div>
              <p className="text-sm pt-2 flex justify-center">Dinner</p>
            </div>
          </div>
          <div className="flex pt-4">
            <div className="h-14 w-[10px] rounded-l-md bg-[#FF9F0D]"></div>
            <div className="h-14 w-[210] rounded-r-md bg-white">
              <div className="flex justify-evenly">
                <div className="flex items-center mt-2 text-3xl font-bold text-[#FF9F0D]">
                  30+
                </div>
                <div className="">
                  <p className="text-xs flex mt-2">Years of</p>
                  <p className="font-semibold text-sm flex items-center">
                    Experienced
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Image */}

        <div className="sm:w-full md:w-[40%] lg:w-[60%] pl-10 justify-center items-center ml-10">
          <div className="grid grid-cols-2">
            <img
              src="Choose1.png"
              alt="Music Speaker"
              className="w-[340px] h-[230px] mt-16 shadow-md"
            />
            <img
              src="Choose2.png"
              alt="Music Speaker"
              className="w-[175px] h-[150px] mt-36 ml-3 shadow-md"
            />
          </div>

          <div className="grid grid-col-3 pt-5 gap-2">
            <div className="grid grid-cols-3 gap-2">
              <div className="">
                <img
                  src="Choose3.png"
                  alt="Music Speaker"
                  className="w-[200px] h-[200px] shadow-md"
                />
              </div>

              <div>
                <img
                  src="Choose4.png"
                  alt="Music Speaker"
                  className="w-[240px] h-[150px] shadow-md"
                />
              </div>

              <div className="">
                <img
                  src="Choose5.png"
                  alt="Music Speaker"
                  className="w-[100px] h-[110px] shadow-md"
                />
                <img
                  src="Choose6.png"
                  alt="Music Speaker"
                  className="w-[100px] h-[110px] mt-2 shadow-md"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Image */}
      {/* 5th div */}

      <div>
        <Image
          src={"/image-3.png"}
          alt="customer information"
          width={"1440"}
          height={"410"}
          className="mt-20"
        ></Image>
      </div>

      {/* 6th div */}

      <div className="sm:w-full md:w-[85%] sm:p-5 md:p-5 sm:h-auto md:h-[full] flex sm:flex-col md:flex-col sm:justify-start md:justify-center sm:items-start md:items-center bg-black">
        <div>
          <p className="text-[#FF9F0D] flex justify-center mt-20">
            Choose & pick
          </p>
          <p className="text-white font-bold text-3xl">
            <span className="text-[#FF9F0D]">Fr</span>om Our Menu
          </p>
        </div>

        <div className="text-white gap-14 flex mt-10">
          <Link href="#" className="">
            Breakfast
          </Link>
          <Link href="#">Lunch</Link>
          <Link href="#">Dinner</Link>
          <Link href="#">Dessert</Link>
          <Link href="#">Drink</Link>
          <Link href="#">Snack</Link>
          <Link href="#">Suops</Link>
        </div>
        <div className="relative w-full h-[50%] mt-10 flex items-center justify-center">
          {/* Pehla Image */}
          <div className="relative">
            <img
              src="Menu1.png"
              alt="Background"
              className="w-[330px] h-[280px] object-cover"
            />

            {/* Dusra Image jo upar lagega */}
            <img
              src="Menu2.png"
              alt="Overlay"
              className="absolute top-0 left-11 w-[250px] h-[250px]"
            />
          </div>
          <div className="grid grid-cols-2 ml-5 gap-x-9 gap-y-3">
            <div className="flex">
              <div>
                <img
                  src="Menu3.png"
                  alt="Lettuse Leaf"
                  className="w-[60px] h-[60px]"
                />
              </div>
              <div className="text-white ml-2">
                <p className="font-semibold text-md">Lettuce Leaf</p>
                <p className="text-xs">
                  Lacus nisi, et ac dapibus velit in consequat.
                </p>
                <p className="text-[#FF9F0D] font-semibold text-md">12.5$</p>
              </div>
            </div>

            <div className="flex">
              <div>
                <img
                  src="Menu4.png"
                  alt="Glow Cheese"
                  className="w-[60px] h-[60px]"
                />
              </div>
              <div className="text-white ml-2">
                <p className="font-semibold text-md">Glow Cheese</p>
                <p className="text-xs">
                  Lacus nisi, et ac dapibus velit in consequat.
                </p>
                <p className="text-[#FF9F0D] font-semibold text-md">12.5$</p>
              </div>
            </div>

            <div className="flex">
              <div>
                <img
                  src="Menu5.png"
                  alt="Fresh Breakfast"
                  className="w-[60px] h-[60px]"
                />
              </div>
              <div className="text-white ml-2">
                <p className="font-semibold text-md">Fresh Breakfast</p>
                <p className="text-xs">
                  Lacus nisi, et ac dapibus velit in consequat.
                </p>
                <p className="text-[#FF9F0D] font-semibold text-md">14.5$</p>
              </div>
            </div>

            <div className="flex">
              <div>
                <img
                  src="Menu6.png"
                  alt="Italian Pizza"
                  className="w-[60px] h-[60px]"
                />
              </div>
              <div className="text-white ml-2">
                <p className="font-semibold text-md">Italian Pizza</p>
                <p className="text-xs">
                  Lacus nisi, et ac dapibus velit in consequat.
                </p>
                <p className="text-[#FF9F0D] font-semibold text-md">14.5$</p>
              </div>
            </div>

            <div className="flex">
              <div>
                <img
                  src="Menu7.png"
                  alt="Mild Butter"
                  className="w-[60px] h-[60px]"
                />
              </div>
              <div className="text-white ml-2">
                <p className="font-semibold text-md">Mild Butter</p>
                <p className="text-xs">
                  Lacus nisi, et ac dapibus velit in consequat.
                </p>
                <p className="text-[#FF9F0D] font-semibold text-md">12.5$</p>
              </div>
            </div>

            <div className="flex">
              <div>
                <img
                  src="Menu8.png"
                  alt="Sllice Beef"
                  className="w-[60px] h-[60px]"
                />
              </div>
              <div className="text-white ml-2">
                <p className="font-semibold text-md">Sllice Beef</p>
                <p className="text-xs">
                  Lacus nisi, et ac dapibus velit in consequat.
                </p>
                <p className="text-[#FF9F0D] font-semibold text-md">12.5$</p>
              </div>
            </div>

            <div className="flex">
              <div>
                <img
                  src="Menu9.png"
                  alt="Fresh Bread"
                  className="w-[60px] h-[60px]"
                />
              </div>
              <div className="text-white ml-2">
                <p className="font-semibold text-md">Fresh Bread</p>
                <p className="text-xs">
                  Lacus nisi, et ac dapibus velit in consequat.
                </p>
                <p className="text-[#FF9F0D] font-semibold text-md">12.5$</p>
              </div>
            </div>

            <div className="flex">
              <div>
                <img
                  src="Menu10.png"
                  alt="Mushaom Pizza"
                  className="w-[60px] h-[60px]"
                />
              </div>
              <div className="text-white ml-2">
                <p className="font-semibold text-md">Mushaom Pizza</p>
                <p className="text-xs">
                  Lacus nisi, et ac dapibus velit in consequat.
                </p>
                <p className="text-[#FF9F0D] font-semibold text-md">12.5$</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 7th div */}

      <div className="sm:w-full md:w-[85%] sm:p-5 md:p-5 sm:h-auto md:h-[full] flex sm:flex-col md:flex-col sm:justify-start md:justify-center sm:items-start md:items-center bg-black">
        <div>
          <p className="text-[#FF9F0D] flex justify-center">Chefs</p>
          <p className="text-white font-bold text-2xl">
            <span className="text-[#FF9F0D]">Me</span>et Our Chef
          </p>
        </div>
        <div className="flex gap-3 mt-5">
          <Chef />
        </div>
        <button className="text-white w-28 h-8 mt-8 border border-[#FF9F0D] rounded-full text-sm flex justify-center items-center">
          See More
        </button>
      </div>

      {/* 8th div */}

      <div className="sm:w-full md-w-[85%] sm:p-5 md:p-5 sm:h-auto md:h-full flex sm:flex-col md:flex-col sm:justify-start md:justify-start sm:items-start md:items-start bg-black">
        <div className="w-[50%] flex justify-start ml-44">
          <p className="text-[#FF9F0D] flex justify-start">Testimonials</p>
          </div>
          <div className="w-[50%] flex ml-44">
          <p className="text-white text-3xl font-bold">What our client are saying</p>
        </div>

        <div className="w-[45%] h-[300px] mt-10 ml-[330px] bg-white">
        <div className="flex flex-col items-center text-black">
      {/* Profile Picture */}
      <div className="relative w-20 h-20 mb-4">
        <img
          src="Ellipse 6.png" // yahan apni image ka path lagayen
          alt="Alamin Hasan"
          className="w-full h-full rounded-full object-cover"
        />
      </div>
      {/* Rating */}
      <div className="text-[#FF9F0D] text-4xl font-bold mb-2">99</div>
      {/* Review Text */}
      <p className="text-center text-black mb-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
        pellentesque bibendum non dui volutpat fringilla bibendum.
      </p>
      {/* Stars */}
      <div className="flex mb-2">
        {Array(4)
          .fill("")
          .map((_, index) => (
            <span key={index} className="text-[#FF9F0D] text-xl">&#9733;</span>
          ))}
        <span className="text-gray-400 text-xl">&#9733;</span>
      </div>
      {/* Name and Title */}
      <h3 className="text-lg font-semibold">Alamin Hasan</h3>
      <p className="text-sm text-black">Food Specialist</p>
    </div>
        </div>
      </div>

          {/* 9th div */}

          <div className="mt-20">
            <img 
            src="Restaurant activer process.png" 
            alt="Restaurant activer process" />
          </div>

          {/* 10th div */}

          <div className="sm:w-full md-w-[85%] sm:p-5 md:p-5 sm:h-auto md:h-full flex sm:flex-col md:flex-col sm:justify-start md:justify-center sm:items-start md:items-center mt-10 bg-black">
            <div>
              <p className="text-[#FF9F0D] text-sm flex justify-center">Blog Post</p>
              <p className="text-white font-bold text-3xl"><span className="text-[#FF9F0D]">La</span>test News & Blog</p>
            </div>
            <div className="flex justify-center items-center gap-4 mt-8">
              <div className="border border-gray-400 border-t-0 w-[300px] h-[400px]">
                  <img 
                  src="Blog1.png" 
                  alt="Burger" />
                  <div className="">
                    <p className="text-[#FF9F0D] text-sm pl-9 pt-5">10 February 2022</p>
                    <p className="text-white font-bold pt-2 pl-10">Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis</p>
                  </div>
                  <div className="flex justify-around pt-6">
                    <Link href="#" className="text-white text-sm">Learn More</Link>
                    <div className="flex gap-1 pt-1">
                    <AiOutlineLike className="text-white"/>
                    <PiChatDotsLight className="text-[#FF9F0D]"/>
                    <PiShareNetworkBold className="text-white"/>
                    </div>
                  </div>
              </div>

              <div className="border border-gray-400 border-t-0 w-[300px] h-[400px]">
                  <img 
                  src="Blog2.png" 
                  alt="Burger" />
                  <div className="">
                    <p className="text-[#FF9F0D] text-sm pl-9 pt-5">10 February 2022</p>
                    <p className="text-white font-bold pt-2 pl-10">Morbi Sodales Tellus Elit, In Blandit Risus Suscipit A</p>
                  </div>
                  <div className="flex justify-around pt-6">
                    <Link href="#" className="text-white text-sm">Learn More</Link>
                    <div className="flex gap-1 pt-1">
                    <AiOutlineLike className="text-white"/>
                    <PiChatDotsLight className="text-[#FF9F0D]"/>
                    <PiShareNetworkBold className="text-white"/>
                    </div>
                  </div>
              </div>

              <div className="border border-gray-400 border-t-0 w-[300px] h-[400px]">
                  <img 
                  src="Blog3.png" 
                  alt="Burger" />
                  <div className="">
                    <p className="text-[#FF9F0D] text-sm pl-9 pt-5">10 February 2022</p>
                    <p className="text-white font-bold pt-2 pl-10">PCurabitur rutrum velit ac <br /> congue malesuada</p>
                  </div>
                  <div className="flex justify-around pt-6">
                    <Link href="#" className="text-white text-sm">Learn More</Link>
                    <div className="flex gap-1 pt-1">
                    <AiOutlineLike className="text-white"/>
                    <PiChatDotsLight className="text-[#FF9F0D]"/>
                    <PiShareNetworkBold className="text-white"/>
                    </div>
                  </div>
              </div>
            </div>
          </div>
    </main>
  );
};

export default HomeMenu;
