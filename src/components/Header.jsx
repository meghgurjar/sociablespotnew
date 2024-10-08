import React from "react";
import { Link } from "react-router-dom";
import Wave from "./UI/Wave";
import logo from "../Images/logo.1.jpg";
import {useAuth} from "../contexts/AuthContext"  

function Header() {
  const { currentUser } = useAuth();

  return (
    
    <div className="relative z-0 ">
      <div className="absolute  w-screen -top-20  overflow-hidden">
        <Wave />
      </div>
      <div className="relative flex items-center justify-between w-screen pt-8 px-20">
        <div className="flex items-center text-primary-textgreen font-extrabold text-lg">
          <div className="flex flex-col items-start mr-2">
            {/* <span>Sociable</span> */}
            {/* <span>Spot</span> */}
          </div>
          <img src={logo} alt="Logo" className="w-28 h-28 mix-blend-multiply place-items-start" />
        </div>
        <div className="flex items-center gap-x-8   text-primary h-16">
          <Link to="/" className="cursor-pointer text-xl hover:border hover:border-black text-black no-underline">
            Home
          </Link>
          <Link to="/services" className="cursor-pointer text-xl   hover:border hover:border-black text-black no-underline">
            Services
          </Link>
          <Link to="/blogs" className="cursor-pointer text-xl  hover:border hover:border-black text-black no-underline">
            Blogs
          </Link>
          <Link to="/about" className="cursor-pointer text-xl  hover:border hover:border-black text-black no-underline">
            About
          </Link>
          <div className="flex-1 flex justify-end ">
            <Link to="/contact" className="text-black text-xl  hover:border hover:border-black no-underline">
              Contact Us
            </Link>
            {currentUser ? (
              <div className="flex items-center">
                <span className="mr-4">Welcome, {currentUser.email}</span>
                <button
                  to="/dashboard"
                  className="cursor-pointer bg-neutral-600 text-white rounded-3xl px-8 py-2"
                >
                  Dashboard
                </button>
              </div>
            ) : (
              <Link
                to="/auth"
                className="cursor-pointer   bg-neutral-600 text-white rounded-3xl mr-28 pr-8 pl-8 py-2 flex items-center justify-center absolute right-9 top-5 mt-12 no-underline"
              >
                Login / Sign Up
              </Link>
            )}
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Header;
