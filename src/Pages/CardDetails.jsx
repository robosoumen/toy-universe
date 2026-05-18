import React from "react";
import { useLoaderData } from "react-router";
import { useParams } from "react-router";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const CardDetails = () => {
  const { id } = useParams();
  const toyId = parseInt(id);
  const data = useLoaderData();
  const filterToy = data.find((singleToy) => singleToy.toyId === toyId);
  // console.log(typeof toyId, data, filterToy);

  const {
    availableQuantity,
    pictureURL,
    price,
    sellerEmail,
    rating,
    sellerName,
    subCategory,
    toyName,
    description,
  } = filterToy;

  // handleFormSubmit
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    // console.log(name, email);
    alert("form submit successful");
    e.target.reset();
  };
  return (
    <div className="bg-yellow-300 space-y-5">
      <title>{toyName}</title>
      <header>
        <Navbar></Navbar>
      </header>
      {/* card */}
      <div className="flex space-y-5 flex-col items-center">
        <div className="space-y-2">
          <img className="rounded-4xl w-[600px] h-[300px]"  src={pictureURL} alt="" />
          <p className="flex justify-center text-3xl font-bold">{toyName}</p>
        </div>
        <div className="flex justify-between text-xl gap-15 font-semibold">
          <p className="bg-red-500 p-3 rounded-2xl text-white">
            Available Quantity : {availableQuantity}
          </p>
          <p className="bg-red-500 p-3 rounded-2xl text-white">
            Price : {price}
          </p>
          <p className="bg-red-500 p-3 rounded-2xl text-white">
            Ratings : {rating}
          </p>
        </div>
        <div className="flex gap-16 text-xl font-semibold">
          <p className="bg-red-500 p-3 rounded-2xl text-white">
            Description : {description}
          </p>
          <p className="bg-red-500 p-3 rounded-2xl text-white">
            Category : {subCategory}
          </p>
        </div>
        <div className="flex gap-12 text-xl font-semibold">
          <p className="bg-red-500 p-3 rounded-2xl text-white">
            Seller Email : {sellerEmail}
          </p>
          <p className="bg-red-500 p-3 rounded-2xl text-white">
            Seller Name : {sellerName}
          </p>
        </div>

        <div className="flex gap-5">
          <p className="flex items-center text-2xl font-bold">Try Now Toy</p>
        <div className="bg-white p-5 rounded-3xl">
          <form onSubmit={handleFormSubmit}>
            <div className=" flex gap-4 m-3">
              <label className="label font-bold">Name : </label>
              <input placeholder="your name" name="name" type="text" />
            </div>
            <div className="flex gap-4 m-3">
              <label className="label font-bold">Email : </label>
              <input placeholder="your email" name="email" type="text" />
            </div>
            <div className="flex justify-center">
              <button className="text-xl font-bold btn btn-warning">
                Try Now
              </button>
            </div>
          </form>
        </div>
        </div>
      </div>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default CardDetails;
