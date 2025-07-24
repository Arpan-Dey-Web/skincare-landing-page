import React from "react";
import Navbar from "../Sharedcomponent/Navbar";
import Header from "../Sharedcomponent/SmallDeviceHeader";
import image1 from "/src/assets/image1.jpg";
import SkincareComponent from "../Sharedcomponent/SkincareComponent";
import Button from "../Sharedcomponent/Button";
import SmallDeviceHeader from "../Sharedcomponent/SmallDeviceHeader";
import MediumDeviceHeader from "../Sharedcomponent/MediumDeviceHeader";
import LargeDeviceHeader from "../Sharedcomponent/LargeDeviceHeader";

const Home = () => {
  return (
    <div className="bg-[#EFF5E1]">
      <div>
        <Navbar></Navbar>
        <div>
          {/* show only small device */}
          <div className="md:hidden">
            <SmallDeviceHeader></SmallDeviceHeader>
          </div>
          {/* show only medium device  */}
          <div className="hidden md:block lg:hidden">
            <MediumDeviceHeader></MediumDeviceHeader>
          </div>
          {/* show when larger device */}
          <div className="hidden lg:block">
          <LargeDeviceHeader></LargeDeviceHeader>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
