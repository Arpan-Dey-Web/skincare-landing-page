import React from "react";
import image1 from "/src/assets/image1.jpg";
import Button from "./Button";
import SkincareComponent from "./SkincareComponent";
const LargeDeviceHeader = () => {
  return (
    <div>
      <div className=" py-10">
        <div className="flex justify-between items-center w-11/12 mx-auto max-w-7xl mb-20">
          <div className="indent-8 w-2xs text-color text-justify">
            Transform your skincare routine with premium products that restore,
            protect, and enhance your natural glow every day.
          </div>

          <div className="uppercase flex flex-col font-bold text-7xl text-color ">
            <span>Glow</span>
            <span>Natur- </span>
            <span> ally</span>
          </div>
          <div>
            <img className="w-[220px] rounded-2xl" src={image1} alt="" />
          </div>
        </div>

        <div className="relative">
          <div className="flex justify-between  w-11/12 mx-auto max-w-7xl">
            <div className="mt-15">
              <Button></Button>
            </div>
            <div className="w-[610px]  ">
              <SkincareComponent></SkincareComponent>
            </div>
            <div></div>
          </div>
          {/* skin care */}
          <div className="absolute  top-45 w-screen overflow-hidden">
            <h1 className="text-[17vw] leading-none font-extrabold uppercase tracking-widest  text-color">
              SKINCARE
            </h1>
          </div>

          {/*  */}
        </div>
        {/*
         */}
        <div className="w-11/12 mx-auto max-w-7xl mt-10">
          <p className="text-justify text-color text-4xl">
            <span>
              Experience the ultimate in skincare with our expertly formulated
              products, crafted to nourish, protect, and rejuvenate your skin.
              Combining the finest natural ingredients with
            </span><span> </span>
            <span className="text-gray-400">
              advanced science, our collection ensures every skin type can
              achieve a radiant, healthy glow. Embrace your beauty with
              confidence every day. Experience the ultimate in skincare with our
              expertly formulated products, crafted to nourish, protect, and
              rejuvenate your skin.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LargeDeviceHeader;
