"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// === DONNÉES DE TES VRAIS PROJETS (tu n'as plus qu'à remplir) ===
const projectsData = [
  {
    id: 1,
    title: "TARA + — Identité visuelle complète",
    description: "Logo, charte graphique, templates RS, carte de visite, papeterie",
    category: "branding",
    tags: ["Illustrator", "InDesign", "Branding"],
    image: "/images/projects/1.png", // à ajouter dans public/images/projects/
    figmaUrl: null,
    liveUrl: null,
    githubUrl: null,
  },
  {
    id: 2,
    title: "TAWA Delivery — Application mobile",
    description: "App de livraison ultra-rapide (Flutter + Node.js + MongoDB)",
    category: "dev",
    tags: ["Flutter", "Node.js", "MongoDB", "Firebase"],
    image: "/images/projects/3.png",
    figmaUrl: "https://www.figma.com/file/...",
    liveUrl: null,
    githubUrl: "https://github.com/lilfranck/tawa-delivery",
  },
  {
    id: 3,
    title: "Dashboard Admin — Web App SaaS",
    description: "Interface admin moderne avec authentification et CRUD",
    category: "dev",
    tags: ["Next.js", "TypeScript", "Tailwind", "Prisma"],
    image: "/images/projects/2.png",
    figmaUrl: "https://www.figma.com/file/...",
    liveUrl: "https://dashboard.nameless.dev",
    githubUrl: "https://github.com/lilfranck/dashboard",
  },
  {
    id: 4,
    title: "Application Banque Mobile — UI/UX",
    description: "Maquette complète d’une app bancaire moderne (iOS + Android)",
    category: "uiux",
    tags: ["Figma", "UI Design", "Mobile First"],
    image: "/images/projects/5.png",
    figmaUrl: "https://www.figma.com/file/...",
    liveUrl: null,
    githubUrl: null,
  },
  // Ajoute les autres au fur et à mesure, c’est ultra simple
];

const categories = [
  { name: "Tous", value: "all" },
  { name: "Design & Branding", value: "branding" },
  { name: "UI/UX Design", value: "uiux" },
  { name: "Développement", value: "dev" },
];

const ProjectsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredProjects =
    selectedCategory === "all"
      ? projectsData
      : projectsData.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-24 px-4 relative overflow-hidden">
      {/* Fond subtil */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-40 left-0 w-96 h-96 bg-yellow-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-0 w-80 h-80 bg-orange-600/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Titre */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-5xl sm:text-6xl md:text-7xl font-extrabold mb-16"
        >
          Mes{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-amber-600">
            Projets
          </span>
        </motion.h2>

        {/* Onglets de filtrage — centrés et stylés */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setSelectedCategory(cat.value)}
              className={`px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 ${
                selectedCategory === cat.value
                  ? "bg-gradient-to-r from-yellow-400 to-orange-500 text-black shadow-xl shadow-orange-500/50"
                  : "bg-gray-800/70 text-gray-300 hover:text-yellow-400 border border-gray-700 hover:border-yellow-500/50"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Grille de projets — Masonry responsive */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-3xl bg-gray-900/50 backdrop-blur border border-gray-800 hover:border-yellow-500/50 transition-all duration-500"
            >
              {/* Image */}
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={800}
                  height={450}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
              </div>

              {/* Contenu */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium bg-gray-800/70 text-yellow-400 rounded-full border border-yellow-500/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Liens */}
                <div className="flex gap-4">
                  {project.figmaUrl && (
                    <Link
                      href={project.figmaUrl}
                      target="_blank"
                      className="flex items-center gap-2 text-yellow-400 hover:text-white transition"
                    >
                      Figma
                    </Link>
                  )}
                  {project.liveUrl && (
                    <Link
                      href={project.liveUrl}
                      target="_blank"
                      className="flex items-center gap-2 text-yellow-400 hover:text-white transition"
                    >
                      Live
                    </Link>
                  )}
                  {project.githubUrl && (
                    <Link
                      href={project.githubUrl}
                      target="_blank"
                      className="flex items-center gap-2 text-yellow-400 hover:text-white transition"
                    >
                      GitHub
                    </Link>
                  )}
                </div>
              </div>

              {/* Hover overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-yellow-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>

        {/* Message si aucun projet dans la catégorie */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-2xl text-gray-400">Projets en cours de préparation...</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;