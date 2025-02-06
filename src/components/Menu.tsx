import React from "react";
import { PiCoffee } from "react-icons/pi";
import Image from "next/image";

const Menu = () => {
  return (
    <main className="w-full flex sm:flex-col md-flex-row  justify-center items-center mt-10 mb-1">

        {/* first Card */}

      <div className="mt-[100px] sm:w-full md:w-[80%] sm:p-5 md:p-5 sm:h-auto md:h-[500px] flex sm:flex-col md:flex-row sm:justify-start md:justify-center sm:items-start md:items-center bg-white">
        <div className="sm:w-full md:w-[50%] p-4">
          {/* Image */}

          <div className="sm:w-full md:w-[50%] lg:w-[85%]  pl-6 justify-center items-center">
            <img
              src="/image-1.png"
              alt="Coffe"
              className="w-full h-auto md:h-[490px] shadow-md"
            />
          </div>
        </div>
        <div>
          <PiCoffee className="text-2xl text-[#FF9F0D]" />
          <h1 className="text-black font-bold sm:text-md md:text-3xl lg-text-2xl pt-1">
            Starter Menu
          </h1>
          <div className="border-b-2 border-dashed">
            <h3 className="text-black font-semibold text-lg pt-2">
              Alder Grilled Chinook Salmon
            </h3>
            <div className="flex">
              <p className="text-[#4F4F4F] font-normal text-base pt-1">Toasted French bread topped with romano, cheddar</p>
              <p className="text-[#FF9F0D] pl-20 mt-2">32$</p>
            </div>
            <p className="text-[#4F4F4F] font-normal pt-1 pb-2">560 CAL</p>
          </div>

          <div className="border-b-2 border-dashed">
            <h3 className="text-[#FF9F0D] font-semibold text-lg pt-2">
              Berries and creme tart
            </h3>
            <div className="flex">
            <p className="text-[#4F4F4F] font-normal text-base pt-1">
              Gorgonzola, ricotta, mozzarella, taleggio
            </p>
            <p className="text-[#FF9F0D] pl-[158px] mt-2">43$</p>
            </div>
            <p className="text-[#4F4F4F] font-normal pt-1 pb-2">700 CAL</p>
          </div>

          <div className="border-b-2 border-dashed">
            <h3 className="text-black font-semibold text-lg pt-2">
              Tormentoso Bush Pizza Pintoage
            </h3>
            <div className="flex">
            <p className="text-[#4F4F4F] font-normal text-base pt-1">
              Ground cumin, avocados, peeled and cubed
            </p>
            <p className="text-[#FF9F0D] pl-[128px] mt-2">43$</p>
            </div>
            <p className="text-[#4F4F4F] font-normal pt-1 pb-2">1000 CAL</p>
          </div>

          <div className="border-b-2 border-dashed">
            <h3 className="text-black font-semibold text-lg pt-2">
              Spicy Vegan Potato Curry
            </h3>
            <div className="flex">
            <p className="text-[#4F4F4F] font-normal text-base pt-1">
              Spreadable cream cheese, crumbled blue cheese
            </p>
            <p className="text-[#FF9F0D] pl-[88px] mt-2">43$</p>
            </div>
            <p className="text-[#4F4F4F] font-normal pt-1 pb-2">560 CAL</p>
          </div>
        </div>
      </div>

      {/* second card */}

      <div className="ml-20 mt-[100px] sm:w-full md:w-[80%] sm:p-5 md:p-5 sm:h-auto md:h-[500px] flex sm:flex-col-reverse md:flex-row-reverse sm:justify-start md:justify-center sm:items-start md:items-center bg-white">
        <div className="sm:w-full md:w-[50%] p-4">
          {/* Image */}

          <div className="sm:w-full md:w-[50%] lg:w-[90%]  pl-6 justify-center items-center">
            <img
              src="/image-2.png"
              alt="Coffe"
              className="w-full h-auto md:h-[490px] shadow-md"
            />
          </div>
        </div>
        <div>
          <PiCoffee className="text-2xl text-[#FF9F0D]" />
          <h1 className="text-black font-bold sm:text-md md:text-3xl lg-text-2xl pt-1">
          Main Course
          </h1>
          <div className="border-b-2 border-dashed">
            <h3 className="text-black font-semibold text-lg pt-2">
            Optic Big Breakfast Combo Menu
            </h3>
            <div className="flex">
              <p className="text-[#4F4F4F] font-normal text-base pt-1">Toasted French bread topped with romano, cheddar</p>
              <p className="text-[#FF9F0D] pl-20 mt-2">32$</p>
            </div>
            <p className="text-[#4F4F4F] font-normal pt-1 pb-2">560 CAL</p>
          </div>

          <div className="border-b-2 border-dashed">
            <h3 className="text-black font-semibold text-lg pt-2">
            Cashew Chicken With Stir-Fry
            </h3>
            <div className="flex">
            <p className="text-[#4F4F4F] font-normal text-base pt-1">
            Gorgonzola, ricotta, mozzarella, taleggio
            </p>
            <p className="text-[#FF9F0D] pl-[158px] mt-2">43$</p>
            </div>
            <p className="text-[#4F4F4F] font-normal pt-1 pb-2">700 CAL</p>
          </div>

          <div className="border-b-2 border-dashed">
            <h3 className="text-black font-semibold text-lg pt-2">
            Vegetables & Green Salad
            </h3>
            <div className="flex">
            <p className="text-[#4F4F4F] font-normal text-base pt-1">
            Ground cumin, avocados, peeled and cubed
            </p>
            <p className="text-[#FF9F0D] pl-[128px] mt-2">14$</p>
            </div>
            <p className="text-[#4F4F4F] font-normal pt-1 pb-2">1000 CAL</p>
          </div>

          <div className="border-b-2 border-dashed">
            <h3 className="text-black font-semibold text-lg pt-2">
            Spicy Vegan Potato Curry
            </h3>
            <div className="flex">
            <p className="text-[#4F4F4F] font-normal text-base pt-1">
            Spreadable cream cheese, crumbled blue cheese
            </p>
            <p className="text-[#FF9F0D] pl-[88px] mt-2">35$</p>
            </div>
            <p className="text-[#4F4F4F] font-normal pt-1 pb-2">560 CAL</p>
          </div>
        </div>
      </div>

      {/* client section */}

      <div>
        <Image 
        src={"/image-3.png"}
        alt='customer information'
        width={"1440"}
        height={"410"}
        className='mt-20'>
        </Image>
        </div>

        {/* card 3 */}

        <div className="mt-[100px] sm:w-full md:w-[80%] sm:p-5 md:p-5 sm:h-auto md:h-[500px] flex sm:flex-col md:flex-row sm:justify-start md:justify-center sm:items-start md:items-center bg-white">
        <div className="sm:w-full md:w-[50%] p-4">
          {/* Image */}

          <div className="sm:w-full md:w-[50%] lg:w-[85%]  pl-6 justify-center items-center">
            <img
              src="/image-4.png"
              alt="Coffe"
              className="w-full h-auto md:h-[490px] shadow-md"
            />
          </div>
        </div>
        <div>
          <PiCoffee className="text-2xl text-[#FF9F0D]" />
          <h1 className="text-black font-bold sm:text-md md:text-3xl lg-text-2xl pt-1">
          Dessert
          </h1>
          <div className="border-b-2 border-dashed">
            <h3 className="text-black font-semibold text-lg pt-2">
            Fig and lemon cake
            </h3>
            <div className="flex">
              <p className="text-[#4F4F4F] font-normal text-base pt-1">Toasted French bread topped with romano, cheddar</p>
              <p className="text-[#FF9F0D] pl-20 mt-2">32$</p>
            </div>
            <p className="text-[#4F4F4F] font-normal pt-1 pb-2">560 CAL</p>
          </div>

          <div className="border-b-2 border-dashed">
            <h3 className="text-black font-semibold text-lg pt-2">
            Creamy mascarpone cake
            </h3>
            <div className="flex">
            <p className="text-[#4F4F4F] font-normal text-base pt-1">
            Gorgonzola, ricotta, mozzarella, taleggio
            </p>
            <p className="text-[#FF9F0D] pl-[158px] mt-2">43$</p>
            </div>
            <p className="text-[#4F4F4F] font-normal pt-1 pb-2">700 CAL</p>
          </div>

          <div className="border-b-2 border-dashed">
            <h3 className="text-black font-semibold text-lg pt-2">
            Pastry, blueberries, lemon juice
            </h3>
            <div className="flex">
            <p className="text-[#4F4F4F] font-normal text-base pt-1">
            Ground cumin, avocados, peeled and cubed
            </p>
            <p className="text-[#FF9F0D] pl-[128px] mt-2">14$</p>
            </div>
            <p className="text-[#4F4F4F] font-normal pt-1 pb-2">1000 CAL</p>
          </div>

          <div className="border-b-2 border-dashed">
            <h3 className="text-black font-semibold text-lg pt-2">
            Pain au chocolat
            </h3>
            <div className="flex">
            <p className="text-[#4F4F4F] font-normal text-base pt-1">
            Spreadable cream cheese, crumbled blue cheese
            </p>
            <p className="text-[#FF9F0D] pl-[88px] mt-2">35$</p>
            </div>
            <p className="text-[#4F4F4F] font-normal pt-1 pb-2">560 CAL</p>
          </div>
        </div>
      </div>

      {/* Card 4 */}

      <div className="ml-20 mt-[100px] sm:w-full md:w-[80%] sm:p-5 md:p-5 sm:h-auto md:h-[500px] flex sm:flex-col-reverse md:flex-row-reverse sm:justify-start md:justify-center sm:items-start md:items-center bg-white">
        <div className="sm:w-full md:w-[50%] p-4">
          {/* Image */}

          <div className="sm:w-full md:w-[50%] lg:w-[90%]  pl-6 justify-center items-center">
            <img
              src="/image-5.png"
              alt="Coffe"
              className="w-full h-auto md:h-[490px] shadow-md"
            />
          </div>
        </div>
        <div>
          <PiCoffee className="text-2xl text-[#FF9F0D]" />
          <h1 className="text-black font-bold sm:text-md md:text-3xl lg-text-2xl pt-1">
          Drinks
          </h1>
          <div className="border-b-2 border-dashed">
            <h3 className="text-black font-semibold text-lg pt-2">
            Caffè macchiato
            </h3>
            <div className="flex">
              <p className="text-[#4F4F4F] font-normal text-base pt-1">Toasted French bread topped with romano, cheddar</p>
              <p className="text-[#FF9F0D] pl-20 mt-2">32$</p>
            </div>
            <p className="text-[#4F4F4F] font-normal pt-1 pb-2">560 CAL</p>
          </div>

          <div className="border-b-2 border-dashed">
            <h3 className="text-black font-semibold text-lg pt-2">
            Aperol Spritz Capacianno
            </h3>
            <div className="flex">
            <p className="text-[#4F4F4F] font-normal text-base pt-1">
            Gorgonzola, ricotta, mozzarella, taleggio
            </p>
            <p className="text-[#FF9F0D] pl-[158px] mt-2">43$</p>
            </div>
            <p className="text-[#4F4F4F] font-normal pt-1 pb-2">700 CAL</p>
          </div>

          <div className="border-b-2 border-dashed">
            <h3 className="text-black font-semibold text-lg pt-2">
            Caffe Latte Campuri
            </h3>
            <div className="flex">
            <p className="text-[#4F4F4F] font-normal text-base pt-1">
            Ground cumin, avocados, peeled and cubed
            </p>
            <p className="text-[#FF9F0D] pl-[128px] mt-2">14$</p>
            </div>
            <p className="text-[#4F4F4F] font-normal pt-1 pb-2">1000 CAL</p>
          </div>

          <div className="border-b-2 border-dashed">
            <h3 className="text-black font-semibold text-lg pt-2">
            Tormentoso BushTea Pintoage
            </h3>
            <div className="flex">
            <p className="text-[#4F4F4F] font-normal text-base pt-1">
            Spreadable cream cheese, crumbled blue cheese
            </p>
            <p className="text-[#FF9F0D] pl-[88px] mt-2">35$</p>
            </div>
            <p className="text-[#4F4F4F] font-normal pt-1 pb-2">560 CAL</p>
          </div>
        </div>
      </div>

    </main>
  );
};

export default Menu;
