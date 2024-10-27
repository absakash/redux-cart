import React from "react";
import { GrCart } from "react-icons/gr";
import { Link, NavLink } from "react-router-dom";
import { IoBagHandleOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
const HeaderNavbar = () => {
  const cartProducts=useSelector(state=>state.cart)
  return (
    <div className="navbar bg-base-200 p-5 max-w-[1500px] mx-auto">
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
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Item 10</a>
            </li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-3xl font-bold">Redux</a>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-5">
          <li>
           <NavLink to='/products'>
              Products 
              <IoBagHandleOutline className="w-6 h-6"></IoBagHandleOutline>
           </NavLink>
          </li>
          {/* <li>
            <details>
              <summary>Parent</summary>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </details>
          </li> */}
          <li>
           <NavLink to='/cart'> <GrCart className="w-6 h-6">


           </GrCart>
           
           <span>{cartProducts.length}</span>
           </NavLink>
          </li>
        </ul>
      </div>
    
    </div>
  );
};

export default HeaderNavbar;
