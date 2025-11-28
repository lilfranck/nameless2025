"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const experiences = [
  { year: "2025 →", title: "FullStack Developer", company: "TARA +", current: true },
  { year: "2024 – 2025", title: "Front-end Angular Developer", company: "TAWA DELIVERY" },
  { year: "2023", title: "Full-stack Developer Intern", company: "TW MICRONICS" },
  { year: "2020", title: "Office & IT Assistant Intern", company: "BRAINEX ENGINEERING SARL" },
];

const education = [
  { year: "2023 – 2024", title: "Bachelor’s Degree in CDRI", institution: "IUT-FV Bandjoun – Cameroun" },
  { year: "2022 – 2023", title: "University Diploma in Software Engineering (DUT)", institution: "IUT-FV Bandjoun – Cameroun" },
  { year: "2020 – 2021", title: "GCE Advanced Level", institution: "HONOR Bilingual Complex – Cameroun" },
];

const skills = [
  "React", "Next.js", "Flutter", "JavaScript", "TypeScript", "Node.js",
  "Tailwind", "Figma", "Photoshop", "Illustrator", "Git", "Docker",
  "Firebase", "MongoDB", "PostgreSQL", "MySQL", "PHP", "Adobe XD"
];

const skillSlug = (name) => name.toLowerCase().replace(".js", "js").replace(" ", "");

const AboutSection = () => {
  const [activeTab, setActiveTab] = useState("story");

  return (
    <section className="py-16 md:py-24 px-3 text-white" id="about">
      <div className="max-w-7xl mx-auto">

        {/* Titre */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-5xl sm:text-6xl md:text-7xl font-extrabold mb-8"
        >
          À propos de{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-amber-600">
            NAMELESS
          </span>
        </motion.h2>

        {/* Onglets centrés */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {["story", "parcours", "skills"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 ${
                activeTab === tab
                  ? "bg-gradient-to-r from-yellow-400 to-orange-500 text-black shadow-xl shadow-orange-500/50"
                  : "bg-gray-800 text-gray-400 hover:text-yellow-400 border border-gray-700"
              }`}
            >
              {tab === "story" && "Mon Histoire"}
              {tab === "parcours" && "Parcours"}
              {tab === "skills" && "Superpouvoirs"}
            </button>
          ))}
        </div>

        {/* Photo + Contenu */}
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center justify-items-center">

            {/* Photo */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full max-w-md flex justify-center"
            >
              <div className="relative group">
                <div className="absolute -inset-3 bg-gradient-to-r from-yellow-400 via-orange-500 to-amber-600 rounded-3xl blur-xl opacity-60 group-hover:opacity-90 transition duration-1000" />
                <Image
                  src="/images/ZORBES.png"
                  alt="NAMELESS – Youmbi Eloise"
                  width={500}
                  height={580}
                  className="rounded-3xl relative shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000 w-full h-auto object-cover"
                  priority
                />
              </div>
            </motion.div>

            {/* Contenu */}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gray-900/50 backdrop-blur-lg rounded-3xl p-8 border border-gray-800 h-full min-h-96 flex flex-col justify-center"
            >
              {/* STORY */}
              {activeTab === "story" && (
                <div className="space-y-5 text-gray-300">
                  <p className="text-lg leading-relaxed">
                    Né au Cameroun, je suis fasciné par la façon dont le <strong className="text-yellow-400">code</strong> et le <strong className="text-yellow-400">design</strong> peuvent changer des vies.
                  </p>
                  <p className="text-lg leading-relaxed">
                    De Java au lycée à la création d’applications utilisées par des milliers de personnes, je repousse sans cesse mes limites.
                  </p>
                  <p className="text-lg leading-relaxed">
                    Aujourd’hui, je suis développeur fullstack, expert mobile, UI/UX designer et directeur artistique — avec cette touche <span className="text-yellow-400 font-bold">NAMELESS</span> qui fait toute la différence.
                  </p>
                </div>
              )}

              {/* PARCOURS */}
              {activeTab === "parcours" && (
                <div className="space-y-4 max-h-96 overflow-y-auto pr-2">
                  {[...experiences, ...education]
                    .sort((a, b) => (b.current ? 1 : 0) - (a.current ? 1 : 0) || b.year.localeCompare(a.year))
                    .map((item, i) => (
                      <div key={i} className="flex gap-4 items-start">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center flex-shrink-0 text-black font-bold text-xs shadow-lg">
                          {item.current ? "NOW" : item.year.match(/\d{4}/)?.[0]}
                        </div>
                        <div className="bg-gray-800/60 backdrop-blur p-4 rounded-xl border border-gray-700 flex-1">
                          <h3 className="font-bold text-yellow-400 text-base">
                            {item.title || item.institution}
                          </h3>
                          <p className="text-sm text-gray-400">{item.company || item.year}</p>
                        </div>
                      </div>
                    ))}
                </div>
              )}

              {/* SKILLS – Mobile = liste à puces / Desktop = grille avec icônes */}
              {activeTab === "skills" && (
                <>
                  {/* Version mobile : liste propre avec tirets */}
                  <div className="sm:hidden space-y-3 text-gray-300">
                    {skills.map((skill) => (
                      <div key={skill} className="flex items-center gap-3">
                        <span className="text-yellow-400">–</span>
                        <span className="text-base">{skill}</span>
                      </div>
                    ))}
                  </div>

                  {/* Version desktop/tablette : grille avec logos */}
                  <div className="hidden sm:grid sm:grid-cols-4 lg:grid-cols-4 gap-5">
                    {skills.map((skill) => {
                      const slug = skillSlug(skill);
                      return (
                        <div
                          key={skill}
                          className="flex flex-col items-center gap-2 p-4 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-yellow-500/60 transition-all hover:scale-110 hover:shadow-xl hover:shadow-yellow-500/20"
                          title={skill}
                        >
                          <img
                            src={`https://cdn.simpleicons.org/${slug}/ffffff`}
                            alt={skill}
                            className="w-10 h-10 object-contain"
                            loading="lazy"
                            onError={(e) => (e.currentTarget.src = "https://cdn.simpleicons.org/github/ffffff")}
                          />
                          <span className="text-xs text-center font-medium">{skill}</span>
                        </div>
                      );
                    })}
                  </div>
                </>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;