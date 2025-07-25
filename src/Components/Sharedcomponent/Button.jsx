import React from "react";

const Button = ({value="Shop Now"}) => {
  

  return <button className="bg-[#2D3B36] p-2 rounded-full text-white py-5 px-14">{value}</button>;
};

export default Button;
