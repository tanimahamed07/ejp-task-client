
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function page({ params }) {
  const { id } = await params;
  console.log(id);

  const res = await fetch(`https://ejp-task-weld.vercel.app/toys/${id}`);
  const data = await res.json();
  const toy = data.result;
  return (
    <div className="min-h-screen bg-base-200 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300">
          {/* Image */}
          <figure className="w-full h-80 sm:h-96 md:h-[500px] overflow-hidden  rounded-t-lg">
            <img
              src={toy.image}
              alt={toy.title}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </figure>

          {/* Card Body */}
          <div className="card-body px-6 py-6 sm:px-8 sm:py-8">
            <h2 className="card-title text-3xl sm:text-4xl font-bold">
              {toy.title}
            </h2>

            {/* Description */}
            <p className="text-base-content/80 mt-4 text-sm sm:text-base leading-relaxed">
              {toy.description}
            </p>
            <p className="text-xl pt-1.5">
              {" "}
              <span className="text-secondary">Seller Email:</span>{" "}
              {toy.sellerEmail}
            </p>

            {/* Price and Badge */}
            <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <span className="text-2xl sm:text-3xl font-semibold text-primary">
                ${toy.price}
              </span>
              <span className="badge badge-primary text-sm sm:text-base">
                Toy Details
              </span>
            </div>

            {/* Action Button */}
            <div className="card-actions justify-end mt-8">
                <Link
                href="/shop"
                className="btn btn-outline btn-primary w-full sm:w-auto"
              >
                Back to Shop ++
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
