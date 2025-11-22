// "use client";
// import React from "react";
// import Image from "next/image";
// import { TypeAnimation } from "react-type-animation";
// import { motion } from "framer-motion";
// import Link from "next/link";

// const HeroSection = () => {
//   return (
//     <section className="lg:py-16">
//       <div className="grid grid-cols-1 sm:grid-cols-12">
//         <motion.div
//           initial={{ opacity: 0, scale: 0.5 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.5 }}
//           className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
//         >
//           <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
//               Hello, I&apos;m{" "}
//             </span>
//             <br></br>
//             <TypeAnimation
//               sequence={[
//                 "Youmbi Eloise",
//                 1000,
//                 "Web Developer",
//                 1000,
//                 "Mobile Developer",
//                 1000,
//                 "UI/UX Designer",
//                 1000,
//                 "Graphic Designer",
//                 1000,
//               ]}
//               wrapper="span"
//               speed={50}
//               repeat={Infinity}
//             />
//           </h1>
//           <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
//             voluptuous.
//           </p>
//           <div>
//             <Link
//               href="/#contact"
//               className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
//             >
//               Hire Me
//             </Link>
//             <Link
//               href="/"
//               className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
//             >
//               <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
//                 Download CV
//               </span>
//             </Link>
//           </div>
//         </motion.div>
//         <motion.div
//           initial={{ opacity: 0, scale: 0.5 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.5 }}
//           className="col-span-4 place-self-center mt-4 lg:mt-0"
//         >
//           <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
//             <Image
//               src="/images/ta-photo.png"
//               alt="hero image"
//               className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
//               width={300}
//               height={300}
//             />
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;

"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center py-2 lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-8 max-w-7xl mx-auto px-3 sm:px-8 lg:px-12 xl:px-20 2xl:px-24 w-full">
        {/* Texte à gauche */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="col-span-7 flex flex-col justify-center text-center sm:text-left"
        >
          <h1 className="text-white font-extrabold leading-none">
            {/* "Salut, je suis" plus proche */}
            <span className="block text-transparent bg-clip-text bg-white text-3xl sm:text-5xl lg:text-7xl mb-4">
              Salut, je suis
            </span>

            {/* NAMELESS collé juste en dessous */}
            <span className="block text-4xl sm:text-7xl lg:text-8xl bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-orange-400 to-amber-500 drop-shadow-2xl">
              NAMELESS
            </span>
          </h1>

          {/* Typewriter */}
          <div className="h-16 sm:h-20 mt-6 mb-10">
            <TypeAnimation
              sequence={[
                "Développeur Fullstack",
                1800,
                "Spécialiste Mobile",
                1800,
                "UI/UX Designer",
                1800,
                "Graphic Designer",
                1800,
                "Youmbi Eloise",
                3000,
              ]}
              wrapper="p"
              speed={30}
              deletionSpeed={50}
              className="text-2xl sm:text-3xl lg:text-5xl font-bold text-yellow-400 inline-block"
              repeat={Infinity}
            />
          </div>

          <p className="text-gray-300 text-lg sm:text-xl lg:text-2xl mb-10 max-w-2xl mx-auto sm:mx-0">
            Créateur multidisciplinaire passionné par le code, le design et expérience utilisateur.<br />
            Je transforme des idées en applications mobiles puissantes et en interfaces qui marquent les esprits.
          </p>

          {/* Boutons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center sm:justify-start">
            <Link
              href="/#contact"
              className="group px-10 py-5 text-lg font-bold text-black rounded-full bg-gradient-to-r from-yellow-400 via-orange-500 to-amber-500 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/50 transition-all duration-300"
            >
              <span className="flex items-center gap-3">
                Me contacter
                <span className="group-hover:translate-x-2 transition-transform">→</span>
              </span>
            </Link>

            <Link
              href="https://github.com/lilfranck"
              target="_blank"
              className="flex items-center justify-center gap-3 px-10 py-5 text-lg font-bold rounded-full border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400/10 transition-all duration-300 backdrop-blur-sm"
            >
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              Voir mon GitHub
            </Link>
          </div>
        </motion.div>

               {/* Photo à droite - 100% responsive */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -8 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.1, delay: 0.3 }}
          className="col-span-7 lg:col-span-5 flex justify-center items-center"
        >
          <div className="relative group w-full max-w-[280px] sm:max-w-[400px] lg:max-w-[460px]">
            {/* Glow jaune/orange animé */}
            <div className="absolute -inset-2 bg-gradient-to-r from-yellow-400 via-orange-500 to-amber-600 rounded-full blur-2xl opacity-60 group-hover:opacity-90 animate-pulse transition duration-1000"></div>

            {/* Cercle photo - taille fluide et contenue */}
            <div className="aspect-square rounded-full bg-gradient-to-br from-yellow-900/30 via-orange-900/30 to-black relative overflow-hidden border-4 border-yellow-500/30 shadow-2xl shadow-orange-500/30">
              <Image
                src="/images/ta-photo.png"
                alt="NAMELESS - Youmbi Eloise"
                fill
                sizes="(max-width: 640px) 280px, (max-width: 1024px) 380px, 460px"
                className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;