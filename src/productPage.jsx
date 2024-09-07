import React, { useState, useRef } from "react";
import Navbar from "./navbar";
import perelel from "./images/medicine/perelel.png";
import pills from "./images/medicine/pills.png";
import handCream from "./images/medicine/hand_cream.png";
import vitamins from "./images/medicine/vitamins.png";
import capsules from "./images/medicine/capsules-drug-blister-pack-white-background.jpg";
import omega from "./images/medicine/omega.png";
import { FaStar, FaArrowRight, FaArrowLeft } from "react-icons/fa";
import made_in from "./images/star-circle-svgrepo-com (1) 2.png";
import stethoscope from "./images/stethoscope-svgrepo-com 1.png";
import clinically from "./images/clinical-fe-svgrepo-com 2.png";
import halal from "./images/mayonnaise-sauce-cream-seasoning-ingredient-svgrepo-com 2.png";
import tested from "./images/application-security-svgrepo-com 2.png";
import ProductDetails from "./productDetails";
import OrganicProduct from "./organicProduct";
import FrequentlyBought from "./frequentlyBought";
import ReviewPage from "./reviewPage";
import ShoppingCart from "./shoppingCart";

function ProductPage() {

    const [selectedSize, setSelectedSize] = useState(null);
    const [selectedFlavor, setSelectedFlavor] = useState(null);
    const [rating, setRating] = useState(0);
    const [cartOpen, setCartOpen] = useState(false);
    const scrollContainerRef = useRef(null);

    const scrollLeft = () => {
            if (scrollContainerRef.current){
                scrollContainerRef.current.scrollBy({ left: -200, behavior: 'smooth' });
            }
    };

    const scrollRight = () => {
            if (scrollContainerRef.current){
                scrollContainerRef.current.scrollBy({ left: 200, behavior: 'smooth'});
            }
    }

    const handleClick = (size) =>{
        setSelectedSize(size)
    };

    const handleRating = (index) => {
        setRating(index + 1)
    };

    const handleFlavorChange = (e) => {
        setSelectedFlavor(e.target.value);
    }

    const handleAddToCart = () => {
        setCartOpen(true);
    }

    const handleCloseCart = () => {
        setCartOpen(false)
    }


    return(
        <div>
            <Navbar/>
            <div className="bg-white h-8 mt-20"></div>
            <div className="border-b border-gray-300"></div>
            <div className="flex items-start justify-start p-4 border-b">
                <div className="md:w-1/2 flex flex-col w-full ml-9">
                    <img src = {perelel} alt="Perelel-Medicine" className="object-cover h-full max-h-full mb-4" style={{ width: '95%' }}/>
                    <div className="relative">
                        <div ref={scrollContainerRef}
                             className="flex overflow-x-auto space-x-2 pn-2 ml-auto"
                             style={{ width: 'calc(100% - 2rem)', marginLeft: '1rem' }}>
                            <img src={pills} alt="Med pills" className="w-24 h-24 object-cover mr-2 ml-4"/>
                            <img src={vitamins} alt="Vitamins" className="w-24 h-24 object-cover ml-2 mr-2"/>
                            <img src={handCream} alt="handCream" className="w-24 h-24 object-cover ml-2 mr-2"/>
                            <img src={capsules} alt="Capsules" className="w-24 h-24 object-cover ml-2 mr-2 "/>
                            <img src={omega} alt="Omega" className="w-24 h-24 object-cover"/>
                        </div>
                        <button onClick={scrollLeft} className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-300 rounded-full z-10 flex items-center justify-center"
                            style={{ width: '2rem', height: '2rem' }}>
                            <FaArrowLeft/> 
                        </button>
                        <button onClick={scrollRight} className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-300 rounded-full z-10 flex items-center justify-center"
                            style={{ width: '2rem', height: '2rem' }}>
                            <FaArrowRight/>
                        </button>
                    </div>
                </div>    
                <div className="ml-8 max-w-lg font-pt-serif">
                    <div className="flex mb-2">
                        {[...Array(5)].map((_, index) => (
                        <FaStar key={index} className= {`cursor-pointer mr-1 ${ index < rating ? "text-yellow-500":"text-gray-300"}`} 
                                onClick={() => handleRating(index)}/>
                        ))}
                        <p className=" ml-3 text-sm font-extralight"><u>See all reviews</u></p>
                    </div>
                    <h2 className="text-3xl font-bold italic mb-4">Liposomal Vitamin C</h2>
                    <h3 className="text-2xl font-semibold italic mb-4">BDT 4332.23</h3>
                    <p className="text-base mb-4">Liposomal Vitamin C is an advanced form of Vitamin C 
                                                  encapsulated within liposomes, which are tiny fat-like 
                                                  particles that enhances its absorption and
                                                  bioavailability in the body.</p>
                    <p className="text-base mb-4">This delivery method allows for more efficient cellular uptake,
                                                  ensuring that higher levels of Vitamin C reach the bloodstream and tissues.</p>
                    <p className="text-base mb-5">It provides potent antioxidant support, boosts the immune system, promotes
                                                  collagen production, and enhances skin health. Liposomal Vitamin C is ideal 
                                                  for those seeking maximum benefits from their Vitamin C supplementation.
                    </p>
                    <div className="flex items-start mb-4">
                        <p className="mr-3">Select Size</p>
                        <div className="flex items-center space-x-2">
                            <button className={`border px-4 py-2 cursor-pointer transition-colors duration-100
                                            ${selectedSize === '100ml' ? 'bg-[#042f2e] text-white' : 'bg-white text-[#042f2e] border-[#042f2e] hover:bg-[#042f2e] hover:text-white' }`}
                                            onClick={() => handleClick('100ml')}
                            >
                                100ml
                            </button>
                            <button className={`border px-4 py-2 mr-3 cursor-pointer transition-colors duration-100
                                            ${selectedSize === '200ml' ? 'bg-[#042f2e] text-white' : 'bg-white text-[#042f2e] border-[#042f2e] hover:bg-[#042f2e] hover:text-white' }`}
                                            onClick={() => handleClick('200ml')}
                            >
                                200ml
                            </button>
                            <button className={`border px-4 py-2 mr-3 cursor-pointer transition-colors duration-100
                                            ${selectedSize === '500ml' ? 'bg-[#042f2e] text-white' : 'bg-white text-[#042f2e] border-[#042f2e] hover:bg-[#042f2e] hover:text-white' }`}
                                            onClick={() => handleClick('500ml')}
                            >
                                500ml
                            </button>
                        </div>
                    </div>
                    <div className="flex items-start mb-4">
                        <p className="mr-4">Select Flavor</p>
                        <div className="flex items-center space-x-4">
                            <label className="flex items-center space-x-2">
                                <input type="radio"
                                       name="flavor"
                                       value="orange"
                                       checked={selectedFlavor === "orange"}
                                       onChange={handleFlavorChange}
                                       className="form-radio h-5 w-5 text-[#042f2e] focus:ring-[#042f2e]"
                                />
                                <span className={selectedFlavor === "orange" ? "text-[#042f2e] font-bold" : ""}>
                                    Orange
                                </span>
                            </label>
                            <label className="flex items-center space-x-2">
                                <input type="radio"
                                       name="flavor"
                                       value="blueberry"
                                       checked={selectedFlavor === "blueberry"}
                                       onChange={handleFlavorChange}
                                       className="form-radio h-5 w-5 text-[#042f2e] focus:ring-[#042f2e]"
                                />
                                <span className={selectedFlavor === "blueberry" ? "text-[#042f2e] font-bold" : ""}>
                                    Blue-Berry
                                </span>
                            </label>
                            <label className="flex items-center space-x-2">
                                <input type="radio"
                                       name="flavor"
                                       value="lime"
                                       checked={selectedFlavor === "lime"}
                                       onChange={handleFlavorChange}
                                       className="form-radio h-5 w-5 text-[#042f2e] focus:ring-[#043130]"
                                />
                                <span className={selectedFlavor === "lime" ? "text-[#042f2e] font-bold" : ""}>
                                    Lime
                                </span>
                            </label>
                        </div>
                    </div>
                    <button 
                        className="bg-[#042f2e] text-white w-full py-2 mt-4 mb-4"
                        onClick={handleAddToCart} >Add to Cart</button>
                    <p className="mb-2">Pickup available at our <i><strong>22 Bistro Place, Banani</strong></i></p>
                    <p className="text-sm font-thin mb-5">Usually ready In 2-4 days</p>
                    <div className="border border-gray-300 flex flex-col mb-6">
                        <div className="items-center p-4 border-b border-gray-300">
                            <div className="flex items-center">
                                <div className="w-4 h-4 bg-[#042f2e] rounded-full mr-2"></div>
                                    <p>Subscribe & Save 10%</p>
                            </div>
                            <div className="flex">
                                <p className="ml-6">FREE SHIPPING + Cancel anytime</p>
                                <p className="font-semibold ml-32 ">BDT 800</p>
                            </div>
                            <u className="ml-6">YOUR SUBSCRIPTION PERKS + </u>
                        </div>
                        <div className="p-4 flex items-center">
                            <div className="w-4 h-4 bg-gray-300 rounded-full mr-2"></div>
                            <p className="text-[#808080]">One Time Purchase</p>
                        </div>
                        <div className="flex">
                            <p className="text-[#808080] ml-9">or four interest-free payments of BDT 20 with sezzle </p>
                            <p className="font-semibold ml-6 text-[#808080]">BDT 200</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-center space-x-4">
                        <div className="flex flex-col items-center">
                        <img src={stethoscope} alt="Doctors" className="w-8 h-8 object-cover" />
                            <p className="text-sm mt-2">Founded by Doctors</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <img src={made_in} alt="Made In Bangladesh" className="w-8 h-8 object-cover" />
                            <p className="text-sm mt-2">Made in Bangladesh</p>
                        </div>
                        <div className="flex flex-col items-center">
                        <img src={clinically} alt="Clinical Verification" className="w-8 h-8 object-cover" />
                            <p className="text-sm mt-2">Clinically Verified</p>
                        </div>
                        <div className="flex flex-col items-center">
                        <img src={halal} alt="It is Halal" className="w-8 h-8 object-cover" />
                            <p className="text-sm mt-2">Halal Ingredients</p>
                        </div>
                        <div className="flex flex-col items-center">
                        <img src={tested} alt="Tested Products" className="w-8 h-8 object-cover" />
                            <p className="text-sm mt-2">Tested by 3rd Party</p>
                        </div>
                    </div>
                </div> 
            </div>
            <div className="border-b border-gray-300 mb-6"></div>
                <ProductDetails/>
            <div className="border-b border-gray-300 mb-8"></div>
                <OrganicProduct/>
            <div className="border-b border-gray-300 mb-6"></div>
                <FrequentlyBought/>
            <div className="border-b border-gray-300 mb-6"></div>
                <ReviewPage/>
            <div className="border-b border-gray-300 mb-6"></div>
            <ShoppingCart cartOpen={cartOpen} cartClose={handleCloseCart} />
        </div>
    )
}

export default ProductPage;
