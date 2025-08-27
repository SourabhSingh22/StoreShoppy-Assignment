import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import {
  MdDashboard, MdShoppingCart, MdWork, MdSchool,
  MdPerson, MdAccountCircle, MdGroups, MdArticle
} from "react-icons/md";
import { PiChatsCircleBold } from "react-icons/pi";
import snowflake from "../assets/snowflake.png";

const Profile = ({ openMenu }) => {
  const [showUserProfileItems, setShowUserProfileItems] = useState(false);

  const showItems = () => {
    setShowUserProfileItems(!showUserProfileItems);
  };

  return (
    <aside
    className={`
        fixed md:static top-0 left-0 h-full bg-white
        transition-all duration-500 ease-in-out
        ${openMenu ? "w-52 opacity-100" : "w-0 opacity-0 overflow-hidden"}
      `}
    >
      {/* User Profile */}
      <div className="flex items-center gap-3 px-4 py-4">
        <FaUserCircle className="text-3xl text-gray-700" />
        <span className="font-semibold text-lg text-gray-700">ByeWind</span>
      </div>

      {/* Favorites */}
      <div className="px-6 mb-6">
        <p className="text-gray-400 text-lg mb-2">Favorites</p>
        <ul className="space-y-2 text-gray-700 ml-3">
          <li className="cursor-pointer hover:text-black">• Overview</li>
          <li className="cursor-pointer hover:text-black">• Projects</li>
        </ul>
      </div>

      {/* Dashboards */}
      <div className="px-6 mb-3">
        <p className="text-gray-400 text-lg mb-2">Dashboards</p>
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-center gap-3 p-2 rounded-lg cursor-pointer hover:bg-gray-100">
            <MdDashboard className="text-lg" /> Default
          </li>
          <li className="flex items-center gap-3 p-2 rounded-lg cursor-pointer hover:bg-gray-100">
            <MdShoppingCart className="text-lg" /> eCommerce
          </li>
          <li className="flex items-center gap-3 p-2 rounded-lg cursor-pointer hover:bg-gray-100">
            <MdWork className="text-lg" /> Projects
          </li>
          <li className="flex items-center gap-3 p-2 rounded-lg cursor-pointer hover:bg-gray-100">
            <MdSchool className="text-lg" /> Online Courses
          </li>
        </ul>
      </div>

      {/* Pages */}
      <div className="px-6 mb-2">
        <p className="text-gray-400 text-lg mb-2">Pages</p>
        <ul className="space-y-1 text-gray-700">
          <li
            className="flex items-center gap-3 p-2 rounded-lg cursor-pointer hover:bg-gray-100 text-lg"
            onClick={showItems}
          >
            <MdPerson className="text-lg" /> User Profile
          </li>

          {/* Dropdown with Smooth Transition */}
          <div
            className={`
              ml-5 overflow-hidden transition-all duration-300 ease-in-out
              ${showUserProfileItems ? "max-h-60 opacity-100" : "max-h-0 opacity-0"}
            `}
          >
            <li className="flex items-center gap-3 p-2 rounded-lg cursor-pointer hover:bg-gray-100">
              Overview
            </li>
            <li className="flex items-center gap-3 p-2 rounded-lg cursor-pointer hover:bg-gray-100">
              Projects
            </li>
            <li className="flex items-center gap-3 p-2 rounded-lg cursor-pointer hover:bg-gray-100">
              Campaigns
            </li>
            <li className="flex items-center gap-3 p-2 rounded-lg cursor-pointer hover:bg-gray-100">
              Documents
            </li>
            <li className="flex items-center gap-3 p-2 rounded-lg cursor-pointer hover:bg-gray-100">
              Followers
            </li>
          </div>
        </ul>
      </div>

      {/* Others */}
      <div className="px-6 mb-6">
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-center gap-3 p-2 rounded-lg cursor-pointer hover:bg-gray-100">
            <MdAccountCircle className="text-lg" /> Account
          </li>
          <li className="flex items-center gap-3 p-2 rounded-lg cursor-pointer hover:bg-gray-100">
            <MdGroups className="text-lg" /> Corporate
          </li>
          <li className="flex items-center gap-3 p-2 rounded-lg cursor-pointer hover:bg-gray-100">
            <MdArticle className="text-lg" /> Blog
          </li>
          <li className="flex items-center gap-3 p-2 rounded-lg cursor-pointer hover:bg-gray-100">
            <PiChatsCircleBold className="text-lg" /> Social
          </li>
        </ul>
      </div>

      {/* Bottom Branding */}
      <div className="px-6 py-6 flex items-center gap-2 justify-center">
        <img src={snowflake} className="w-5 mt-1" alt="snowflake" />
        <p className="text-blue-500 text-lg">
          snow<span className="bg-gradient-to-r from-gray-300 to-gray-600 bg-clip-text text-transparent">ui</span>
        </p>
      </div>
    </aside>
  );
};

export default Profile;
