import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t border-[#33353F] bg-[#121212] py-12 px-6 mt-20">
      <div className="max-w-7xl mx-auto">

        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

          {/* === LOGO à gauche === */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/LOGO2.png"
              alt="NAMELESS – Logo"
              width={180}
              height={70}
              className="h-11 w-auto object-contain brightness-150 hover:brightness-200 transition"
              priority
            />
          </Link>

          {/* === Texte central (mobile) / droite (desktop) === */}
          <div className="text-center md:text-right space-y-3">
            <p className="text-slate-400 text-sm">
              © {new Date().getFullYear()} NAMELESS. Tous droits réservés.
            </p>
          </div>

        </div>
        {/* Ligne de séparation */}
        {/* <div className="mt-10 pt-8 border-t border-gray-800/50">
          <p className="text-center text-slate-600 text-xs">
            Fait avec Next.js 14 • Tailwind • Framer Motion • Beaucoup de café
          </p>
        </div> */}

      </div>
    </footer>
  );
};

export default Footer;