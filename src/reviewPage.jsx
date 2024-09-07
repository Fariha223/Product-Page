import React from "react";
import { FaUser, FaStar } from "react-icons/fa";

const reviews = [
  {
    name: "Beth E.",
    date: "June 5, 2024",
    title: "Great Vitamins",
    text: "I love my line up of IWI vitamins and they are by far the best brand I have found",
  },
  {
    name: "Martina Decosta",
    date: "June 1, 2024",
    title: "Great Vitamins",
    text: "Algae oil is one of the greatest nutrients on the planet. So grateful IWI makes it available in a pure, trustworthy form...",
  },
  {
    name: "Beth E.",
    date: "April 23, 2024",
    title: "Great Vitamins",
    text: "I love my line up of IWI vitamins and they are by far the best brand I have found.",
  },
];

function ReviewPage() {
  return (
    <div className="flex flex-col ml-12 mr-10 font-pt-serif mb-4">
      <div className="flex justify-between items-start mb-4">
        <div className="flex-col"><h1 className="text-3xl font-semibold mb-3">Reviews</h1>
        <button className="bg-[#042f2e] text-white py-2 px-4">
          Write a Review
        </button></div>
        <div className="w-1/4">
          <h2 className="text-lg font-medium mb-2"><u>Filter Reviews</u></h2>
          <input
            type="text"
            placeholder="Search "
            className="w-full py-2 px-4 bg-[#042f2e] text-white"
          />

        </div>
      </div>

      <div className="flex">
        <div className="w-3/4 pr-8">
          {reviews.map((review, index) => (
            <div key={index} className="flex mb-6">
              <div className="flex flex-col w-3/4 pr-8">
                <div className="flex items-start space-x-4 mb-4">
                  <FaUser className="h-12 w-12" />
                  <div className="flex flex-col">
                    <h3 className="text-xl font-medium">{review.name}</h3>
                    <div className="flex space-x-1 mt-2">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-gray-400">
                          <FaStar/>
                        </span>
                      ))}
                    </div>
                    <h4 className="text-lg font-semibold mt-2">{review.title}</h4>
                    <p className="text-sm mt-1">{review.text}</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-1/4">
                <div className="mb-4">
                  <p className="text-sm">Date: {review.date}</p>
                </div>
                <div>
                  <h2 className="text-lg font-medium">Was it helpful?</h2>
                </div>
              </div>
              <div className="border-b border-gray-300 mb-6"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ReviewPage;


