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
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure>
          <img className="w-[300px] h-[300px]"
            src={pictureURL}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{toyName}</h2>
          <p>
           {description}
          </p>
          <div className="card-actions justify-end">
            <Link to={`/card-details/${toyId}`} className="btn btn-primary">Show Details</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularToys;