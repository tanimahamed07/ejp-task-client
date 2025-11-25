import React from "react";

export default function Tastimonial() {
  return (
    <div>
      <section className="py-16 bg-base-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            What Our Customers Say
          </h2>

          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            {[
              {
                name: "Alice",
                text: "My kids absolutely love ToyLand! Great variety and fast delivery.",
              },
              {
                name: "Bob",
                text: "High-quality toys and very affordable. Highly recommend!",
              },
              {
                name: "Charlie",
                text: "Excellent customer service and safe toys.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="card bg-base-100 p-6 shadow hover:shadow-lg transition"
              >
                <p className="text-gray-700 mb-4">"{item.text}"</p>
                <span className="font-semibold">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
