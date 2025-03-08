import React from "react";
import Header from "./header";
import Footer from "./footer";

const Layout = ({ children }) => {
  return (
    <div className=" min-h-screen max-h-full relative pb-14 ">
      <Header />
      {children}
      <Footer/>
    </div>
  );
};

export default Layout;
