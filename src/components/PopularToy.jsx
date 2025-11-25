import React from "react";
import Card from "./Card";

export default async function PopularToy() {
  const res = await fetch("https://ejp-task-weld.vercel.app/popular-toys");
  const data = await res.json();

  const toys = [
    {
      title: "Building Blocks",
      description: "Creative blocks for endless fun.",
      price: 25,
      image:
        "https://images.unsplash.com/photo-1581091870620-9c43c91e4d56?crop=entropy&cs=tinysrgb&fit=max&w=400&q=60",
    },
    {
      title: "Remote Car",
      description: "Fast and fun remote-controlled car.",
      price: 40,
      image:
        "https://images.unsplash.com/photo-1591702647832-935d2d1cb0a3?crop=entropy&cs=tinysrgb&fit=max&w=400&q=60",
    },
    {
      title: "Puzzle Game",
      description: "Challenge your brain with fun puzzles.",
      price: 15,
      image:
        "https://images.unsplash.com/photo-1600488994246-b3a6c5c90c1c?crop=entropy&cs=tinysrgb&fit=max&w=400&q=60",
    },
  ];
  return (
    <section className="py-16 bg-base-200">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          Popular Toys
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.result.slice(0, 3).map((toy, idx) => (
            <div
              key={idx}
              className="card bg-base-100 shadow hover:shadow-lg transition overflow-hidden"
            >
              <Card key={idx} item={toy}></Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
