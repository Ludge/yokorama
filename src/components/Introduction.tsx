import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Introduction = () => {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen bg-white flex items-stretch">
      {/* Left Side - Image */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="hidden lg:block w-1/2 relative overflow-hidden"
      >
        <img 
          src="https://images.unsplash.com/photo-1580442151529-343f2f6e0e27?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          alt="Chef preparing sushi"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </motion.div>

      {/* Right Side - Presentation */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full lg:w-1/2 bg-white flex items-center justify-center p-12 lg:p-16"
      >
        <div className="max-w-2xl">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-10"
          >
            <h2 className="text-6xl md:text-7xl font-japanese text-indigo-900 mb-4">Yokorama</h2>
            <div className="h-px w-24 bg-indigo-900/30"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-600 leading-relaxed">
              Depuis 2010, Yokorama vous invite à découvrir la cuisine japonaise traditionnelle, préparée avec des produits frais et variés.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Notre chef met son savoir-faire au service de plats savoureux, faits maison et élaborés à partir de produits de qualité. Dans une ambiance conviviale, chaque repas est une expérience simple, mais authentique, où la tradition rencontre la fraîcheur.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-10 space-y-6"
          >
            <div className="flex space-x-8">
              <div>
                <p className="text-4xl font-japanese text-indigo-900">15+</p>
                <p className="text-sm text-gray-600">Années d'excellence</p>
              </div>
              <div>
                <p className="text-4xl font-japanese text-indigo-900">30+</p>
                <p className="text-sm text-gray-600">Plats signatures</p>
              </div>
              <div>
                <p className="text-4xl font-japanese text-indigo-900">4.9</p>
                <p className="text-sm text-gray-600">Note moyenne</p>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/menu/classique')}
              className="w-full bg-[#FFDB58] text-black px-12 py-4 rounded-full text-lg 
                       font-medium transition-all duration-300 shadow-lg
                       hover:shadow-[#FFDB58]/20 hover:bg-opacity-90
                       transform hover:-translate-y-1"
            >
              Découvrir Notre Menu
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Introduction;