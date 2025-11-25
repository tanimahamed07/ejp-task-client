"use client";
import { useAuth } from "@/context/AuthContext";
import Link from "next/link";
import { useRouter } from "next/navigation";
import NavLink from "./NavLink";
import { Fade } from "react-awesome-reveal";
export default function Navbar() {
  const { user, logout } = useAuth();
  const router = useRouter();
  const handleLogout = async () => {
    try {
      await logout();
      router.push("/login");
    } catch (err) {
      console.log("Logout error:", err);
    }
  };

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink href="/">Home</NavLink>
            </li>
            <li>
              <NavLink href="/shop">Shop+</NavLink>
            </li>
            <li>
              <NavLink href="/add-toy">Add Toys</NavLink>
            </li>
            <li>
              <NavLink href="/manage-toy">Manage Toys</NavLink>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Toy Land</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
                   <Fade cascade damping={0.2} triggerOnce={true}>
          <li>
            <NavLink href="/">Home</NavLink>
          </li>
          <li>
            <NavLink href="/shop">Shop+</NavLink>
          </li>
          <li>
            <NavLink href="/add-toy">Add Toys</NavLink>
          </li>
          <li>
            <NavLink href="/manage-toy">Manage Toys</NavLink>
          </li>
          </Fade>
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="dropdown dropdown-end">
            <label
              tabIndex={0}
              className="btn btn-primary btn-outline flex items-center justify-center w-12 h-12 rounded-full overflow-hidden p-0"
            >
              {user.photoURL ? (
                <img
                  src={user.photoURL}
                  alt={user.displayName || "User"}
                  className="w-full h-full object-cover"
                />
              ) : user.displayName ? (
                <span className="text-white font-bold text-lg">
                  {user.displayName
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .toUpperCase()}
                </span>
              ) : (
                <span className="text-white font-bold text-lg">U</span>
              )}
            </label>

            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <span className="font-semibold">
                  {user.displayName || "No Name"}
                </span>
              </li>
              <li>
                <span className="text-sm text-gray-500">{user.email}</span>
              </li>
              <li>
                <button
                  onClick={handleLogout}
                  className="btn btn-error btn-sm w-full mt-2"
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <Link href="/register" className="btn btn-primary btn-outline">
            Register
          </Link>
        )}
      </div>
    </div>
  );
}
