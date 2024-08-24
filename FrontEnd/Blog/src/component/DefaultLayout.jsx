import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const DefaultLayout = (props) => {
  return (
    <div>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">{props.children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default DefaultLayout;
