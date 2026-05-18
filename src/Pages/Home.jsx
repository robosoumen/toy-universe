import React, { use } from "react";
import Slider from "../Components/Slider";
import PopularToys from "../Components/PopularToys";
const toyPromises = fetch("/toy.json").then((res) => res.json());
const Home = () => {
  const toyData = use(toyPromises);
  console.log(toyData);
  return (
    <div className="w-11/12 mx-auto items-center space-y-8">
      <div className="p-7">
        <Slider toyData={toyData}></Slider>
      </div>
       <p className="flex text-4xl font-extrabold text-green-800 items-center justify-center">All Toys</p>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {toyData.map((singleToyData) => (
          <PopularToys
            key={singleToyData.toyId}
            singleToyData={singleToyData}
          ></PopularToys>
        ))}
      </div>
    </div>
  );
};

export default Home;
