import Link from "next/link";
import React from "react";

const ManageCard = ({ toy }) => {
  return (
    <div className="card bg-base-100 shadow-xl text-left">
  {/* Image */}
  <figure className="h-52 overflow-hidden">
    <img
      src={toy.image}
      alt={toy.title}
      className="w-full h-full object-cover"
    />
  </figure>

  {/* Card Body */}
  <div className="card-body">
    <h2 className="card-title">{toy.title}</h2>

    {/* Short Description */}
    <p className="text-base-content/70 line-clamp-2">{toy.description}</p>

    {/* Price */}
    <div className="text-lg font-semibold text-primary mt-2">
      ${toy.price}
    </div>

    {/* Buttons */}
    <div className="card-actions mt-4 flex justify-between">
      <button className="btn btn-error btn-sm">Delete</button>
      <Link href={`/toys/${toy._id}`}>
        <button className="btn btn-primary btn-sm">Details</button>
      </Link>
    </div>
  </div>
</div>
  );
};

export default ManageCard;
