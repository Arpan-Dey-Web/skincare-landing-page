import React from "react";
import Navbar from "../Sharedcomponent/Navbar";
import Header from "../Sharedcomponent/Header";


const Home = () => {
  return (
    <div className="bg-[#EFF5E1]">
      <div className="w-11/12 mx-auto max-w-7xl">
        <Navbar></Navbar>
        <Header></Header>
      </div>
    </div>
  );
};

export default Home;
