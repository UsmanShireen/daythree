import React from 'react'
import Navbar from "@/components/Navbar";
import Menu from "@/components/Menu";
import Client from "@/components/Client";
import Footer from "@/components/Footer";
import Footerbar from "@/components/Footerbar";
import SignIn from "../Signin/SignIn"


const page = () => {
  return (
    <div>
      <Navbar text="Our Menu" textName="Home > " name="Menu"/>
      <Menu />
      <Client />
      <SignIn />
      <Footer />
      <Footerbar />
    </div>
  )
}

export default page
