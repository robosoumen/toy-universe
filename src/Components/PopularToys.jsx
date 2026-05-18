import React from "react";
import { Link } from "react-router";

const PopularToys = ({ singleToyData }) => {
  const {
    availableQuantity,
    pictureURL,
    price,
    sellerEmail,
    rating,
    sellerName,
    subCategory,
    toyId,
    toyName,
    description,
  } = singleToyData;
  return (
    <div>
      <div className="card w-96 shadow-sm p-4 bg-amber-200">
        <figure>
          <img
            className="w-[300px] h-[200px] p-5 rounded-4xl"
            src={pictureURL}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{toyName}</h2>
          <p>Rating : {rating}</p>
          <p>Available Quantity : {availableQuantity}</p>
          <p>Price : {price}</p>
          <div className="card-actions justify-end">
            <Link to={`/card-details/${toyId}`} className="btn btn-warning text-red-900 text-xl font-bold">
              Show Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularToys;
