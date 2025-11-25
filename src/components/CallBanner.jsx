import React from "react";

export default function CallBanner() {
  return (
    <div>
      <section className="py-16 bg-primary text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to Explore ToyLand?
          </h2>
          <p className="mb-6 text-lg sm:text-xl">
            Discover your favorite toys today and bring joy to your kids!
          </p>
          <a
            href="/shop"
            className="inline-block bg-white text-primary font-semibold py-3 px-6 rounded-lg shadow hover:bg-gray-100 transition"
          >
            Shop Now
          </a>
        </div>
      </section>
    </div>
  );
}
