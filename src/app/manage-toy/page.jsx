"use client";
import Link from "next/link";
import ProtectedRoute from "@/components/Protected";
import { useAuth } from "@/context/AuthContext";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

export default function Page() {
  const { user } = useAuth();
  const [toys, setToys] = useState([]);

  useEffect(() => {
    if (user?.email) {
      fetch(`https://ejp-task-weld.vercel.app/manage-toy/${user.email}`)
        .then((res) => res.json())
        .then((data) => setToys(data.result));
    }
  }, [user]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://ejp-task-weld.vercel.app/toy/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.success) {
              setToys((prev) => prev.filter((toy) => toy._id !== id));
              Swal.fire({
                title: "Deleted!",
                text: "Your toy has been deleted.",
                icon: "success",
              });
            }
          })
          .catch((err) => console.error(err));
      }
    });
  };

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-base-200 py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Manage Your Toy</h1>

          {/* Responsive Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {toys.map((toy) => (
              <div
                key={toy._id}
                className="card bg-base-100 shadow-xl text-left"
              >
                <figure className="h-52 overflow-hidden">
                  <img
                    src={toy.image}
                    alt={toy.title}
                    className="w-full h-full object-cover"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{toy.title}</h2>
                  <p className="text-base-content/70 line-clamp-2">
                    {toy.description}
                  </p>
                  <div className="text-lg font-semibold text-primary mt-2">
                    ${toy.price}
                  </div>
                  <div className="card-actions mt-4 flex justify-between">
                    <Link href={`/toys/${toy._id}`}>
                      <button className="btn btn-primary btn-sm">
                        Details
                      </button>
                    </Link>
                    <button
                      onClick={() => handleDelete(toy._id)}
                      className="btn btn-error btn-sm"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}
