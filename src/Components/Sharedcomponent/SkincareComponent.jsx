import React from "react";
import image1 from "/src/assets/image1.jpg";
import image2 from "/src/assets/image2.png";

const SkincareComponent = ({
  customWidth = "w-96",
  height = "h-96",
  image =image2,
}) => {
  return (
    <div
      className={`rounded-3xl shadow-2xl relative ${height} overflow-hidden z-20 mx-auto ${customWidth}`}
    >
      {/* Full Background Image */}
      <div className="absolute inset-0">
        <img
          src={image}
          alt="Woman with avocado skincare"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Container */}
      <div className="relative h-full">
        {/* Bottom Card Section */}
        <div className="absolute bottom-3 left-0 right-0 mx-4 mb-4">
          <div className="flex items-center bg-[#EFF5E1] rounded-full">
            {/* Profile Image */}
            <div className="flex-shrink-0 pl-4">
              <div className="w-12 h-12 rounded-full border border-dotted p-2 shadow-md bg-white/20 backdrop-blur-sm">
                <img
                  src={image1}
                  alt="Profile"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>

            {/* Message Content */}
            <div className="flex-1 px-4 py-3">
              <p className="text-gray-800 text-sm font-medium leading-relaxed">
                While giving you an invigorating cleansing experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkincareComponent;
