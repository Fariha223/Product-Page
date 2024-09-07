import React from "react";
import medicine1 from "./images/medicine/omega-3.png";
import medicine2 from "./images/medicine/card-2.png";
import medicine3 from "./images/medicine/card-3.png";

function FrequentlyBought() {
  return (
    <div className="flex flex-col ml-12 mr-10 font-pt-serif mb-4">
      <h1 className="text-3xl font-semibold mb-4">Frequently Bought Together</h1>
      <p className="mb-4">
        In the dynamic world of e-commerce, the "Frequently Bought Together"
        feature has become a cornerstone of the online shopping experience.
        This tool leverages the power of data analytics and consumer behavior
        insights to suggest complementary products that are often purchased
        in conjunction with the item a customer is viewing.
      </p>
      
      <div className="flex justify-between space-x-2">
        <div className="flex flex-col">
          <img src={medicine1} alt="Omega-3" className="h-62 w-58 mb-4" />
          <div className="flex items-start mb-3">
            <h2 className="text-xl font-medium">Omega-3 Essential</h2>
            <p className="text-black font-bold italic ml-10">BDT 200</p>
          </div>
          <p className="text-sm text-left">
            Get brighter brain energy from nourishing <br /> fats and key vitamins in
            this clever blend.
          </p>
        </div>

        <div className="flex flex-col">
          <img src={medicine2} alt="Cardio Booster" className="h-62 w-58 mb-4" />
          <div className="flex items-start mb-3">
            <h2 className="text-xl font-medium">Heart</h2>
            <p className="text-black font-bold italic ml-10">BDT 300</p>
          </div>
          <p className="text-sm text-left">
            Nourish your heart with clinically studied <br /> AlmegaPL EPA for supporting healthy
             <br/> heart and cardiovascular function.
          </p>
        </div>

        <div className="flex flex-col">
          <img src={medicine3} alt="Vitamin D" className="h-62 w-58 mb-4" />
          <div className="flex items-start mb-3">
            <h2 className="text-xl font-medium">Omega-3 Minis</h2>
            <p className="text-black font-bold italic ml-10">BDT 400</p>
          </div>
          <p className="text-sm text-left">
            Your favorite omega-3, now in an <br /> easier-to-swallow mini size.
          </p>
        </div>
      </div>
    </div>
  );
}

export default FrequentlyBought;

