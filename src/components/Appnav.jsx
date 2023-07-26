import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { postCatergory } from "../api/APICall";

const Appnav = () => {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    (async ()=>{
      let res = await postCatergory();
      setCategories(res);
    })()
  }, []);

  return (
    <div className="app-nav shadow">
      <div className="container">
      <div className="navbar bg-base-100 ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li className="font-bold">
              <NavLink to={"/"}>হোম</NavLink>
            </li>
            {categories.map((menu, index) => {
              return (
                <li key={index}>
                  <NavLink to={"/bycategory/" + menu["id"]}>
                    {menu["name"]}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
        <a className="normal-case text-xl font-bold">.আমার ব্লগ</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li className="font-bold">
            <NavLink to={"/"}>হোম</NavLink>
          </li>
          {categories.map((menu, index) => {
            return (
              <li className="font-bold">
                <NavLink to={"/bycategory/" + menu["id"]}>
                  {menu["name"]}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
      </div>
    </div>
  );
};

export default Appnav;
