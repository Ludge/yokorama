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

const HorsDoeuvre = () => {
  const [activeTab, setActiveTab] = useState('Entrees');
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const menuSections: MenuSections = {
    Entrees: {
      title: 'A la carte',
      items: [
        { 
          name: 'Soupe maison', 
          price: '2.70€', 
          description: 'Bouillon japonais au miso, Champignon, poireau et vermiselle.',
          imageUrl: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624'
        },
        { 
          name: 'Salade de crudité (Chou blanc)', 
          price: '2.70€', 
          description: 'Chou croquant, sauce vinaigrette légère.',
          imageUrl: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd'
        },
        { 
          name: 'Gohan (Riz blanc nature)', 
          price: '1.60€', 
          description: 'Riz vapeur parfumé, tout simplement.',
          imageUrl: 'https://images.unsplash.com/photo-1516684732162-798a0062be99'
        },
        { 
          name: 'Edamame', 
          price: '4.20€', 
          description: 'Jeunes fèves de soja, légèrement salées.',
          imageUrl: 'https://images.unsplash.com/photo-1516684732162-798a0062be99'
        },
        { 
          name: 'Gyoza (4pcs)', 
          price: '3.90€', 
          description: 'Raviolis japonais au poulet.',
          imageUrl: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9'
        },
        { 
          name: 'Tempura de crevette (2pcs)', 
          price: '4.80€', 
          description: 'Crevettes croustillantes à la japonaise.',
          imageUrl: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9'
        },
        { 
          name: 'Salade d\'algue', 
          price: '5.90€', 
          description: 'Algues marinées, fraîches et acidulées.',
          imageUrl: 'https://images.unsplash.com/photo-1516684732162-798a0062be99'
        },
        { 
          name: 'Gari (gingembre mariné)', 
          price: '1.80€', 
          description: 'Gingembre doux et vinaigré, rafraîchissant.',
          imageUrl: 'https://images.unsplash.com/photo-1516684732162-798a0062be99'
        },
        { 
          name: 'Ramen aux tempuras', 
          price: '10.20€', 
          description: 'Nouilles japonaises, bouillon parfumé, garni de tempuras croustillants.',
          imageUrl: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624'
        },
        { 
          name: 'Ramen au bœuf', 
          price: '9.90€', 
          description: 'Nouilles japonaises, bouillon parfumé et bœuf tendre.',
          imageUrl: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624'
        },
        { 
          name: 'Ramen au poulet', 
          price: '9.90€', 
          description: 'Nouilles japonaises, bouillon parfumé et poulet grillé.',
          imageUrl: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624'
        },
        { 
          name: 'Nems au poulet', 
          price: '4.90€', 
          description: 'Rouleaux croustillants farcis au poulet.',
          imageUrl: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9'
        },
        { 
          name: 'Nems aux crevettes', 
          price: '4.90€', 
          description: 'Rouleaux frits garnis de crevettes savoureuses.',
          imageUrl: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9'
        }
      ]
    },
   Sashimi: {
      title: 'Sashami',
      items: [
        { 
          name: 'Maguro (10pcs)', 
          price: '9.90€', 
          description: 'Tranches fines de thon cru, fraîches et fondantes.',
          imageUrl: 'https://images.unsplash.com/photo-1534256958597-7fe685cbd745'
        },
        { 
          name: 'Shake (10pcs)', 
          price: '9.70€', 
          description: 'Saumon cru découpé finement, doux et savoureux.',
          imageUrl: 'https://images.unsplash.com/photo-1534256958597-7fe685cbd745'
        },
        { 
          name: 'Tai (10pcs)', 
          price: '9.70€', 
          description: 'Daurade crue, délicate et fondantes.',
          imageUrl: 'https://images.unsplash.com/photo-1534256958597-7fe685cbd745'
        }
       
      ]
    },
    Yakitori: {
      title: 'Yakitori',
      items: [
        { 
          name: 'Tsukune (2pcs)', 
          price: '3.60€', 
          description: 'Crevettes en tempura, sauce tentsuyu',
          imageUrl: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143'
        },
        { 
          name: 'Negima(2pcs)', 
          price: '3.60€', 
          description: 'Assortiment de légumes en tempura',
          imageUrl: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143'
        },
        { 
          name: 'Aile de poulet (2pcs)', 
          price: '3.60€', 
          description: '2 crevettes, 4 légumes',
          imageUrl: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143'
        },
        { 
          name: 'Gyuniku (2pcs)', 
          price: '3.80€', 
          description: 'Poulet croustillant façon tempura',
          imageUrl: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143'
        },
        { 
          name: 'Ebi (2pcs)', 
          price: '4.20€', 
          description: 'Poulet croustillant façon tempura',
          imageUrl: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143'
        },
        { 
          name: 'Cheese (2pcs)', 
          price: '4.00€', 
          description: 'Poulet croustillant façon tempura',
          imageUrl: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143'
        },
        { 
          name: 'Uzura (2pcs)', 
          price: '4.40€', 
          description: 'Poulet croustillant façon tempura',
          imageUrl: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143'
        },
        { 
          name: 'Shake (2pcs)', 
          price: '4.20€', 
          description: 'Poulet croustillant façon tempura',
          imageUrl: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143'
        },
        { 
          name: 'Maguro (2pcs)', 
          price: '4.20€', 
          description: 'Poulet croustillant façon tempura',
          imageUrl: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143'
        },
        { 
          name: 'Tai (2pcs)', 
          price: '4.50€', 
          description: 'Poulet croustillant façon tempura',
          imageUrl: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143'
        },
        { 
          name: 'Mashurumu (2pcs)', 
          price: '3.80€', 
          description: 'Poulet croustillant façon tempura',
          imageUrl: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143'
        }
      ]
    },
    Sushi: {
      title: 'Sushi',
      items: [
        { 
          name: 'Maguro (2pcs)', 
          price: '4.70€', 
          description: 'Brochettes de poulet marinées',
          imageUrl: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c'
        },
        { 
          name: 'Shake (2pcs)', 
          price: '4.70€', 
          description: 'Brochettes de bœuf sauce teriyaki',
          imageUrl: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c'
        },
        { 
          name: 'Tai (2pcs)', 
          price: '4.70€', 
          description: 'Brochettes de boulettes de poulet',
          imageUrl: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c'
        },
        { 
          name: 'Ebi (2pcs)', 
          price: '4.90€', 
          description: 'Assortiment de brochettes',
          imageUrl: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c'
        },
        { 
          name: 'Ikura (2pcs)', 
          price: '5.90€', 
          description: 'Brochettes de boulettes de poulet',
          imageUrl: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c'
        },
        { 
          name: 'Unagi (2pcs)', 
          price: '6.20€', 
          description: 'Brochettes de boulettes de poulet',
          imageUrl: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c'
        },
        { 
          name: 'Tulip avocat oeufs de saumon (2pcs)', 
          price: '6.50€', 
          description: 'Brochettes de boulettes de poulet',
          imageUrl: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c'
        }
      ]
    },
    Maki: {
      title: 'Maki',
      items: [
        { 
          name: 'Tekka (8pcs)', 
          price: '5.20€', 
          description: 'Saumon mariné, avocat, mesclun, sauce yuzu',
          imageUrl: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c'
        },
        { 
          name: 'Shake (8pcs)', 
          price: '5.20€', 
          description: 'Poulet teriyaki, légumes croquants',
          imageUrl: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c'
        },
        { 
          name: 'Kappa (8pcs)', 
          price: '4.50€', 
          description: 'Tofu mariné, wakame, sauce sésame',
          imageUrl: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c'
        },
        { 
          name: 'Oshinko (8pcs)', 
          price: '4.50€', 
          description: 'Mesclun, chou, carotte, concombre, sauce maison',
          imageUrl: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c'
        },
        { 
          name: 'Futomaki (10pcs)', 
          price: '11.20€', 
          description: 'Mesclun, chou, carotte, concombre, sauce maison',
          imageUrl: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c'
        }
      ]
    },
    CaliforniaMaki: {
      title: 'California Maki',
      items: [
        { 
          name: 'Surimi avocat (8pcs)', 
          price: '5.70€', 
          description: 'Saumon mariné, avocat, mesclun, sauce yuzu',
          imageUrl: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c'
        },
        { 
          name: 'Thon cuit avocat (8pcs)', 
          price: '6.20€', 
          description: 'Poulet teriyaki, légumes croquants',
          imageUrl: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c'
        },
        { 
          name: 'Anguille (8pcs)', 
          price: '6.20€', 
          description: 'Tofu mariné, wakame, sauce sésame',
          imageUrl: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c'
        },
        { 
          name: 'Thon fromage (8pcs)', 
          price: '6.20€', 
          description: 'Mesclun, chou, carotte, concombre, sauce maison',
          imageUrl: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c'
        },
        { 
          name: 'Avocat fromage (8pcs)', 
          price: '6.20€', 
          description: 'Mesclun, chou, carotte, concombre, sauce maison',
          imageUrl: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c'
        },
        { 
          name: 'Saumon fraomge (8pcs)', 
          price: '6.20€', 
          description: 'Mesclun, chou, carotte, concombre, sauce maison',
          imageUrl: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c'
        },
        { 
          name: 'Saumon avocat (8pcs)', 
          price: '5.70€', 
          description: 'Mesclun, chou, carotte, concombre, sauce maison',
          imageUrl: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c'
        },
        { 
          name: 'Tempura crevette avocat (8pcs)', 
          price: '6.50€', 
          description: 'Mesclun, chou, carotte, concombre, sauce maison',
          imageUrl: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9'
        },
        { 
          name: 'Rainbow saumon roll avocat (8pcs)', 
          price: '6.30€', 
          description: 'Mesclun, chou, carotte, concombre, sauce maison',
          imageUrl: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c'
        },
        { 
          name: 'Rainbow saumon roll fromage (8pcs)', 
          price: '6.30€', 
          description: 'Mesclun, chou, carotte, concombre, sauce maison',
          imageUrl: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c'
        },
        { 
          name: 'Ebi maki tempura crevette (8pcs)', 
          price: '6.20€', 
          description: 'Mesclun, chou, carotte, concombre, sauce maison',
          imageUrl: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9'
        },
        { 
          name: 'Dragon roll saumon ou surimi concombre (8pcs)', 
          price: '6.60€', 
          description: 'Mesclun, chou, carotte, concombre, sauce maison',
          imageUrl: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c'
        }
      ]
    },
    CaliforniaSojaMaki: {
      title: 'California Soja Maki',
      items: [
        { 
          name: 'Surimi avocat (8pcs)', 
          price: '5.20€', 
          description: 'Saumon mariné, avocat, mesclun, sauce yuzu',
          imageUrl: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c'
        },
        { 
          name: 'Thon avocat (8pcs)', 
          price: '5.20€', 
          description: 'Poulet teriyaki, légumes croquants',
          imageUrl: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c'
        },
        { 
          name: 'Saumon avocat (8pcs)', 
          price: '4.50€', 
          description: 'Tofu mariné, wakame, sauce sésame',
          imageUrl: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c'
        }
      ]
    },
    Temaki: {
      title: 'Temaki',
      items: [
        { 
          name: 'Saumon ou thon (1pc)', 
          price: '5.80€', 
          description: 'Saumon mariné, avocat, mesclun, sauce yuzu',
          imageUrl: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c'
        },
        { 
          name: 'Saumon avocat (1pc)', 
          price: '5.80€', 
          description: 'Poulet teriyaki, légumes croquants',
          imageUrl: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c'
        },
        { 
          name: 'Temaki california thon,saumon, avocat, radis (1pc)', 
          price: '6.30€', 
          description: 'Tofu mariné, wakame, sauce sésame',
          imageUrl: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c'
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
            src="https://images.unsplash.com/photo-1547620917-786bb8f8e1ea?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            className="w-full h-full object-cover"
            alt="Japanese appetizers"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-japanese text-white"
            >
              Hors d'œuvre
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

export default HorsDoeuvre;