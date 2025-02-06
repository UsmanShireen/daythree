import React from "react";
import { PiMagnifyingGlassThin} from "react-icons/pi";
import  Foods from '@/app/Products/Foods';

const ShopMenu = () => {
  return (
    <main className="w-full h-full flex justify-center items-center mt-32 mb-64">
      <div className="grid grid-cols justify-center gap-5 pl-12">
        <div className="flex flex-col w-40 h-auto">
          <div className="flex gap-10">
            <label htmlFor="" className="">
              Sort By:{" "}
              <select className="border border-gray-200 h-11 w-[200px] rounded-md">
                <option value="Newest" className="">
                  Newest
                </option>
              </select>
            </label>
            <label htmlFor="">
              Show:{" "}
              <select className="border border-gray-200 h-11 w-[200px] rounded-md">
                <option value="Newest" className="">
                  Default
                </option>
              </select>
            </label>
            <div className="flex pt-6 ml-[300px]">
            <input
              type="text"
              placeholder="Search Product"
              className="h-11 bg-[#FF9F0D1A] w-[200px] pl-4"
            />
            <div className="bg-[#FF9F0D] h-11 w-10 flex justify-center items-center">
              <PiMagnifyingGlassThin className="text-white font-bold text-xl" />
            </div>
          </div>
          </div>
        </div>

        <div className="flex ">
          <div className="pt-6 pl-8">
            <p className="font-bold text-xl flex justify-center">Category</p>
            <div className="flex justify-center ml-14 mt-4 gap-8">
            <div className="pt-3">
              <input type="checkbox" id="link-checkbox" className="h-4 w-4" />
              <label htmlFor="link-checkbox" className="pl-2 pb-1">
                Sandwiches
              </label>
            </div>

            <div className="pt-3">
              <input type="checkbox" id="link-checkbox" className="h-4 w-4" />
              <label htmlFor="link-checkbox" className="pl-2 pb-1">
                Burger
              </label>
            </div>

            <div className="pt-3">
              <input type="checkbox" id="link-checkbox" className="h-4 w-4" />
              <label htmlFor="link-checkbox" className="pl-2 pb-1">
                Chicken Chup
              </label>
            </div>

            <div className="pt-3">
              <input type="checkbox" id="link-checkbox" className="h-4 w-4" />
              <label htmlFor="link-checkbox" className="pl-2 pb-1">
                Drink
              </label>
            </div>

            <div className="pt-3">
              <input type="checkbox" id="link-checkbox" className="h-4 w-4" />
              <label htmlFor="link-checkbox" className="pl-2 pb-1">
                Pizza
              </label>
            </div>

            <div className="pt-3">
              <input type="checkbox" id="link-checkbox" className="h-4 w-4" />
              <label htmlFor="link-checkbox" className="pl-2 pb-1">
                Thi
              </label>
            </div>

            <div className="pt-3">
              <input type="checkbox" id="link-checkbox" className="h-4 w-4" />
              <label htmlFor="link-checkbox" className="pl-2 pb-1">
                Non Veg
              </label>
            </div>

            <div className="pt-3">
              <input type="checkbox" id="link-checkbox" className="h-4 w-4" />
              <label htmlFor="link-checkbox" className="pl-2 pb-1">
                Uncategorized
              </label>
            </div>
            </div>
          </div>
          </div>
        <Foods />
      </div>
    </main>
  );
};

export default ShopMenu;
