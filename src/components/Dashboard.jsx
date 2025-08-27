import React, { useState } from 'react'
import { CiStar } from "react-icons/ci";
import { BiFoodMenu } from "react-icons/bi";
import { IoSearchOutline } from "react-icons/io5";
import { MdKeyboardCommandKey, MdOutlineLightMode, MdDarkMode } from "react-icons/md";
import { PiBellDuotone } from "react-icons/pi";
import { IoTimerOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { BsArrowDownRight, BsArrowUpRight } from 'react-icons/bs';
import total_users from '../assets/total_users.png';
import traffic_by_website from '../assets/traffic_by_website.png';
import TrafficByDevice from '../assets/TrafficByDevice.png';
import TrafficByLocation from '../assets/TrafficByLocation.png';
import Profile from './Profile';
import Notifications from './Notifications';

const Dashboard = ({ darkMode, setDarkMode }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [rightMenuOpen, setRightMenuOpen] = useState(false);

  const stats = [
    { title: "Views", value: "721K", change: "+11.02%", isPositive: true },
    { title: "Visits", value: "367K", change: "-0.03%", isPositive: false },
    { title: "New Users", value: "1,156", change: "+15.03%", isPositive: true },
    { title: "Active Users", value: "239K", change: "+6.08%", isPositive: true },
  ];
  const colors = ["bg-blue-100", "bg-purple-100", "bg-blue-100", "bg-purple-100"];

  const handleLeftMenu = () => setOpenMenu(!openMenu);
  const handleRightMenu = () => setRightMenuOpen(!rightMenuOpen);

  return (
    <div className={`w-full h-full transition-all duration-300 ${darkMode ? "bg-gray-900 text-white" : "bg-white text-black"}`}>
      <div className="flex">
        {/* Left Profile Sidebar */}
        <Profile openMenu={openMenu} />

        <main className={`flex-1 border-l border-r ${darkMode ? "border-gray-700" : "border-gray-200"}`}>
          <nav className={`${darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"} flex items-center justify-between px-8 py-4 border-b shadow-sm`}>
            <div className='text-xl flex items-center gap-4'>
              <BiFoodMenu className='text-2xl cursor-pointer' onClick={handleLeftMenu} />
              <CiStar className='text-2xl' />
              <p className='text-gray-400 text-lg'>Dashboards</p>
              <p className='text-gray-400 text-lg'>/</p>
              <p className='text-lg'>Default</p>
            </div>
            <div className='flex items-center gap-4'>
              <div className={`${darkMode ? "bg-gray-700 border-gray-600" : "bg-gray-200 border-gray-50"} flex items-center text-lg px-2 gap-2 py-1 rounded-lg border focus-within:border-blue-500`}>
                <IoSearchOutline className='text-gray-400 text-lg' />
                <input type="text" placeholder='Search' className='outline-none text-sm bg-transparent' />
                <div className='flex items-center text-gray-400 text-xl gap-1 pr-1'>
                  <MdKeyboardCommandKey /><p className='pb-1'>/</p>
                </div>
              </div>
              <div className='text-2xl flex gap-4'>
                <button onClick={() => setDarkMode(!darkMode)}>
                  {darkMode ? <MdOutlineLightMode /> : <MdDarkMode />}
                </button>
                <IoTimerOutline />
                <PiBellDuotone />
                <BiFoodMenu onClick={handleRightMenu} className="cursor-pointer" />
              </div>
            </div>
          </nav>

          {/* Content Sections */}
          <div className='w-full mt-12 px-8'>
            <div className='flex items-center gap-2 mb-8'>
              <h1 className='font-semibold text-lg'>Today</h1>
              <IoIosArrowDown className='mt-1 text-gray-500 text-lg' />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
              {stats.map((item, index) => (
                <div key={index} className={`p-4 rounded-2xl shadow-sm ${colors[index]} flex flex-col`}>
                  <p className="text-gray-500 text-lg">{item.title}</p>
                  <div className={`flex items-center justify-between text-lg my-4 ${item.isPositive ? "text-green-600" : "text-red-600"}`}>
                    <h2 className="text-sm md:text-base lg:text-3xl xl:text-2xl font-bold mr-2">{item.value}</h2>
                    <div className='flex items-center gap-1'>
                      {item.isPositive ? <BsArrowUpRight size={16} /> : <BsArrowDownRight size={16} />}
                      <span>{item.change}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Third section */}
            <section className='mt-16 w-full flex items-center justify-between gap-7'>
              <div className='w-[70%]'>
                <img src={total_users} alt="total_users" className='lg:h-[400px] shadow-md rounded-2xl bg-gray-50 object-scale-down lg:w-full w-[60%]' />
              </div>
              <div className='lg:w-[30%]'>
                <img src={traffic_by_website} alt="traffic_by_website" className='lg:h-[400px] rounded-2xl shadow-md bg-gray-50 object-scale-down lg:w-full w-[20]' />
              </div>
            </section>

            {/* forth section */}
            <section className='mt-16 w-full flex items-center justify-between gap-16'>
              <div className='w-[50%] shadow-lg rounded-2xl'>
                <img src={TrafficByDevice} alt="TrafficByDevice" className='rounded-2xl' />
              </div>
              <div className='w-[50%] shadow-lg rounded-2xl'>
                <img src={TrafficByLocation} alt="TrafficByLocation" className='rounded-2xl' />
              </div>
            </section>
          </div>
        </main>

        {/* Right Notification Sidebar */}
        <Notifications open={rightMenuOpen} />
      </div>
    </div>
  );
};

export default Dashboard;
