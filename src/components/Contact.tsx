import React from 'react';
import { MapPin, Clock, Phone, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-japanese text-indigo-900 text-center mb-16">
          Informations Pratiques
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <MapPin className="w-6 h-6 text-indigo-900 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Adresse</h3>
                <p className="text-gray-600">42 Rue des Martyrs</p>
                <p className="text-gray-600">75009 Paris</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <Clock className="w-6 h-6 text-indigo-900 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Horaires</h3>
                <p className="text-gray-600">Mardi - Samedi: 12h00 - 14h30, 19h00 - 22h30</p>
                <p className="text-gray-600">Dimanche: 12h00 - 15h00</p>
                <p className="text-gray-600">Fermé le lundi</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <Phone className="w-6 h-6 text-indigo-900 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Réservations</h3>
                <p className="text-gray-600">+33 1 42 42 42 42</p>
                <button className="mt-2 bg-[#FFDB58] text-black px-4 py-2 rounded-md hover:bg-opacity-90 transition-all duration-300">
                  Réserver en ligne
                </button>
              </div>
            </div>
          </div>
          
          <div className="h-96 rounded-lg overflow-hidden shadow-lg">
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
    </section>
  );
};

export default Contact;