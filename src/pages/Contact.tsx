import React, { useState } from 'react';
import { MapPin, Clock, Phone, Mail, Instagram, Facebook } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ReservationModal from '../components/ReservationModal';

const Contact = () => {
  const [isReservationModalOpen, setIsReservationModalOpen] = useState(false);

  const handleReservationSubmit = async (formData: any) => {
    // Here you would typically send the form data to your backend
    console.log('Reservation data:', formData);
    setIsReservationModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <div className="pt-16 bg-gray-50">
        <div className="relative h-[300px]">
          <img
            src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            className="w-full h-full object-cover"
            alt="Restaurant interior"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <h1 className="text-4xl md:text-5xl font-japanese text-white">Contact</h1>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-12">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-japanese text-indigo-900 mb-6">Coordonnées</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-indigo-900 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Adresse</h3>
                      <p className="text-gray-600">58 Rue Monsieur le Prince</p>
                      <p className="text-gray-600">75006 Paris</p>
                      <p className="text-gray-600">France</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Clock className="w-6 h-6 text-indigo-900 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Horaires d'ouverture</h3>
                      <p className="text-gray-600">Mardi - Vendredi</p>
                      <p className="text-gray-600">Déjeuner: 12h00 - 15h</p>
                      <p className="text-gray-600">Dîner: 18h00 - 23h</p>
                      <p className="text-gray-600">Samedi - Dimanche: 12h00 - 23h</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Phone className="w-6 h-6 text-indigo-900 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Téléphone</h3>
                      <p className="text-gray-600">+33 1 43 54 44 66</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Mail className="w-6 h-6 text-indigo-900 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
                      <p className="text-gray-600">Yokorama06@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-japanese text-indigo-900 mb-6">Réservations</h2>
                <p className="text-gray-600 mb-4">
                  Pour garantir la meilleure expérience possible, nous vous recommandons de réserver votre table à l'avance.
                </p>
                <button 
                  onClick={() => setIsReservationModalOpen(true)}
                  className="w-full bg-[#FFDB58] text-black px-6 py-3 rounded-md hover:bg-opacity-90 transition-all duration-300"
                >
                  Réserver une table
                </button>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-japanese text-indigo-900 mb-6">Suivez-nous</h2>
                <div className="flex space-x-6">
                  <a href="#" className="text-indigo-900 hover:text-indigo-800 transition-colors">
                    <Instagram className="w-8 h-8" />
                  </a>
                  <a href="#" className="text-indigo-900 hover:text-indigo-800 transition-colors">
                    <Facebook className="w-8 h-8" />
                  </a>
                </div>
              </div>
            </div>

            <div className="h-full min-h-[600px] bg-white rounded-lg shadow-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.2428572767566!2d2.3367493!3d48.8777777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e3ec957d6c7%3A0x5c0f4a7b5cc0d4b0!2s42%20Rue%20des%20Martyrs%2C%2075009%20Paris!5e0!3m2!1sen!2sfr!4v1635959123456!5m2!1sen!2sfr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      <ReservationModal
        isOpen={isReservationModalOpen}
        onClose={() => setIsReservationModalOpen(false)}
        onSubmit={handleReservationSubmit}
      />

      <Footer />
    </div>
  );
};

export default Contact;