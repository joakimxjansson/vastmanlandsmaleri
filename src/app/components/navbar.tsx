"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FaBars, FaPhone, FaTimes } from "react-icons/fa";

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const links = [
        { id: 1, link: "hem" },
        { id: 2, link: "tjänster" },
        { id: 3, link: "Få offert" },
        { id: 4, link: "Kontakt" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
                scrolled ? "bg-black/60 shadow-lg backdrop-blur" : "bg-transparent"
            }`}
        >
            <div className="flex items-center justify-between max-w-7xl mx-auto px-4 h-20">
                {/* Logotyp */}
                <div className="w-44 md:w-60">

                    <Image
                        src="/images/logonyy.png"
                        alt="logo"
                        width={600}
                        height={600}
                        className="w-full h-auto"
                        priority
                    />
                </div>

                {/* Desktop meny */}
                <nav className="hidden md:flex flex-1 justify-center">
                    <ul className="flex items-center space-x-6 bg-white/90 px-6 py-2 rounded-full shadow-md">
                        {links.map(({ id, link }) => (
                            <li key={id}>
                                <Link
                                    href={`#${link}`}
                                    className="capitalize text-lg font-medium text-gray-800 hover:text-black transition duration-200"
                                >
                                    {link}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Telefonnummer */}
                <a
                    href="tel:0727009897"
                    className="hidden md:flex items-center text-white bg-green-700 px-4 py-2 rounded-full text-lg hover:scale-105 transition"
                >
                    <FaPhone className="mr-2" />
                    072-700 98 97
                </a>

                {/* Hamburger ikon */}
                <div
                    onClick={() => setNav(!nav)}
                    className="md:hidden z-50 text-white cursor-pointer"
                >
                    {nav ? <FaTimes size={28} /> : <FaBars size={28} />}
                </div>
            </div>

            {/* Mobilmeny */}
            {nav && (
                <ul className="md:hidden flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-300 space-y-6 pt-20 z-40">
                    {links.map(({ id, link }) => (
                        <li
                            key={id}
                            onClick={() => setNav(false)}
                            className="text-3xl capitalize"
                        >
                            <Link href={`#${link}`}>{link}</Link>
                        </li>
                    ))}
                    <li className="mt-6 text-2xl">
                        <a href="tel:0727009897" className="flex items-center">
                            <FaPhone className="mr-2" />
                            072-700 98 97
                        </a>
                    </li>
                </ul>
            )}
        </header>
    );
};

export default Navbar;
