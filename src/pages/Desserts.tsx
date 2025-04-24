import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Popup from '../components/Popup';

interface MenuItem {
  name: string;
  price: string;
  description: string;
  imageUrl: string;
}

interface MenuSection {
  title: string;
  items: MenuItem[];
}

interface MenuSections {
  [key: string]: MenuSection;
}

const Desserts = () => {
  const [activeTab, setActiveTab] = useState('Desserts');
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const menuSections: MenuSections = {
    Desserts: {
      title: 'Desserts',
      items: [
        { 
          name: 'Mochi (2pcs)', 
          price: '4.90€', 
          description: 'Pâte de riz gluant fourrée à la glace.',
          imageUrl: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb'
        },
        { 
          name: 'Mochi (4pcs)', 
          price: '8.90€', 
          description: 'Pâte de riz gluant fourrée à la glace.',
          imageUrl: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb'
        },
        { 
          name: 'Glace (2 boules)', 
          price: '4.90€', 
          description: 'Glace artisanale, parfums au choix.',
          imageUrl: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb'
        },
        { 
          name: 'Glace (3 boules)', 
          price: '6.90€', 
          description: 'Glace artisanale, parfums au choix.',
          imageUrl: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb'
        },
        { 
          name: 'Glace (4 boules)', 
          price: '8.90€', 
          description: 'Glace artisanale, parfums au choix.',
          imageUrl: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb'
        },
        { 
          name: 'Glace (5 boules)', 
          price: '10.90€', 
          description: 'Glace artisanale, parfums au choix.',
          imageUrl: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb'
        },
        { 
          name: 'Glace (6 boules)', 
          price: '12.90€', 
          description: 'Glace artisanale, parfums au choix.',
          imageUrl: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb'
        },
        { 
          name: 'Glace (7 boules)', 
          price: '14.90€', 
          description: 'Glace artisanale, parfums au choix.',
          imageUrl: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb'
        },
        { 
          name: 'Glace (8 boules)', 
          price: '16.90€', 
          description: 'Glace artisanale, parfums au choix.',
          imageUrl: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb'
        },
        { 
          name: 'Glace (9 boules)', 
          price: '18.90€', 
          description: 'Glace artisanale, parfums au choix.',
          imageUrl: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb'
        },
        { 
          name: 'Glace (10 boules)', 
          price: '20.90€', 
          description: 'Glace artisanale, parfums au choix.',
          imageUrl: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb'
        },
        { 
          name: 'Glace (11 boules)', 
          price: '22.90€', 
          description: 'Glace artisanale, parfums au choix.',
          imageUrl: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb'
        },
        { 
          name: 'Glace (12 boules)', 
          price: '24.90€', 
          description: 'Glace artisanale, parfums au choix.',
          imageUrl: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb'
        },
        { 
          name: 'Glace (13 boules)', 
          price: '26.90€', 
          description: 'Glace artisanale, parfums au choix.',
          imageUrl: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb'
        },
        { 
          name: 'Glace (14 boules)', 
          price: '28.90€', 
          description: 'Glace artisanale, parfums au choix.',
          imageUrl: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb'
        },
        { 
          name: 'Glace (15 boules)', 
          price: '30.90€', 
          description: 'Glace artisanale, parfums au choix.',
          imageUrl: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb'
        },
        { 
          name: 'Glace (16 boules)', 
          price: '32.90€', 
          description: 'Glace artisanale, parfums au choix.',
          imageUrl: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb'
        },
        { 
          name: 'Glace (17 boules)', 
          price: '34.90€', 
          description: 'Glace artisanale, parfums au choix.',
          imageUrl: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb'
        },
        { 
          name: 'Glace (18 boules)', 
          price: '36.90€', 
          description: 'Glace artisanale, parfums au choix.',
          imageUrl: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb'
        },
        { 
          name: 'Glace (19 boules)', 
          price: '38.90€', 
          description: 'Glace artisanale, parfums au choix.',
          imageUrl: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb'
        },
        { 
          name: 'Glace (20 boules)', 
          price: '40.90€', 
          description: 'Glace artisanale, parfums au choix.',
          imageUrl: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb'
        }
      ]
    }
  };

  const handleItemClick = (item: MenuItem) => {
    setSelectedItem(item);
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
    setSelectedItem(null);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <div className="pt-16 bg-gray-50">
        <div className="relative h-[200px]">
          <img
            src="https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            className="w-full h-full object-cover"
            alt="Japanese desserts"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-japanese text-white"
            >
              Desserts
            </motion.h1>
          </div>
        </div>

        <div className="sticky top-16 bg-white shadow-md z-40">
          <div className="max-w-7xl mx-auto px-2 sm:px-3 lg:px-4">
            <div className="flex space-x-2 py-2 overflow-x-auto">
              {Object.entries(menuSections).map(([key, section]) => (
                <motion.button
                  key={key}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveTab(key)}
                  className={`px-4 py-2 rounded-full transition-all duration-300 whitespace-nowrap
                           shadow-sm hover:shadow-md ${
                    activeTab === key
                      ? 'bg-indigo-900 text-white shadow-indigo-900/20'
                      : 'text-gray-600 hover:bg-indigo-50 hover:text-indigo-900'
                  }`}
                >
                  {section.title}
                </motion.button>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-2 sm:px-3 lg:px-4 py-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid gap-4"
            >
              {menuSections[activeTab].items.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white rounded-lg shadow-lg p-4 hover:shadow-xl 
                           transition-all duration-300 cursor-pointer flex flex-col md:flex-row"
                  onClick={() => handleItemClick(item)}
                >
                  <div className="md:w-1/3 h-48 md:h-auto mb-4 md:mb-0 md:mr-4">
                    <img 
                      src={item.imageUrl} 
                      alt={item.name}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <div className="md:w-2/3">
                    <div className="flex justify-between items-baseline mb-2">
                      <h3 className="text-xl font-medium text-gray-900">{item.name}</h3>
                      <span className="text-lg font-japanese text-indigo-900">{item.price}</span>
                    </div>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 bg-white rounded-lg shadow-lg p-4"
          >
            <h2 className="text-2xl font-japanese text-indigo-900 mb-2">Informations</h2>
            <div className="text-gray-600 space-y-1">
              <p>• Tous nos plats sont préparés à la commande avec des produits frais</p>
              <p>• Prix nets en euros, taxes et service compris</p>
              <p>• Liste des allergènes disponible sur demande</p>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
      
      {selectedItem && (
        <Popup
          isOpen={isPopupOpen}
          onClose={handleClosePopup}
          item={selectedItem}
        />
      )}
    </div>
  );
};

export default Desserts;