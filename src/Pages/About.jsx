import React, { use } from "react";
import { AuthContext } from "../context/AuthContext";

const About = () => {
  const { user } = use(AuthContext);

  return (
   <div>
    <title>toy-universe-about</title>
     <div className="flex flex-col gap-6 w-11/12 mx-auto">
        <div>
            <p className="text-2xl font-semibold flex justify-center">Welcome {user.displayName}</p>
        </div>
      <div>
        <p className="font-bold">Our Mission</p>
        <p>
          "At ToyTopia, we believe that every toy tells a story and every child
          deserves a world of imagination. Our platform was born out of a simple
          idea: to bridge the gap between local toy artisans and families
          looking for something truly special. We aren't just an online store;
          we are a community dedicated to keeping the magic of childhood alive
          while empowering small businesses in our neighborhood."
        </p>
      </div>
      <div>
        <p className="font-bold">Our Vision</p>
        <p>"Our journey is driven by the smiles of children and the trust of parents. As we grow, our goal remains the same: to create a vibrant, safe, and playful digital space where discovering the perfect gift is as fun as playing with it. Whether you are looking to build a Lego empire or find a cuddly new friend, ToyTopia is here to make those moments memorable."</p>
      </div>
    </div>
   </div>
  );
};

export default About;
