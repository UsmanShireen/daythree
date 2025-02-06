import Image from "next/image";
import { CiSearch } from "react-icons/ci";
import { PiUserLight, PiTote } from "react-icons/pi";
import Link from "next/link";

const Hero = (props: any) => {
  return (
    <header className="w-full height-[250px]">
      <div className="w-full h-[90px]">
        <Image
          src={"/Header hero.png"}
          alt="header"
          width={"1440"}
          height={"410"}
          className="sm:w-full md:width-full"
        ></Image>
        </div>

        <div className="absolute inset-0 h-[90px]">
          <div className="text-white flex justify-center pt-5 font-bold pl-16">
            Food
            <span className="text-[#FF9F0D]">tuck</span>
          </div>
          <div className="flex justify-around items-center pt-5">
            <ul className="text-white flex gap-7">
              <Link href="/" className="hover:text-[#FF9F0D] text-sm">Home</Link>
              <Link href="/Menu" className="hover:text-[#FF9F0D] text-sm">Menu</Link>
              <Link href="/Blog" className="hover:text-[#FF9F0D] text-sm">Blog</Link>
              <Link href="/pages" className="hover:text-[#FF9F0D] text-sm">Pages</Link>
              <Link href="/Shop" className="hover:text-[#FF9F0D] text-sm">About</Link>
              <Link href="/Shop" className="hover:text-[#FF9F0D] text-sm">Shop</Link>
              <Link href="/Contact" className="hover:text-[#FF9F0D] text-sm">Contact</Link>
              <Link href="/SignIn" className="hover:text-[#FF9F0D]">SignIn</Link>
              <Link href="/SignUp" className="hover:text-[#FF9F0D]">SignUp</Link>
            </ul>
          
          <div className="flex gap-5">
            <div className="flex border border-[#FF9F0D] rounded-xl">
              <input type="text" placeholder="Search..." className="text-white pl-4 bg-transparent border-none"/>
            <CiSearch className="text-white text-2xl pr-2" />
            </div>
            <PiTote className="text-white text-2xl" />
          </div>
          </div>
        </div>
    </header>
  );
};

export default Hero;
