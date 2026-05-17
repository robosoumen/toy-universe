import React, { use } from "react";
import Slider from "../Components/Slider";
import PopularToys from "../Components/PopularToys";
const toyPromises = fetch("/toy.json").then((res) => res.json());
const Home = () => {
  const toyData = use(toyPromises);
  console.log(toyData);
  return (
    <div className="w-11/12 mx-auto items-center">
      <div>
        <Slider toyData={toyData}></Slider>
      </div>
      <div className="grid grid-cols-1 gap-5md:grid-cols-2 lg:grid-cols-3">
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
