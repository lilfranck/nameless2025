"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import Image from "next/image";

const navLinks = [
  { title: "A Propos", path: "#about" },
  { title: "Projets", path: "#projects" },
  { title: "Contact", path: "#contact" },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#121212] bg-opacity-95 backdrop-blur-md border-b border-[#33353F]">
      <div className="flex flex-wrap items-center justify-between mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">

        {/* === LOGO – Ultra responsive === */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/LOGO1.png"
            alt="NAMELESS – Logo"
            width={200}
            height={80}
            className="h-10 w-auto sm:h-9 md:h-10 lg:h-11 xl:h-12 object-contain transition-all duration-300"
            priority
          />
        </Link>

        {/* === BOUTON MENU MOBILE === */}
        <div className="md:hidden">
          <button
            onClick={() => setNavbarOpen(!navbarOpen)}
            className="p-2 rounded-lg text-slate-200 hover:text-white hover:bg-gray-800/50 transition"
            aria-label="Toggle menu"
          >
            {navbarOpen ? (
              <XMarkIcon className="h-7 w-7" />
            ) : (
              <Bars3Icon className="h-7 w-7" />
            )}
          </button>
        </div>

        {/* === MENU DESKTOP === */}
        <div className="hidden md:block">
          <ul className="flex items-center space-x-8 lg:space-x-12">
            {navLinks.map((link) => (
              <li key={link.title}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* === MENU MOBILE OVERLAY === */}
      {navbarOpen && <MenuOverlay links={navLinks} onClose={() => setNavbarOpen(false)} />}
    </nav>
  );
};

export default Navbar;