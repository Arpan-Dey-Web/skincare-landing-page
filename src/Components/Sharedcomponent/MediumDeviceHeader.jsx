import React from "react";
import image1 from "/src/assets/image1.jpg";
import image2 from "/src/assets/image2.png";
import SkincareComponent from "./SkincareComponent";
import Button from "./Button";
const MediumDeviceHeader = () => {
  return (
    <div className="relative max-w-screen-xl mx-auto px-4">
      <div className="flex justify-between items-center w-11/12 mx-auto max-w-7xl py-20">
        <div className="indent-8 w-2xs text-color text-justify">
          Transform your skincare routine with premium products that restore,
          protect, and enhance your natural glow every day.
        </div>

        <div>
          <img className="  w-[330px] h-[332px]" src={image1} alt="" />
        </div>
      </div>
      <div className="relative w-screen ">
        <h1 className="text-[16vw] leading-none font-extrabold uppercase text-center text-color">
          <span className="">Glowwww </span>
          <span className="">Naturally</span>
        </h1>
      </div>

      <div className=" relative ">
        <div className="mt-[100px] flex justify-between items-center  w-11/12 mx-auto max-w-7xl ">
          <div className="  relative   w-96">
            <SkincareComponent></SkincareComponent>
          </div>
          <div>
            <Button></Button>
          </div>
        </div>
        <div className="absolute top-[300px]  w-screen overflow-hidden">
          <h1 className="text-[17vw] leading-none font-extrabold uppercase tracking-widest text-center text-color">
            SKINCARE
          </h1>
        </div>
      </div>

      <div className="w-11/12 mx-auto max-w-7xl mt-[100px]">
        <p className="text-justify text-color">
          Experience the ultimate in skincare with our expertly formulated
          products, crafted to nourish, protect, and rejuvenate your skin.
          Combining the finest natural ingredients with advanced science, our
          collection ensures every skin type can achieve a radiant, healthy
          glow. Embrace your beauty with confidence every day. Experience the
          ultimate in skincare with our expertly formulated products, crafted to
          nourish, protect, and rejuvenate your skin.
        </p>
      </div>
    </div>
  );
};

export default MediumDeviceHeader;
