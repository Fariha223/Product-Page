import React from "react";
import organic from "./images/medicine/nature_man.png";

function OrganicProduct() {
  return (
    <div className="flex w-full mx-auto mb-8 h-[500px]">
      <div className="w-1/2">
        <img src={organic} alt="Picture of a man in a green field" className="object-cover h-full w-full"/>
      </div>
      <div className="w-1/2 bg-[#677557] flex items-center justify-center p-8">
        <p className="text-4xl font-pt-serif italic text-white text-center leading-relaxed mr-4">
          As a certified organic, family-run pharmaceutical, 
          <span className="font-dancing-script"> our Laxfo</span> goes directly from us to you —-- with love.
        </p>
      </div>
    </div>
  );
}

export default OrganicProduct;




