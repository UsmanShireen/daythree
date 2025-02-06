import Image from "next/image";
import { CiSearch } from "react-icons/ci";
import { PiUserLight, PiTote } from "react-icons/pi";
import Link from "next/link";

interface NavbarProps {
  text: string;
  textName: string;
  name: string;
}

const Navbar = (props: NavbarProps) => {
  return (
    <header className="w-full height-[250px]">
      <div>
      <div className="w-full h-[90px]">
        <Image
          src={"/navbar.png"}
          alt="header"
          width={"1440"}
          height={"410"}
          className="sm:w-full md:width-full"
        ></Image>
        </div>
        <div>
          <p className="text-white font-bold text-3xl pb-2 flex justify-center items-center mt-16">{props.text}</p>
          <div className="flex justify-center">
          <p className="text-white ">{props.textName}</p>
          <p className="text-[#FF9F0D]">{props.name}</p>
          </div>
        </div>

        <div className="absolute inset-0 bg-black h-[90px] flex justify-around items-center">
          <div className="text-white">
            Food
            <span className="text-[#FF9F0D]">Tuck</span>
          </div>
          <div>
            <ul className="text-white flex gap-7">
              <Link href="/" className="hover:text-[#FF9F0D]">Home</Link>
              <Link href="/Menu" className="hover:text-[#FF9F0D]">Menu</Link>
              <Link href="#" className="hover:text-[#FF9F0D]">Blog</Link>
              <Link href="#" className="hover:text-[#FF9F0D]">Pages</Link>
              <Link href="#" className="hover:text-[#FF9F0D]">About</Link>
              <Link href="/Shop" className="hover:text-[#FF9F0D]">Shop</Link>
              <Link href="#" className="hover:text-[#FF9F0D]">Contact</Link>
              <Link href="/SignIn" className="hover:text-[#FF9F0D]">SignIn</Link>
              <Link href="/SignUp" className="hover:text-[#FF9F0D]">SignUp</Link>
            </ul>
          </div>
          <div className="flex gap-5">
            <CiSearch className="text-white text-2xl" />
            <PiUserLight className="text-white text-2xl" />
            <PiTote className="text-white text-2xl" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
