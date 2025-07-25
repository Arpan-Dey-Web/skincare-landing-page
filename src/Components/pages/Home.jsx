import React from "react";
import Navbar from "../Sharedcomponent/Navbar";
import SmallDeviceHeader from "../Sharedcomponent/SmallDeviceHeader";
import MediumDeviceHeader from "../Sharedcomponent/MediumDeviceHeader";
import LargeDeviceHeader from "../Sharedcomponent/LargeDeviceHeader";
import SecondaryButton from "../Sharedcomponent/SecondaryButton";
import SkincareComponent from "../Sharedcomponent/SkincareComponent";
import image3 from "/src/assets/image3.png";

const Home = () => {
  return (
    <div className="bg-[#EFF5E1] min-h-screen">
      {/* Navigation */}
      <Navbar />

      {/* Responsive Headers */}
      <div>
        <div className="md:hidden">
          <SmallDeviceHeader />
        </div>
        <div className="hidden md:block lg:hidden">
          <MediumDeviceHeader />
        </div>
        <div className="hidden lg:block">
          <LargeDeviceHeader />
        </div>
      </div>

      {/* Main Content */}
      <div className="w-11/12 mx-auto max-w-7xl mt-20">
        <div className="flex flex-col lg:flex-row gap-10 justify-between mt-10">
          {/* Left Content - Text */}
          <div>
            <div className="mb-5">
              <SecondaryButton />
            </div>

            <div>
              <h1 className="text-3xl text-color mb-8">
                YOUR SKIN DESERVES THE BEST CARE.
              </h1>
              <p className="text-base text-justify w-11/12 md:w-xl">
                Discover a curated collection of skincare products designed to
                rejuvenate, protect, and pamper your skin. Explore our range —
                crafted with love, backed by science, and inspired by nature.
              </p>
            </div>

            {/* Features */}
            <div className="text-justify">
              {/* Feature 1 */}
              <div className="flex gap-4 mt-5">
                <span className="text-[34px] font-normal leading-[41px] tracking-[-0.02em] text-left bg-gradient-to-b from-[#293330] to-[#FEFFF4] text-transparent bg-clip-text">
                  01
                </span>
                <div>
                  <h1 className="text-color text-3xl">Bio Ingredients</h1>
                  <p className="text-[#525349] mt-5 w-sm">
                    Get naturally beautiful and transform with our bio
                    ingredients creams for healthy, radiant skin.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex gap-4 mt-5">
                <span className="text-[34px] font-normal leading-[41px] tracking-[-0.02em] text-left bg-gradient-to-b from-[#293330] to-[#FEFFF4] text-transparent bg-clip-text">
                  02
                </span>
                <div>
                  <h1 className="text-color text-3xl">Everything Natural</h1>
                  <p className="text-[#525349] mt-5 w-sm">
                    Pure ingredients for pure skin. The perfect solution for
                    your skin care needs.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex gap-4 mt-5">
                <span className="text-[34px] font-normal leading-[41px] tracking-[-0.02em] text-left bg-gradient-to-b from-[#293330] to-[#FEFFF4] text-transparent bg-clip-text">
                  03
                </span>
                <div>
                  <h1 className="text-color text-3xl">All Handmade</h1>
                  <p className="text-[#525349] mt-5 w-sm">
                    Made with love and care. Just for you. Give your skin the
                    tender loving care it deserves.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Image Component */}
          <div className="flex flex-col justify-between w-full">
            <SkincareComponent
              customWidth="w-full"
              height="h-screen"
              image={image3}
            />
            <span className="flex justify-between text-color text-xl uppercase pt-5">
              <span>Since 2001</span>
              <span>Learn More</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
