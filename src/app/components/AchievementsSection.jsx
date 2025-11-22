"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const skills = [
  { name: "React / Next.js", level: 95 },
  { name: "Flutter / Dart", level: 92 },
  { name: "Node.js & Backend", level: 88 },
  { name: "UI/UX Design", level: 94 },
  { name: "Figma & Prototyping", level: 96 },
  { name: "Graphic Design", level: 90 },
  { name: "Motion Design", level: 85 },
  { name: "Three.js / 3D", level: 78 },
];

const SkillsSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section className="py-16 px-4 xl:px-16 " id="skills">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          ref={ref}
        >
          {/* Titre principal */}
          <h2 className="text-center text-4xl sm:text-6xl font-extrabold text-white mb-4">
            Compétences &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-amber-600">
              Superpouvoirs
            </span>
          </h2>

          <p className="text-center text-gray-400 text-lg mb-16 max-w-2xl mx-auto">
            Les outils et technologies avec lesquels je transforme des idées en réalités puissantes et esthétiques.
          </p>

          {/* Grille des compétences */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className="group"
              >
                <div className="flex justify-between mb-3">
                  <span className="text-xl font-semibold text-white group-hover:text-yellow-400 transition-colors duration-300">
                    {skill.name}
                  </span>
                  <span className="text-yellow-400 font-bold">{skill.level}%</span>
                </div>

                {/* Barre de progression */}
                <div className="h-6 bg-gray-800 rounded-full overflow-hidden border border-gray-700">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${skill.level}%` } : {}}
                    transition={{ duration: 1.5, delay: index * 0.1, ease: "easeOut" }}
                    className="h-full rounded-full bg-gradient-to-r from-yellow-400 via-orange-500 to-amber-600 shadow-lg shadow-orange-500/50 relative overflow-hidden"
                  >
                    {/* Effet brillance qui traverse */}
                    <motion.div
                      initial={{ x: "-100%" }}
                      animate={inView ? { x: "200%" } : {}}
                      transition={{
                        duration: 2,
                        delay: 0.5 + index * 0.1,
                        repeat: Infinity,
                        repeatDelay: 3,
                      }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                    />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Clin d'œil final */}
          <div className="text-center mt-16">
            <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
              NAMELESS never stops leveling up ⚡
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;


// "use client";
// import React from "react";
// import dynamic from "next/dynamic";

// const AnimatedNumbers = dynamic(
//   () => {
//     return import("react-animated-numbers");
//   },
//   { ssr: false }
// );

// const achievementsList = [
//   {
//     metric: "Projects",
//     value: "100",
//     postfix: "+",
//   },
//   {
//     prefix: "~",
//     metric: "Users",
//     value: "100,000",
//   },
//   {
//     metric: "Awards",
//     value: "7",
//   },
//   {
//     metric: "Years",
//     value: "5",
//   },
// ];

// const AchievementsSection = () => {
//   return (
//     <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
//       <div className="sm:border-[#33353F] sm:border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between">
//         {achievementsList.map((achievement, index) => {
//           return (
//             <div
//               key={index}
//               className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0"
//             >
//               <h2 className="text-white text-4xl font-bold flex flex-row">
//                 {achievement.prefix}
//                 <AnimatedNumbers
//                   includeComma
//                   animateToNumber={parseInt(achievement.value)}
//                   locale="en-US"
//                   className="text-white text-4xl font-bold"
//                   configs={(_, index) => {
//                     return {
//                       mass: 1,
//                       friction: 100,
//                       tensions: 140 * (index + 1),
//                     };
//                   }}
//                 />
//                 {achievement.postfix}
//               </h2>
//               <p className="text-[#ADB7BE] text-base">{achievement.metric}</p>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default AchievementsSection;
