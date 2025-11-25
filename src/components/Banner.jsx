import React from "react";
import { Fade } from "react-awesome-reveal";

export default function Banner() {
  return (
    <div className="relative bg-base-200">
      <div className="max-w-6xl mx-auto px-6 py-20 sm:py-32 flex flex-col md:flex-row items-center md:items-start gap-8">
        <div className="flex-1 text-center md:text-left">
          <Fade direction="down" triggerOnce>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900">
              Welcome to ToyLand
            </h1>
          </Fade>
          <Fade triggerOnce>
          <p className="mt-4 text-lg sm:text-xl md:text-2xl text-gray-700 max-w-xl">
            Discover amazing toys, games, and collectibles for kids of all ages.
          </p>
          </Fade>
           <Fade direction="up" triggerOnce>
          <div className="mt-8">
            <a
              href="/shop"
              className="inline-block bg-primary text-white font-semibold py-3 px-6 rounded-lg shadow hover:bg-primary-focus transition"
            >
              Shop Now
            </a>
          </div>
          </Fade>
        </div>
        <div className="flex-1">
          <Fade triggerOnce>
            <img
              src="https://images.unsplash.com/photo-1508896694512-1eade558679c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dG95fGVufDB8fDB8fHww"
              alt="Toys Banner"
              className="w-full h-80 sm:h-96 md:h-[500px] object-cover rounded-lg shadow-lg"
            />
          </Fade>
        </div>
      </div>
    </div>
  );
}
