import React from "react";
import { star } from "../assets/icons";

const PopularProductCard = ({ imgURL, name, price }) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
      <div className="relative group">
        <img
          src={imgURL}
          alt={name}
          className="w-[280px] h-[280px] transition-transform transform scale-100 group-hover:scale-105"
        />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <button className="bg-purple-600 text-white py-2 px-4 rounded-md font-montserrat text-lg hover:bg-D400FF">
            Add to Cart
          </button>
        </div>
      </div>

      <div className="mt-8 flex justify-start gap-2.5">
        <img src={star} alt="rating" width={24} height={24} />
        <p className="font-montserrat text-xl leading-normal text-slate-gray">
          {4.5}
        </p>
      </div>

      <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">
        {name}
      </h3>
      <p className="mt-2 font-semibold font-montserrat text-2xl text-coral-red leading-normal">
        {price}
      </p>
    </div>
  );
};

export default PopularProductCard;
