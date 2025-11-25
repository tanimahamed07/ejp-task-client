"use client";

import ProtectedRoute from "@/components/Protected";
import { useAuth } from "@/context/AuthContext";
import { useState } from "react";
import Swal from "sweetalert2";

export default function AddProductPage() {
  const { user } = useAuth();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const productData = {
      image: e.target.image.value,
      title: e.target.title.value,
      description: e.target.description.value,
      price: parseFloat(e.target.price.value),
      date: new Date().toISOString(),
      sellerEmail: user?.email,
    };

    try {
      const response = await fetch("https://ejp-task-weld.vercel.app/add-toy", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(productData),
      });

      const data = await response.json();

      if (data.success) {
        Swal.fire({
          title: "Toy added successfully!",
          icon: "success",
          draggable: true,
        });
        e.target.reset();
      } else {
        alert("Failed to add toy");
      }
    } catch (err) {
      console.error("Error submitting toy:", err);
      alert("Error adding toy: " + err.message);
    }
  };

  return (
    <ProtectedRoute>
      <div className="min-h-screen flex items-center justify-center bg-base-200 p-4">
        <div className="card w-full max-w-xl bg-base-100 shadow-xl p-6">
          <h1 className="text-2xl font-bold text-center mb-6">Add Product</h1>

          <form onSubmit={handleSubmit}>
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Image URL (optional)</span>
              </label>
              <input
                type="text"
                name="image"
                className="input input-bordered w-full"
                placeholder="Enter image URL"
              />
            </div>

            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Title</span>
              </label>
              <input
                type="text"
                name="title"
                className="input input-bordered w-full"
                placeholder="Enter product title"
                required
              />
            </div>

            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <textarea
                name="description"
                className="textarea textarea-bordered w-full"
                placeholder="Enter short description"
                required
              />
            </div>

            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="number"
                name="price"
                className="input input-bordered w-full"
                placeholder="Enter price"
                step="0.01"
                required
              />
            </div>

            <button type="submit" className="btn btn-primary w-full">
              Add Product
            </button>
          </form>
        </div>
      </div>
    </ProtectedRoute>
  );
}
