import React, { use } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { NavLink } from "react-router";
import './Navbar.css'
import { Link } from "react-router";
import { useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const {logOut,user} = use(AuthContext);

  const handleLogOut = () => {
    logOut().then(() => {
      alert('logOut Successful')
    }).then(error => {
      // console.log(error)
    })
  }

    const links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/about'>About</NavLink></li>
        {
          user && <li><NavLink to='/profile'>Profile</NavLink></li>
        }
    </>
  return (
    <div>
      {/* navbar */}
      <nav className="navbar  bg-amber-200 shadow-sm">
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
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
             {
                links
             }
            </ul>
          </div>
          <Link to='/' className="font-bold ml-4 lg:text-4xl text-2xl hover:text-amber-700">Toy Universe</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-xl font-semibold">
           {
            links
           }
          </ul>
        </div>
        <div className="navbar-end mr-5">
          
          {
            user ? <img title={user.displayName} className="w-[50px] p-2 rounded-full" src={user.photoURL} alt="" /> : <a className="mr-7"><FaRegUserCircle size={25}></FaRegUserCircle></a>
          }
         <div className="hover:text-red-600 font-bold">
           {
            user ? <button onClick={handleLogOut}>LogOut</button> :  <Link to='/auth/login'>Log In</Link>
          }
         </div>
         
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
