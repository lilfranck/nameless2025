"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.status === 200) {
        setEmailSubmitted(true);
        e.target.reset();
      }
    } catch (err) {
      alert("Une erreur est survenue. Réessayez plus tard.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="relative py-15 overflow-hidden ">
      {/* Fond animé subtil */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 -left-40 w-96 h-96 bg-yellow-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 -right-40 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Titre */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-5xl sm:text-6xl md:text-7xl font-extrabold mb-16"
        >
          Contactez <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-amber-600">Nameless</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* === COLONNE GAUCHE – Texte + Liens === */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-10"
          >
            <div>
              <h3 className="text-4xl font-bold text-white mb-6">
                Prêt à faire décoller votre projet ?
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Que vous cherchiez un développeur fullstack incisif, un designer qui voit plus loin que les tendances,
                ou simplement quelqu’un capable de transformer une idée en produit qui marque les esprits —{" "}
                <strong className="text-yellow-400">je suis votre homme</strong>.
              </p>
              <p className="text-gray-300 mt-4">
                Freelance, CDI, collaboration longue durée… mon inbox est grand ouvert.
              </p>
            </div>

            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <span className="text-yellow-400 font-bold">Email →</span>
                <a
                  href="mailto:nameless36912@gmail.com"
                  className="text-white hover:text-yellow-400 transition font-medium"
                >
                  nameless36912@gmail.com
                </a>
              </div>
            </div>

            {/* Icônes sociales */}
            <div className="flex gap-6">
              <Link href="https://github.com/lilfranck" target="_blank" className="group">
                <div className="w-16 h-16 bg-gray-800/80 backdrop-blur rounded-full flex items-center justify-center border border-gray-700 group-hover:border-yellow-500 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-yellow-500/30">
                  <Image
                    src={GithubIcon}
                    alt="GitHub"
                    width={36}
                    height={36}
                    className="brightness-150 group-hover:brightness-0 group-hover:invert transition"
                  />
                </div>
              </Link>

              <Link href="https://linkedin.com/in/nameless237" target="_blank" className="group">
                <div className="w-16 h-16 bg-gray-800/80 backdrop-blur rounded-full flex items-center justify-center border border-gray-700 group-hover:border-yellow-500 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-yellow-500/30">
                  <Image
                    src={LinkedinIcon}
                    alt="LinkedIn"
                    width={36}
                    height={36}
                    className="brightness-150 group-hover:brightness-0 group-hover:invert transition"
                  />
                </div>
              </Link>
            </div>
          </motion.div>

          {/* === FORMULAIRE === */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {emailSubmitted ? (
              <div className="bg-gradient-to-br from-yellow-400/10 to-orange-500/10 border border-yellow-500/30 rounded-3xl p-16 text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="w-24 h-24 mx-auto mb-6 bg-yellow-500/20 rounded-full flex items-center justify-center"
                >
                  <span className="text-5xl">Check</span>
                </motion.div>
                <h3 className="text-3xl font-bold text-yellow-400 mb-3">Message bien reçu !</h3>
                <p className="text-gray-300 text-lg">Je vous réponds très rapidement</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-7">
                <div>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    placeholder="Votre email"
                    className="w-full px-6 py-5 bg-gray-900/50 backdrop-blur border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-yellow-500 focus:outline-none transition text-base"
                  />
                </div>

                <div>
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    required
                    placeholder="Sujet"
                    className="w-full px-6 py-5 bg-gray-900/50 backdrop-blur border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-yellow-500 focus:outline-none transition text-base"
                  />
                </div>

                <div>
                  <textarea
                    name="message"
                    id="message"
                    rows={7}
                    required
                    placeholder="Décrivez-moi votre projet, votre besoin, ou dites-moi juste bonjour..."
                    className="w-full px-6 py-5 bg-gray-900/50 backdrop-blur border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-yellow-500 focus:outline-none transition resize-none text-base"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-5 px-8 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold text-lg rounded-xl hover:shadow-2xl hover:shadow-yellow-500/40 transform hover:scale-105 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                >
                  {isLoading ? (
                    <>Envoi en cours...</>
                  ) : (
                    <>
                      Envoyer le message
                      <span className="text-2xl"></span>
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EmailSection;