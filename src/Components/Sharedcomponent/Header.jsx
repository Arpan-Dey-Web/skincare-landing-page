import React from "react";
import image1 from "/src/assets/image1.jpg";
const Header = () => {
  return (
    <div>
      <div className="flex justify-between items-center mt-[150px]">
        <div className="w-[335px]  text-xl text-color">
          <span className="flex justify-end ">
            <span className=" ">Transform your skincare </span>
          </span>
          routine with premium products that restore, protect, and enhance your
          nautural glow every day.
        </div>
        <div>
          <h1 className="text-color text-[100px] font-bold flex flex-col">
            <span> Glow</span>
            <span>Natur-</span> <span>ally</span>
          </h1>
        </div>

        <div>
          <img
            className="w-[222px] h-[220px] rounded-2xl"
            src={image1}
            alt=""
          />
        </div>
          </div>
          

          
    </div>
  );
};
export default Header;
