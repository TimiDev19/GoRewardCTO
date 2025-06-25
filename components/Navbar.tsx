"use client";
import React, { useState } from 'react'
import { Nunito_Sans, Tektur } from 'next/font/google';
import Logo from "@/assets/reward.jpg"
import Link from 'next/link';
import Image from 'next/image';
import FadeIn from './FadeIn';
import XIcon from '@mui/icons-material/X';
import TelegramIcon from '@mui/icons-material/Telegram';
import { motion } from "framer-motion";


const tektur = Tektur({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
});

const nunitoSans = Nunito_Sans({
    subsets: ['latin'],
    weight: ['200', '300', '400', '500', '600', '700'],
});

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className=' fixed z-50 w-screen h-[80px]'>
            <FadeIn>
                <div className=' w-full h-[80px] text-green-600 flex items-center justify-between px-[10px] bg-green-500/10 backdrop-blur-sm'>
                    {/* Left Container */}
                    <div className=' w-[30%]'>
                        <div className={nunitoSans.className}>
                            <div className=' flex items-center justify-start'>
                                <Image
                                    src={Logo}
                                    alt='GorReward Logo'
                                    className=' w-[50px] h-[50px] rounded-full'
                                />
                                <h1 className=' uppercase font-semibold text-xl lg:text-2xl ml-3 hidden lg:block'>GorReward</h1>
                            </div>
                        </div>
                    </div>

                    {/* Middle Container */}
                    <div className=' w-[30%] hidden lg:flex items-center justify-center'>
                        <div className={nunitoSans.className}>
                            <div className={'flex items-center justify-center'}>
                                <nav className="space-x-4">
                                    <Link
                                        href="/#home"
                                        className="relative group"
                                    >
                                        Home
                                        <span className="absolute left-1/2 bottom-0 w-0 h-[1px] bg-green-600 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                                    </Link>
                                    <Link
                                        href="/#about"
                                        className="relative group"
                                    >
                                        About
                                        <span className="absolute left-1/2 bottom-0 w-0 h-[1px] bg-green-600 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                                    </Link>
                                    {/* <Link
                                        href="/#services"
                                        className="relative group"
                                    >
                                        Services
                                        <span className="absolute left-1/2 bottom-0 w-0 h-[1px] bg-green-600 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                                    </Link>
                                    <Link
                                        href="/#partnerships"
                                        className="relative group"
                                    >
                                        Partnerships
                                        <span className="absolute left-1/2 bottom-0 w-0 h-[1px] bg-green-600 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                                    </Link> */}
                                    {/* <Link
                                        href="/#contact"
                                        className="relative group"
                                    >
                                        Contact
                                        <span className="absolute left-1/2 bottom-0 w-0 h-[1px] bg-green-600 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                                    </Link> */}
                                </nav>

                            </div>
                        </div>
                    </div>

                    {/* Right Container */}
                    <div className=' lg:w-[30%] flex items-center justify-end'>
                        <div className={nunitoSans.className}>
                            <div className=' flex items-center justify-center'>
                                <Link target='blank' href={"https://t.me/GorbaganaRewards"} className=' focus:outline-none text-sm lg:text-lg mx-2 p-2 border border-green-500 rounded-2xl flex items-center justify-center font-extrabold bg-white/10 backdrop-blur-lg hover:bg-white/0 duration-700'>
                                    <Image
                                        src={Logo}
                                        alt='Apexium Logo'
                                        className=' w-[20px] h-[20px] lg:h-[30px] lg:w-[30px] rounded-full border border-[#ffffff1a] lg:mr-4 mr-2'
                                    />
                                    Join Telegram
                                </Link>
                            </div>
                        </div>
                    </div>

                    <button
                        aria-label="Open menu"
                        className="relative w-12 h-12 flex items-center justify-center cursor-pointer lg:hidden"
                        onClick={toggleSidebar}
                    >
                        {/* Top Line */}
                        <div
                            className={`absolute w-6 h-0.5 bg-current transition-transform duration-300 ${isOpen ? "rotate-45" : "-translate-y-1.5"
                                }`}
                        ></div>

                        {/* Bottom Line */}
                        <div
                            className={`absolute w-6 h-0.5 bg-current transition-transform duration-300 ${isOpen ? "-rotate-45" : "translate-y-1.5"
                                }`}
                        ></div>
                    </button>

                    <motion.div
                        initial={{ width: 0 }} // Initial width of sidebar when closed
                        animate={{ width: isOpen ? "85vw" : 0 }}
                        transition={{
                            type: "spring",
                            stiffness: 100,
                            damping: 20,
                            duration: 0.5,
                        }} // Smooth transition
                        style={{
                            height: "100vh",
                            backgroundColor: "",
                            color: "black",
                            overflow: "hidden",
                            position: "fixed",
                            top: 0,
                            left: 0,
                        }}
                        className=' shadow-md shadow-blue-900 bg-blue-900 navbar-bg text-white'
                    >
                        {/* Sidebar content */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: isOpen ? 1 : 0 }}
                            transition={{ delay: 0.2 }}
                            style={{ padding: "20px" }}
                        >
                            <div className={nunitoSans.className}>
                                <div className=' flex w-full items-center justify-between mb-8 text-green-500'>
                                    <h3 className=' text-xl text-green-500 font-bold'>
                                        <Image
                                            src={Logo}
                                            alt='Apexium Logo'
                                            className=' w-[50px] h-[50px] rounded-full'
                                        />
                                    </h3>
                                    <button
                                        aria-label="Open menu"
                                        className="relative w-12 h-12 flex items-center justify-center cursor-pointer lg:hidden"
                                        onClick={toggleSidebar}
                                    >
                                        {/* Top Line */}
                                        <div
                                            className={`absolute w-6 h-0.5 bg-current transition-transform duration-300 ${isOpen ? "rotate-45" : "-translate-y-1.5"
                                                }`}
                                        ></div>

                                        {/* Bottom Line */}
                                        <div
                                            className={`absolute w-6 h-0.5 bg-current transition-transform duration-300 ${isOpen ? "-rotate-45" : "translate-y-1.5"
                                                }`}
                                        ></div>
                                    </button>
                                </div>
                            </div>
                            <div className={nunitoSans.className}>
                                <ul style={{ listStyle: "none", padding: 0 }}>
                                    <Link
                                        href="/#home"
                                        className="relative group text-green-500 block w-fit mb-4 text-3xl"
                                        onClick={toggleSidebar}
                                    >
                                        Home
                                        <span className="absolute left-1/2 bottom-0 w-0 h-[1px] bg-green-500 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                                    </Link>
                                    <Link
                                        href="/#about"
                                        className="relative group text-green-500 block w-fit mb-4 text-3xl"
                                        onClick={toggleSidebar}
                                    >
                                        About
                                        <span className="absolute left-1/2 bottom-0 w-0 h-[1px] bg-green-500 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                                    </Link>
                                    {/* <Link
                                        href="/#services"
                                        className="relative group text-green-500 block w-fit mb-4 text-3xl"
                                        onClick={toggleSidebar}
                                    >
                                        Services
                                        <span className="absolute left-1/2 bottom-0 w-0 h-[1px] bg-green-500 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                                    </Link>
                                    <Link
                                        href="/#partnerships"
                                        className="relative group text-green-500 block w-fit mb-4 text-3xl"
                                        onClick={toggleSidebar}
                                    >
                                        Partnerships
                                        <span className="absolute left-1/2 bottom-0 w-0 h-[1px] bg-green-500 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                                    </Link> */}
                                    {/* <Link
                                        href="/#contact"
                                        className="relative group text-green-500 block w-fit mb-4 text-3xl"
                                        onClick={toggleSidebar}
                                    >
                                        Contact
                                        <span className="absolute left-1/2 bottom-0 w-0 h-[1px] bg-green-500 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                                    </Link> */}
                                    {/* <Link
                                            href="#"
                                            className="relative group text-white block w-fit mb-4 text-3xl"
                                            onClick={toggleSidebar}
                                        >
                                            Roadmap
                                            <span className="absolute left-1/2 bottom-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                                        </Link> */}
                                    <div className=' w-full flex items-center justify-center mt-6'>
                                        {/* <Link
                                            target='blank'
                                            href={"https://x.com/ApexiumAgency"}
                                            className=' text-green-500 text-2xl mx-2 lg:text-6xl p-2 border-2 border-green-500 rounded-full flex items-center justify-center bg-white/10 backdrop-blur-lg hover:bg-white/0 duration-700'
                                        >
                                            <XIcon />
                                        </Link> */}
                                        <Link
                                            target='blank'
                                            href={"https://t.me/GorbaganaRewards"}
                                            className=' text-green-500 text-2xl mx-2 lg:text-6xl p-2 border-2 border-green-500 rounded-full flex items-center justify-center bg-white/10 backdrop-blur-lg hover:bg-white/0 duration-700'
                                        >
                                            <TelegramIcon />
                                        </Link>
                                    </div>
                                </ul>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </FadeIn>
        </div>
    )
}

export default Navbar
