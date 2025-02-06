import React from 'react'
import Navbar from "@/components/Navbar";
import ShopMenu from '@/components/ShopMenu';
import Footer from "@/components/Footer";
import Footerbar from "@/components/Footerbar";

const page = () => {
  return (
      <div>
        <Navbar text="Our Shop" textName="Home > " name="Shop"/>
        <ShopMenu />
        <Footer />
        <Footerbar />
      </div>
  )
}

export default page
