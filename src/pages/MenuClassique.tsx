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

const MenuClassique = () => {
  const [activeTab, setActiveTab] = useState('MenuDegustation');
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const menuSections: MenuSections = {
    MenuDegustation: {
      title: 'Menu Dégustation',
      items: [
        { 
          name: 'Menu Y - Tête à Tête (Pour 2P)', 
          price: '36.50€', 
          description: '2 soupes, 2 salades, 2 riz + 8 sushi assortis, 16 sashimi assortis, 16 california maki',
          imageUrl: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
        },
        { 
          name: 'Menu X - Toi et Moi (Pour 2P)', 
          price: '39.50€', 
          description: '2 soupes, 2 salades, 2 riz + 4 sushi assortis, 12 sashimi assortis, 16 california maki + 8 brochettes : 2 boulettes de poulet, 2 poulets, 2 boeufs, 2 boeufs au fromage',
          imageUrl: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
        },
        { 
          name: 'Menu K', 
          price: '18.20€', 
          description: 'Soupe, salade, riz + 4 sushi assortis, 9 sashimi assortis, 3 brochettes de poisson ou 5 brochettes*',
          imageUrl: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
        },
        { 
          name: 'Menu R', 
          price: '17.90€', 
          description: 'Soupe, salade, riz + 4 sushi assorti, 8 california maki, 3 brochettes de poisson ou 5 brochettes*',
          imageUrl: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
        },
        { 
          name: 'Menu J', 
          price: '18.90€', 
          description: 'Soupe, salade, riz + 6 sashimi, 2 sushi, 8 california maki, 3 brochettes de poisson ou 5 brochettes*',
          imageUrl: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
        },
        { 
          name: 'Menu T', 
          price: '17.90€', 
          description: 'Soupe, salade, riz + 9 sashimi assorti, 8 california maki, 3 brochettes de poisson ou 5 brochettes* ',
          imageUrl: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
        }
      ]
    },
    MenuPoissonCru: {
      title: 'Menu Poisson Cru',
      items: [
        { 
          name: 'Menu M', 
          price: '15.90€', 
          description: 'Soupe, salade, riz + 10 sushi assortis',
          imageUrl: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
        },
        { 
          name: 'Menu N', 
          price: '15.90€', 
          description: 'Soupe, salade, riz + 8 sushi assortis, 8 california maki',
          imageUrl: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
        },
        { 
          name: 'Menu P', 
          price: '17.90€', 
          description: 'Soupe, salade, riz + 4 sushi assortis, 15 sashimi assortis',
          imageUrl: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
        },
        { 
          name: 'Menu S', 
          price: '18.50€', 
          description: 'Soupe, salade, riz + 20 sashimi assortis',
          imageUrl: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
        },
        { 
          name: 'Menu L', 
          price: '18.10€', 
          description: 'Soupe, salade riz + 4 sushi assortis, 9 sashimi assortis, 8 california maki',
          imageUrl: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
        },
        { 
          name: 'Menu W', 
          price: '17.90€', 
          description: 'Soupe, salade, riz + 15 sashimi assortis, 8 california maki',
          imageUrl: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
        },
        { 
          name: 'Menu n°12', 
          price: '11.90€', 
          description: 'Soupe, salade, riz + 3 sushi assortis, 6 sashimi assortis',
          imageUrl: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
        },
        { 
          name: 'Menu n°13', 
          price: '11.90€', 
          description: 'Soupe, salade, riz + 6 sashimi assortis, 8 california maki',
          imageUrl: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
        },
        { 
          name: 'Menu n°14', 
          price: '11.90€', 
          description: 'Soupe, salade, riz + 3 sushi assortis, 8 california maki',
          imageUrl: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
        },
        { 
          name: 'Menu n°15', 
          price: '12.10€', 
          description: 'Soupe, salade, riz + 10 sashimi assortis',
          imageUrl: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
        }
      ]
    },
    MenuBrochette: {
      title: 'Menu Brochette',
      items: [
        { 
          name: 'Menu n°1', 
          price: '7.20€', 
          description: 'Soupe, salade, riz + 4 brochettes : 2 poulets, 2 boulettes de poulet',
          imageUrl: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143'
        },
        { 
          name: 'Menu n°2', 
          price: '8.10€', 
          description: 'Soupe, salade, riz + 4 brochettes : 2 boulettes de poulet, 2 boeufs au fromage',
          imageUrl: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143'
        },
        { 
          name: 'Menu n°3', 
          price: '8.60€', 
          description: 'Soupe, salade, riz + 4 brochettes : 2 boeufs, 2 boulettes de poulet',
          imageUrl: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143'
        },
        { 
          name: 'Menu n°4', 
          price: '9.20€', 
          description: 'Soupe, salade, riz + 4 brochettes : 2 poissons, 2 boulettes de poulet',
          imageUrl: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143'
        },
        { 
          name: 'Menu n°5', 
          price: '10.40€', 
          description: 'Soupe, salade, riz + 4 brochettes : 2 poissons, 2 gambas',
          imageUrl: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143'
        },
        { 
          name: 'Menu n°6', 
          price: '9.90€', 
          description: 'Soupe, salade, riz + 4 brochettes : 2 saumons, 2 thons',
          imageUrl: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143'
        },
        { 
          name: 'Menu n°7', 
          price: '10.10€', 
          description: 'Soupe, salade, riz + 5 brochettes de boeuf au fromage',
          imageUrl: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143'
        },
        { 
          name: 'Menu A', 
          price: '11.20€', 
          description: 'Soupe, salade, riz + 6 brochettes : Poulet, boulette de poulet, aile de poulet, boeuf, boeuf au fromage, champignon',
          imageUrl: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143'
        },
        { 
          name: 'Menu B', 
          price: '13.10€', 
          description: 'Soupe, salade, riz + 8 brochettes : poulet, 2 boulettes de poulet, aile de poulet, caille, boeuf, boeuf au fromage, champignon',
          imageUrl: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143'
        },
        { 
          name: 'Menu C', 
          price: '15.90€', 
          description: 'Soupe, salade, riz + 9 brochettes : 2 gambas, poulet, boulettes de poulet, aile de poulet, caille, boeuf, boeuf au fromage, champignon',
          imageUrl: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143'
        }
      ]
    },
    MenuBrochettePoissonCru: {
      title: 'Menu Brochette & Poisson Cru',
      items: [
        { 
          name: 'Menu n°9', 
          price: '11.90€', 
          description: 'Soupe, salade, riz + 6 sashimi + 4 brochettes* : Poulet, boulettes de poulet, boeuf, boeuf au fromage',
          imageUrl: 'https://images.unsplash.com/photo-1534256958597-7fe685cbd745'
        },
        { 
          name: 'Menu n°10', 
          price: '11.90€', 
          description: 'Soupe, salade, riz + 3 sushi assortis + 4 brochettes* : Poulet boulettes de poulet, boeuf, boeuf au fromage',
          imageUrl: 'https://images.unsplash.com/photo-1534256958597-7fe685cbd745'
        },
        { 
          name: 'Menu E', 
          price: '13.70€', 
          description: 'Soupe, salade, riz + 8 california saumon avocat + 3 brochettes de poisson ou 5 brochettes*',
          imageUrl: 'https://images.unsplash.com/photo-1534256958597-7fe685cbd745'
        },
        { 
          name: 'Menu E1', 
          price: '13.90€', 
          description: 'Soupe, salade, riz + 6 california saumon fromage + 3 brochettes de poisson ou 5 brochettes* ',
          imageUrl: 'https://images.unsplash.com/photo-1534256958597-7fe685cbd745'
        },
        { 
          name: 'Menu F', 
          price: '15.50€', 
          description: 'Soupe, salade, riz + 9 sashimi assortis + 3 brochettes de poisson ou 5 brochettes* ',
          imageUrl: 'https://images.unsplash.com/photo-1534256958597-7fe685cbd745'
        },
        { 
          name: 'Menu G', 
          price: '15.20€', 
          description: 'Soupe, salade, riz + 6 sushi assortis + 3 brochettes de poisson ou 5 brochettes* ',
          imageUrl: 'https://images.unsplash.com/photo-1534256958597-7fe685cbd745'
        }
      ]
    },
    MenuChirasi: {
      title: 'Menu Chirashi',
      items: [
        { 
          name: 'Menu D', 
          price: '11.60€', 
          description: 'Soupe, salade, riz + assortiment de poissons crus dans un bol de riz vinaigré',
          imageUrl: 'https://images.unsplash.com/photo-1534256958597-7fe685cbd745'
        },
        { 
          name: 'Menu Ds', 
          price: '11.60€', 
          description: 'Soupe, salade, riz + saumon crus dans un bol de riz vinaigré',
          imageUrl: 'https://images.unsplash.com/photo-1534256958597-7fe685cbd745'
        },
        { 
          name: 'Menu n°20', 
          price: '13.50€', 
          description: 'Soupe, salade, riz + saumon crus avec avocat dans un bol de riz vinaigré*',
          imageUrl: 'https://images.unsplash.com/photo-1534256958597-7fe685cbd745'
        },
        { 
          name: 'Menu n°24', 
          price: '15.90€', 
          description: 'Soupe, salade, riz + anguilles grillés dans un bol de riz vinaigré ',
          imageUrl: 'https://images.unsplash.com/photo-1534256958597-7fe685cbd745'
        }
      ]
    }, 
    MenuMaki: {
      title: 'Menu Maki',
      items: [
        { 
          name: 'Menu n°8', 
          price: '12.50€', 
          description: 'Soupe, salade, riz + 16 california : 8 saumon avocat, 8 thon avocat',
          imageUrl: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c'
        },
        { 
          name: 'Menu n°8a', 
          price: '16.60€', 
          description: 'Soupe, salade, riz + 16 california : 8 saumon fromage, 8 avocat fromage',
          imageUrl: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c'
        },
        { 
          name: 'Menu n°11', 
          price: '14.20€', 
          description: 'Soupe, salade, riz + 10 futomaki',
          imageUrl: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c'
        },
        { 
          name: 'Menu H', 
          price: '15.10€', 
          description: 'Soupe, salade, riz + 24 maki : 8 saumon, 8 thon, 8 california avocat surimi',
          imageUrl: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c'
        },
        { 
          name: 'Menu n°17', 
          price: '13.50€', 
          description: 'Soupe, salade, riz + 16 california : 8 thon cuit avocat, 8 thon fromage',
          imageUrl: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c'
        },
        { 
          name: 'Menu n°23 - Tempura Maki', 
          price: '14.10€', 
          description: 'Soupe, salade, riz + 16 california tempura',
          imageUrl: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9'
        },
        { 
          name: 'Menu V - Soja Maki', 
          price: '16.50€', 
          description: 'Soupe, salade, riz + 24 sojoa maki : 8 saumon avocat, 8 thon avocat, 8 surimi avocat',
          imageUrl: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c'
        },
        { 
          name: 'Menu n°21 - Rainbow Maki ', 
          price: '14.40€', 
          description: 'Soupe, salade, riz + 12 maki rainbow : 6 saumon avocat, 6 saumon fromage',
          imageUrl: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c'
        },
        { 
          name: 'Menu n°21a', 
          price: '15.10€', 
          description: 'Soupe, salade, riz + 6 saumon roll fromage, 6 dragon roll saumon',
          imageUrl: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c'
        }
      ]
    },
    MenuRavioli: {
      title: 'Menu Ravioli',
      items: [
        { 
          name: 'Menu n°16', 
          price: '9.10€', 
          description: 'Soupe, salade, riz + 8 ravioli au poulet',
          imageUrl: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9'
        },
        { 
          name: 'Menu n°26', 
          price: '13.80€', 
          description: 'Soupe, salade, riz + 4 ravioli au poulet + 9 sashimi assortis',
          imageUrl: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9'
        },
        { 
          name: 'Menu n°27', 
          price: '13.50€', 
          description: 'Soupe, salade, riz + 4 ravioli au poulet + 6 sushi assortis',
          imageUrl: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9'
        },
        { 
          name: 'Menu n°18', 
          price: '13.40€', 
          description: 'Soupe, salade, riz + 4 ravioli + 5 brochettes* ',
          imageUrl: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9'
        },
        { 
          name: 'Menu n°19', 
          price: '12.60€', 
          description: 'Soupe, salade, riz + 4 ravioli au poulet + 8 california saumon avocat',
          imageUrl: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9'
        }
      ]
    },
    MenuBeignet: {
      title: 'Menu Beignet',
      items: [
        { 
          name: 'Menu n°22', 
          price: '13.50€', 
          description: 'Soupe, salade, riz + 4 tempura crevettes, 4 ravioli au poulet',
          imageUrl: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9'
        },
        { 
          name: 'n°25', 
          price: '12.20€', 
          description: 'Soupe, salade, riz + 8 frittures assorties',
          imageUrl: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9'
        }
      ]
    },
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
            src="https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            className="w-full h-full object-cover"
            alt="Sushi presentation"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-japanese text-white"
            >
              Menu
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
              <p>• *5 brochettes : poulet, boulettes de poulet, aile de poulet, boeuf, boeuf au fromage</p>
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

export default MenuClassique;