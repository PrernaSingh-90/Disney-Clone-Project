import React from "react";
import disney from "./../assets/Images/disney1.png";
import pixer from "./../assets/Images/pixer1.png";
import marvel from "./../assets/Images/marvel1.png";
import starwars from "./../assets/Images/starwars1.png";
import national from "./../assets/Images/national1.png";

import disneyV from "./../assets/Videos/disney.mp4";
import pixerV from "./../assets/Videos/pixer.mp4";
import marvelV from "./../assets/Videos/marvel.mp4";
import starwarsV from "./../assets/Videos/starwars.mp4";
import nationalV from "./../assets/Videos/national.mp4";

function ProductionHouse() {
  const productionHouseList = [
    {
      id: 1,
      image: disney,
      video: disneyV,
    },
    {
      id: 2,
      image: pixer,
      video: pixerV,
    },
    {
      id: 3,
      image: marvel,
      video: marvelV,
    },
    {
      id: 4,
      image: starwars,
      video: starwarsV,
    },
    {
      id: 5,
      image: national,
      video: nationalV,
    },
  ];
  return (
    <div className="flex gap-2 md:gap-5 p-2 px-5 md:px-16">
      {productionHouseList.map((item) => (
        <div className="border-[2px] border-gray-600 rounded-lg hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer relative shadow-xl shadow-gray-800">
          <video src={item.video} autoPlay loop playsInline muted 
            className='absolute z-0  top-0 rounded-md 
            opacity-0 hover:opacity-50'/> 
          <img src={item.image} className="w-full z-[1] opacity-100" />
        </div>
      ))}
    </div>
  );
}

export default ProductionHouse;
