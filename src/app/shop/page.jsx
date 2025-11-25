import Card from "@/components/Card";
import ProtectedRoute from "@/components/Protected";
import React from "react";

export default async function page() {
  const res = await fetch("https://ejp-task-weld.vercel.app/toys");
  const data = await res.json();
  return (
    <div className="min-h-screen bg-base-200 py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">All Toys</h1>
        <p className="text-base-content/70 mb-12">Explore our all toys</p>
        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.result.map((item) => (
            <Card key={item._id} item={item}></Card>
          ))}
        </div>
      </div>
    </div>
  );
}
