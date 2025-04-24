import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import ReservationModal from './ReservationModal';

interface ReservationForm {
  date: string;
  time: string;
  numberOfPeople: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
}

const Hero = () => {
  const navigate = useNavigate();
  const [isReservationModalOpen, setIsReservationModalOpen] = useState(false);

  const handleReservationSubmit = async (formData: ReservationForm) => {
    // Here you would typically send the form data to your backend
    console.log('Reservation data:', formData);
    setIsReservationModalOpen(false);
  };

  return (
    <div className="relative min-h-screen bg-[#f8f8f8] overflow-hidden hero-section">
      {/* Parallax Background */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0"
      >
        <img
          src="https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          className="w-full h-full object-cover"
          alt="Japanese cuisine"
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
      </motion.div>
      
      <div className="relative h-full min-h-screen flex items-center justify-center text-center container-padding">
        <div className="max-w-4xl space-y-12 lg:space-y-16">
          {/* Logo Animation */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-japanese text-white mb-6 tracking-wider">Yokorama</h1>
            <div className="h-px w-32 mx-auto bg-white/30"></div>
          </motion.div>

          {/* Text Animation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-8"
          >
            <p className="text-2xl md:text-3xl lg:text-4xl text-white font-light tracking-wide">
              Saveurs japonaises près du Luxembourg
            </p>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              Sushis, makis & autres spécialités : un instant de gourmandise dans un cadre conviviale !
            </p>
          </motion.div>

          {/* Buttons Animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#FFDB58] text-black px-10 py-4 rounded-full text-lg font-medium 
                       hover:bg-opacity-90 transition-all duration-300 shadow-lg 
                       hover:shadow-[#FFDB58]/20 w-full sm:w-auto"
              onClick={() => navigate('/menu/classique')}
            >
              Découvrir Notre Carte
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent border-2 border-white text-white px-10 py-4 
                       rounded-full text-lg font-medium hover:bg-white/10 
                       transition-all duration-300 w-full sm:w-auto"
              onClick={() => setIsReservationModalOpen(true)}
            >
              Réserver une Table
            </motion.button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="w-1 h-3 bg-white/50 rounded-full mt-2"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      <ReservationModal
        isOpen={isReservationModalOpen}
        onClose={() => setIsReservationModalOpen(false)}
        onSubmit={handleReservationSubmit}
      />
    </div>
  );
};

export default Hero;