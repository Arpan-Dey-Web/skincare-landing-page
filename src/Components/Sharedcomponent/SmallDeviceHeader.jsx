import React from "react";
import image1 from "/src/assets/image1.jpg";
import image2 from "/src/assets/image2.png";
import SkincareComponent from "./SkincareComponent";
import Button from "./Button";
const SmallDeviceHeader = () => {
  return (
    <div>
      <div className=" md:flex justify-between items-center mt-[70px] lg:mt-[150px] w-11/12 mx-auto max-w-7xl">
        {/* visible in small device  */}
        <div>
          <div className="w-screen overflow-hidden md:hidden">
            <h1 className="text-[17vw] leading-none font-extrabold uppercase tracking-widest text-center text-color">
              <span className="">Glowwww </span>
              <span className="">Naturally</span>
            </h1>
          </div>
          <div className="flex justify-between items-center ">
            {/* visible on small and medium device */}
            <div className="mt-6 text-justify text-color md:indent-10 md:w-2xs">
              Transform your skincare routine with premium products that
              restore, protect, and enhance your natural glow every day.
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="hidden w-11/12 mx-auto max-w-7xl text-5xl text-justify">
          <p>
            <span>
              Experience the ultimate in skincare with our expertly formulated
              products, crafted to nourish, protect, and rejuvenate your skin.
              Combining the finest natural ingredients with <span></span>
            </span>
            <span className="text-gray-400">
              advanced science, our collection ensures every skin type can
              achieve a radiant, healthy glow. Embrace your beauty with
              confidence every day. Experience the ultimate in skincare with our
              expertly formulated products, crafted to nourish, protect, and
              rejuvenate your skin.
            </span>
          </p>
        </div>
        <div>
          <div className="mt-5 md:hidden w-full">
            <SkincareComponent />
          </div>
          <div className="w-screen overflow-hidden">
            <h1 className="text-[17vw] leading-none font-extrabold uppercase tracking-widest text-center text-color">
              SKINCARE
            </h1>
          </div>

          <div>
            <img
              className=" md:hidden w-full md:w-[330px]"
              src={image1}
              alt=""
            />
          </div>
          <div className="mt-5 text-center">
            <Button></Button>
          </div>
        </div>
        <div className="w-11/12 mx-auto max-w-7xl mt-10">
          <p className="text-justify">
            Experience the ultimate in skincare with our expertly formulated
            products, crafted to nourish, protect, and rejuvenate your skin.
            Combining the finest natural ingredients with advanced science, our
            collection ensures every skin type can achieve a radiant, healthy
            glow. Embrace your beauty with confidence every day. Experience the
            ultimate in skincare with our expertly formulated products, crafted
            to nourish, protect, and rejuvenate your skin.
          </p>
        </div>
      </div>
    </div>
  );
};
export default SmallDeviceHeader;
