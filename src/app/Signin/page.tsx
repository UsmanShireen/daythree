import React from 'react'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Footerbar from "@/components/Footerbar";
import SignIn from './SignIn';

const page = () => {
  return (
      <div>
        <Navbar text="Our Shop" textName="Home > " name="SIGN IN"/>
        <SignIn />
        <Footer />
        <Footerbar />
      </div>
  )
}

export default page
