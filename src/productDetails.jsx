import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import coche from "./images/benefits-coche.png";


function ProductDetails() {

    const [expandItems, setExpandItems] = useState(null);

    const handleClickSection = (section) => {
        if (expandItems === section){
            setExpandItems(null);
        } else {
            setExpandItems(section)
        }
    }


    return(
        <div className="flex p-6 font-pt-serif">
            <div className="w-1/2 pr-8 ml-4">
                <div className="border-b border-gray-300 py-4">
                    <div className="flex justify-between items-center cursor-pointer" onClick={() => handleClickSection('Benefits')}>
                        <h3 className="text-xl font-medium">Benefits</h3>
                        {expandItems === 'Benefits' ? <FaMinus /> : <FaPlus />}
                    </div>
                    {expandItems === 'Benefits' && (
                            <div  className=" mt-2 text-gray-700 text-sm font-thin">
                                <p>Support healthy aging</p>
                                <p>Boost collagen production</p>
                                <p>Support a healthy immune system</p>
                                <p>PRO-TIP: For enhanced immunity take with Cymbiotika's D3+ K2 + CoQ10.</p>
                            </div>
                    )}
                </div>

                <div className="border-b border-gray-300 py-4">
                    <div className="flex justify-between items-center cursor-pointer" onClick={() => handleClickSection('Ingredients')}>
                        <h3 className="text-xl font-medium">Ingredients</h3>
                        {expandItems === 'Ingredients' ? <FaMinus /> : <FaPlus />}
                    </div>
                    {expandItems === 'Ingredients' && (
                        <div className="mt-2 text-gray-700 text-sm font-thin">
                            <ul className="list-disc ml-5 mt-2">
                                <li>Liposomal Vitamin C: 500mg</li>
                                <li>Purified Water</li>
                                <li>Natural Orange Flavor</li>
                                <li>Sunflower Lecithin</li>
                                <li>Potassium Sorbate (Preservative)</li>
                                <li>Stevia Leaf Extract (Natural Sweetener)</li>
                            </ul>
                        </div>
                    )}
                </div>

                <div className="border-b border-gray-300 py-4">
                    <div className="flex justify-between items-center cursor-pointer" onClick={() => handleClickSection('How to Use')}>
                        <h3 className="text-xl font-medium">How to Use</h3>
                        {expandItems === 'How to Use' ? <FaMinus /> : <FaPlus />}
                    </div>
                    {expandItems === 'How to Use' && (
                        <div className="mt-2 text-gray-700 text-sm font-thin">
                            <p>Take one 10ml dose daily. Can be taken directly or mixed with a glass of water or juice. Best taken in the morning or as recommended by your healthcare professional.</p>
                        </div>
                    )}
                </div>
                <div className="border-b border-gray-300 py-4">
                    <div className="flex justify-between items-center cursor-pointer" onClick={() => handleClickSection('Cautions')}>
                        <h3 className="text-xl font-medium">Cautions</h3>
                        {expandItems === 'Cautions' ? <FaMinus /> : <FaPlus />}
                    </div>
                    {expandItems === 'Cautions' && (
                        <div className="mt-2 text-gray-700 text-sm font-thin">
                            <p>Consult a healthcare provider if you are pregnant, nursing, or have a known medical condition before using this product.</p>
                            <ul className="list-disc ml-5 mt-2">
                                <li>Do not exceed recommended dose.</li>
                                <li>Keep out of reach of children.</li>
                                <li>Store in a cool, dry place.</li>
                            </ul>
                        </div>
                    )}
                </div>
                <div className="border-b border-gray-300 py-4">
                    <div className="flex justify-between items-center cursor-pointer" onClick={() => handleClickSection('Shipping and Return')}>
                        <h3 className="text-xl font-medium">Shipping and Return</h3>
                        {expandItems === 'Shipping and Return' ? <FaMinus /> : <FaPlus />}
                    </div>
                    {expandItems === 'Shipping and Return' && (
                        <div className="mt-2 text-gray-700">
                            <p>Shipping is free on orders above BDT 800. Orders are processed within 1-2 business days.</p>
                            <p>Returns are accepted within 30 days of the purchase date for unopened products. Please contact customer support for any issues.</p>
                        </div>
                    )}
                </div>
            </div>

            <div className="w-1/2 flex justify-center items-center">
                <img src= {coche} alt="Product Details" className="w-80 h-auto object-cover"/>
            </div>
        </div>
    )
}

export default ProductDetails;