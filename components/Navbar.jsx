'use client'
import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { use, useEffect, useRef, useState } from 'react'
import { throttle } from 'lodash'

const Navbar = ({isDarkMode, setIsDarkMode}) => {
    const [isScroll, setIsScroll] = useState(false);
    const sideMenuRef = useRef();
    const [isActive, setIsActive] = useState("top");    // to track which section is active

    useEffect(() => {
        const handleScroll = throttle(() => {
            // --- Active section logic ---
            const sections = ["top", "about", "project", "contact"];    // track which section is active
            const scrollPosition = window.scrollY + 300;    // Adjust offset as needed
            let currentSection = "top";
            
            sections.forEach((section) => {
                const element = document.getElementById(section);
                if (element && scrollPosition >= element.offsetTop) {
                    currentSection = section;
                }
            });
            
            setIsActive(currentSection);
            setIsScroll(window.scrollY > 50);   // Set to true if scrolled more than 50px
        }, 16); // 16ms throttle

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // Run once on mount to set initial state

        return () => {
            window.removeEventListener("scroll", handleScroll);
            handleScroll.cancel(); // Clean up throttled function
        };
    }, []);

    const openMenu = () => {
        sideMenuRef.current.style.transform = "translateX(-16rem)";
    }

    const closeMenu = () => {
        sideMenuRef.current.style.transform = "translateX(16rem)";
    }

    return (
        <>
        <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden'>
            <Image src={assets.header_bg_color} alt='' className="w-full" />
        </div>
        <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-2 flex items-center justify-between z-50 
            ${isScroll ? "bg-white/50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:shadow-dark" : ""}`}>
            <a href="/">
                {/* <Image src={isDarkMode ? assets.logo_dark : assets.logo} alt='' className="w-28 cursor-pointer mr-14" /> */}
                <Image src={isDarkMode ? '/noah-logo-darkk-removebg.png' : '/noah-logo-removebg.png'} alt='' className="w-28 cursor-pointer mr-14" width={500} height={200}/>
            </a>

            <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 
                ${isScroll ? "" : "bg-white/50 shadow-sm dark:border dark:border-white/50 dark:bg-transparent"} `}>
                <li><a className={`font-Ovo hover:text-gray-500 transition duration-300
                    ${isActive === "top" ? "active" : ""}`} href="#top">Home</a></li>
                <li><a className={`${isActive === "about" ? "active" : ""} font-Ovo hover:text-gray-500 transition duration-300`} href="#about">About</a></li>
                <li><a className={`${isActive === "project" ? "active" : ""} font-Ovo hover:text-gray-500 transition duration-300`} href="#project">Projects</a></li>
            </ul>

            <div className='flex items-center gap-4'>
                <button onClick={()=> setIsDarkMode(prev => !prev)} className='cursor-pointer'>    {/* toggle darkMode  */}
                    <Image src={isDarkMode ? assets.sun_icon : assets.moon_icon} alt='' className="w-6" />
                </button>
                <a href="#contact" className='font-Ovo hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 dark:border-white/50'>
                    Contact <Image src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon} alt='' className="w-3" />
                </a>
                <button className='block md:hidden ml-3' onClick={openMenu}>
                    <Image src={isDarkMode ? assets.menu_white : assets.menu_black} alt='' className="w-6" />
                </button>
            </div>

            {/*--------- Mobile menu ----------- */}

            <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500
            dark:text-white dark:bg-darkHover'> 

                <div className='absolute right-6 top-6' onClick={closeMenu}>
                    <Image src={isDarkMode ? assets.close_white : assets.close_black} alt='' className="w-5 cursor-pointer" />
                </div>

                <li><a onClick={closeMenu} href="#top">Home</a></li>
                <li><a onClick={closeMenu} href="#about">About me</a></li>
                <li><a onClick={closeMenu} href="#project">Projects</a></li>
                <li><a onClick={closeMenu} href="#contact">Contact me</a></li>
            </ul>

        </nav>
        </>
    )
}

export default Navbar