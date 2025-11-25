import React from "react";

export default function NewArrival() {
  return (
    <div>
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            New Arrivals
          </h2>

          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {[
              {
                title: "Magic Cube",
                description: "Classic brain-teasing cube toy.",
                price: 20,
                image:
                  "https://images.unsplash.com/photo-1581091012184-80eb85b0c6b1?crop=entropy&cs=tinysrgb&fit=max&w=400&q=60",
              },
              {
                title: "Action Figure",
                description: "Collectible superhero figure.",
                price: 35,
                image:
                  "https://images.unsplash.com/photo-1600185369984-4bda2b81aa9f?crop=entropy&cs=tinysrgb&fit=max&w=400&q=60",
              },
              {
                title: "Toy Train Set",
                description: "Fun train set for kids.",
                price: 50,
                image:
                  "https://images.unsplash.com/photo-1592194996308-7b43878e84a2?crop=entropy&cs=tinysrgb&fit=max&w=400&q=60",
              },
              {
                title: "Water Gun",
                description: "Perfect for summer play.",
                price: 18,
                image:
                  "https://images.unsplash.com/photo-1593032465179-5e4bff8f2342?crop=entropy&cs=tinysrgb&fit=max&w=400&q=60",
              },
            ].map((toy, idx) => (
              <div
                key={idx}
                className="card bg-base-100 shadow hover:shadow-lg transition overflow-hidden"
              >
                <figure className="h-52 overflow-hidden">
                  <img
                    src={toy.image}
                    alt={toy.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </figure>
                <div className="card-body text-left">
                  <h3 className="font-semibold">{toy.title}</h3>
                  <p className="text-gray-600 text-sm line-clamp-2">
                    {toy.description}
                  </p>
                  <div className="mt-2 font-semibold text-primary">
                    ${toy.price}
                  </div>
                  <div className="card-actions justify-start mt-4">
                    <button className="btn btn-primary btn-sm">Details</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
