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
  console.log(typeof toyId, data, filterToy);

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
  return (
    <div>
        <header>
            <Navbar></Navbar>
        </header>
        {/* card */}
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure>
          <img src={pictureURL} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {toyName}
            <div className="badge badge-secondary">{price}</div>
          </h2>
          <p>
           {
            description
           }
          </p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">{sellerName}</div>
            <div className="badge badge-outline">{subCategory}</div>
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
