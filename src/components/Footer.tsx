import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-1 gap-8">
        {/* Support Section */}
        <div className="flex justify-evenly">
          <div>
            <h2 className="text-2xl font-bol mb-4 font-bold ">
              <span className="text-[#FF9F0D]">St</span>ill You Need Our
              Support?
            </h2>
            <p className="text-white mb-4 font-thin text-xs">
              Don’t wait; make a smart & logical choice here. It’s pretty easy.
            </p>
          </div>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="p-2 w-full h-10 rounded-l-md bg-[#FF9F0D] text-white placeholder-white focus:outline-none px-4"
            />
            <button className="p-2 w-40 h-10 text-[#FF9F0D] bg-white rounded-r-md">
              <p className="text-xs">Subscribe Now</p>
            </button>
          </div>
        </div>

        {/* About Section */}
        <div className="flex justify-evenly">
          <div>
            <h3 className="text-lg font-bold mb-4">About Us</h3>
            <p className="text-white">
              orporate clients and leisure travelers hasbeen <br /> relying on
              Groundlink for dependablesafe, <br /> and professional chauffeured
              carservice in major <br /> cities across World.
            </p>
            <div className="text-white mt-4 flex">
              <Image
                src="/Watch.png"
                alt="watch"
                width={65}
                height={50}
              ></Image>
              <div className="ml-4">
                <strong>Opening Hours:</strong>
                <p>Mon - Sat (8:00 - 6:00)</p>
                <p>Sunday - Closed</p>
              </div>
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Useful Links</h3>
            <ul className="text-white space-y-2">
              <li>
                <a href="#" className="hover:text-orange-500">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500">
                  News
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500">
                  Partners
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500">
                  Team
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500">
                  Menu
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Help Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">Help?</h3>
            <ul className="text-white space-y-2">
              <li>
                <a href="#" className="hover:text-orange-500">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500">
                  Reporting
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500">
                  Support Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500">
                  Privacy
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Recent Post</h3>
            <ul>
              <div className="flex">
                <Image
                  src={"/image-6.png"}
                  alt="Finger Frys"
                  width={70}
                  height={70}
                  className="pt-1"
                ></Image>
                <div>
                <li><a href="#" className="pl-4 pt-2">
                    Is fastfood good for
                  </a></li>
                  <li><a href="#" className="pl-4">your body?</a></li>
                  <a href="#" className="pl-4 text-gray-500">February 28,2022</a>
                </div>
              </div>

              <div className="flex">
                <Image
                  src={"/image-6.png"}
                  alt="Finger Frys"
                  width={70}
                  height={70}
                  className="pt-2"
                ></Image>
                <div>
                <li><a href="#" className="pl-4 pt-2">Change your food habit</a></li>
                  <li><a href="#" className="pl-4">With organic food</a></li>
                  <p className="pl-4 text-gray-500">February 28,2022</p>
                </div>
              </div>

              <div className="flex">
                <Image
                  src={"/image-6.png"}
                  alt="Finger Frys"
                  width={70}
                  height={70}
                  className="pt-2"
                ></Image>
                <div>
                <li><a href="#" className="pl-4 pt-2">Do you like fastfood for</a></li>
                <li><a href="#" className="pl-4">your life?</a></li>
                <li><p className="pl-4 text-gray-500">February 28,2022</p></li>
                </div>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
