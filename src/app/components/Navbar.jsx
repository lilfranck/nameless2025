"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon, SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import Image from "next/image";
import { motion } from "framer-motion";

const navLinks = [
  { title: "A Propos", path: "#about" },
  { title: "Projets", path: "#projects" },
  { title: "Contact", path: "#contact" },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);

  // === Gestion du thème au chargement + sauvegarde ===
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initial = saved ? saved === "dark" : prefersDark;

    setIsDark(initial);
    if (initial) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newDark = !isDark;
    setIsDark(newDark);

    if (newDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#121212] bg-opacity-95 backdrop-blur-md border-b border-[#33353F] dark:bg-[#121212] dark:border-[#33353F]">
      <div className="flex flex-wrap items-center justify-between mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">

        {/* === LOGO === */}
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

        {/* === DROITE : MENU DESKTOP + TOGGLE === */}
        <div className="hidden md:flex items-center space-x-8 lg:space-x-12">
          <ul className="flex items-center space-x-8 lg:space-x-12">
            {navLinks.map((link) => (
              <li key={link.title}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>

          {/* === TOGGLE THÈME === */}
          <button
            onClick={toggleTheme}
            className="p-3 rounded-full bg-gray-800 dark:bg-gray-200 hover:bg-gray-700 dark:hover:bg-gray-300 transition-all duration-300 group"
            aria-label="Changer de thème"
          >
            <motion.div
              animate={{ rotate: isDark ? 0 : 360 }}
              transition={{ duration: 0.5 }}
            >
              {isDark ? (
                <SunIcon className="h-6 w-6 text-yellow-400 group-hover:text-yellow-300" />
              ) : (
                <MoonIcon className="h-6 w-6 text-slate-800 group-hover:text-slate-900" />
              )}
            </motion.div>
          </button>
        </div>

        {/* === MOBILE : Bouton menu + toggle dans le menu overlay === */}
        <div className="md:hidden flex items-center flex gap-3">
          {/* Toggle visible même sur mobile */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-gray-800 dark:bg-gray-200"
            aria-label="Changer de thème"
          >
            {isDark ? (
              <SunIcon className="h-6 w-6 text-yellow-400" />
            ) : (
              <MoonIcon className="h-6 w-6 text-slate-800" />
            )}
          </button>

          {/* Bouton menu hamburger */}
          <button
            onClick={() => setNavbarOpen(!navbarOpen)}
            className="p-2 rounded-lg text-slate-200 hover:text-white hover:bg-gray-800/50 transition"
            aria-label="Toggle menu"
          >
            {navbarOpen ? <XMarkIcon className="h-7 w-7" /> : <Bars3Icon className="h-7 w-7" />}
          </button>
        </div>
      </div>

      {/* === MENU MOBILE OVERLAY (avec toggle à l'intérieur aussi) === */}
      {navbarOpen && (
        <MenuOverlay
          links={navLinks}
          onClose={() => setNavbarOpen(false)}
          isDark={isDark}
          toggleTheme={toggleTheme}
        />
      )}
    </nav>
  );
};

export default Navbar;