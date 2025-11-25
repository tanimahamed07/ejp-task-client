"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

export default function LoginPage() {
  const { login, googleLogin, user } = useAuth();
  const router = useRouter();
  console.log(user)
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      await login(email, password);
      router.push("/");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await googleLogin();
      router.push("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="card w-96 bg-base-100 shadow-xl p-6">
        <h1 className="text-2xl font-bold text-center mb-6">Login</h1>

        {error && (
          <p className="text-red-500 text-center mb-3">
            {error}
          </p>
        )}

        <form onSubmit={handleSubmit}>
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="input input-bordered w-full"
              required
            />
          </div>

          <div className="form-control mb-6">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="input input-bordered w-full"
              required
            />
          </div>

          <button type="submit" className="btn btn-primary w-full">
            Login
          </button>
        </form>

        <button
          onClick={handleGoogleLogin}
          className="btn bg-white text-black border-[#e5e5e5] my-4"
        >
          {/* Google Icon */}
          <svg width="16" height="16" viewBox="0 0 512 512">
            <g>
              <path fill="#fff" d="M0 0H512V512H0"></path>
              <path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path>
              <path fill="#4285f4" d="M386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path>
              <path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path>
              <path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path>
            </g>
          </svg>

          Login with Google
        </button>

        <p className="text-center text-sm text-base-content/70 mt-4">
          Don't have an account?{" "}
          <a href="/register" className="text-primary font-semibold">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
}
