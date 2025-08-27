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

const Dashboard = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [openMenu, setOpenMenu] = useState(true);
    const [rightMenuOpen, setRightMenuOpen] = useState(true);

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
        <div className={`w-full min-h-screen transition-all duration-300 ${darkMode ? "bg-gray-900 text-white" : "bg-white text-black"}`}>
            <div className="flex flex-col md:flex-row">

                {/* Left Profile Sidebar */}

                <Profile openMenu={openMenu} setOpenMenu={setOpenMenu} />

                <main className={`flex-1 border-l border-r ${darkMode ? "border-gray-700" : "border-gray-200"}`}>

                    {/* NAVBAR */}
                    <nav className={`${darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"} flex flex-col sm:flex-row items-center justify-between gap-4 px-4 sm:px-8 py-4 border-b shadow-sm`}>
                        <div className='text-sm sm:text-lg flex items-center gap-2 sm:gap-4'>
                            <BiFoodMenu className='text-xl sm:text-2xl cursor-pointer' onClick={handleLeftMenu} />
                            <CiStar className='text-xl sm:text-2xl' />
                            <p className='text-gray-400 text-sm sm:text-lg'>Dashboards</p>
                            <p className='text-gray-400 text-sm sm:text-lg'>/</p>
                            <p className='text-sm sm:text-lg'>Default</p>
                        </div>

                        {/* Search Bar + Icons */}
                        <div className='flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto'>
                            <div className={`${darkMode ? "bg-gray-700 border-gray-600" : "bg-gray-200 border-gray-50"} flex items-center text-xs sm:text-lg px-2 gap-2 py-1 rounded-lg border w-full sm:w-auto`}>
                                <IoSearchOutline className='text-gray-400 text-base sm:text-lg' />
                                <input type="text" placeholder='Search' className={`outline-none text-xs sm:text-sm bg-transparent flex-1 ${darkMode ? "text-white" : "text-black"}`} />
                                <div className='hidden sm:flex items-center text-gray-400 text-xl gap-1 pr-1'>
                                    <MdKeyboardCommandKey /><p className='pb-1'>/</p>
                                </div>
                            </div>

                            <div className='text-xl sm:text-2xl flex gap-3 sm:gap-4'>
                                <button onClick={() => setDarkMode(!darkMode)}>
                                    {darkMode ? <MdOutlineLightMode /> : <MdDarkMode />}
                                </button>
                                <IoTimerOutline />
                                <PiBellDuotone />
                                <BiFoodMenu onClick={handleRightMenu} className="cursor-pointer" />
                            </div>
                        </div>
                    </nav>

                    {/* CONTENT */}
                    <div className='w-full mt-8 px-4 sm:px-8'>

                        {/* Heading */}
                        <div className='flex items-center gap-2 mb-8'>
                            <h1 className='font-semibold text-base sm:text-lg'>Today</h1>
                            <IoIosArrowDown className='mt-1 text-gray-500 text-sm sm:text-lg' />
                        </div>

                        {/* Stats Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            {stats.map((item, index) => (
                                <div key={index} className={`p-4 rounded-2xl shadow-sm ${colors[index]} flex flex-col`}>
                                    <p className="text-gray-500 text-sm sm:text-base">{item.title}</p>
                                    <div className={`flex items-center justify-between text-sm sm:text-[14px] my-4 ${item.isPositive ? "text-green-600" : "text-red-600"}`}>
                                        <h2 className="text-base sm:text-xl md:text-3xl font-bold">{item.value}</h2>
                                        <div className='flex items-center gap-1'>
                                            {item.isPositive ? <BsArrowUpRight size={14} /> : <BsArrowDownRight size={14} />}
                                            <span>{item.change}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Third section (Images) */}
                        <section className='mt-12 flex flex-col lg:flex-row items-center gap-7'>
                            <div className='w-full lg:w-[70%]'>
                                <img src={total_users} alt="total_users" className='w-full h-auto max-h-52 sm:max-h-72 lg:max-h-[400px] shadow-md rounded-2xl bg-gray-50 object-contain' />
                            </div>
                            <div className='w-full lg:w-[30%] flex justify-center'>
                                <img src={traffic_by_website} alt="traffic_by_website" className='w-full h-auto max-h-52 sm:max-h-72 lg:max-h-[400px] shadow-md rounded-2xl bg-gray-50 object-contain' />
                            </div>
                        </section>

                        {/* Fourth section */}
                        <section className='mt-12 w-full flex flex-col lg:flex-row items-center justify-between gap-6'>
                            <div className='w-full lg:w-[50%] shadow-lg rounded-2xl'>
                                <img src={TrafficByDevice} alt="TrafficByDevice" className='w-full h-auto rounded-2xl object-contain' />
                            </div>
                            <div className='w-full lg:w-[50%] shadow-lg rounded-2xl'>
                                <img src={TrafficByLocation} alt="TrafficByLocation" className='w-full h-auto rounded-2xl object-contain' />
                            </div>
                        </section>
                    </div>
                </main>

                {/* Right Notification Sidebar */}
                <Notifications open={rightMenuOpen} openMenu={openMenu} setOpenMenu={setOpenMenu} />
            </div>
        </div>
    );
};

export default Dashboard;
