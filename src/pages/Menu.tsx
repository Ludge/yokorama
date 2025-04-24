import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Menu = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeCategory, setActiveCategory] = useState<string>('');

  const categories = [
    {
      id: 'entrees',
      name: 'Entrées',
      description: 'Pour commencer votre voyage culinaire',
      items: [
        { name: 'Edamame', price: '6.00€', description: 'Fèves de soja vapeur, sel de mer' },
        { name: 'Miso Soup', price: '5.00€', description: 'Soupe miso traditionnelle, tofu, wakame' },
        { name: 'Gyoza', price: '8.00€', description: 'Raviolis japonais au porc et légumes' }
      ]
    },
    {
      id: 'sushi',
      name: 'Sushi Nigiri',
      description: 'Par pièce, préparé à la commande',
      items: [
        { name: 'Saumon', price: '4.50€', description: 'Saumon frais de Norvège' },
        { name: 'Thon', price: '5.00€', description: 'Thon rouge de ligne' },
        { name: 'Dorade', price: '4.50€', description: 'Dorade royale' },
        { name: 'Saint-Jacques', price: '5.50€', description: 'Saint-Jacques de Normandie' },
        { name: 'Anguille', price: '6.00€', description: 'Anguille caramélisée' }
      ]
    },
    {
      id: 'maki',
      name: 'Maki Rolls',
      description: '6 pièces par portion',
      items: [
        { name: 'California Roll', price: '12.00€', description: 'Crabe, avocat, concombre' },
        { name: 'Spicy Tuna', price: '14.00€', description: 'Thon épicé, avocat' },
        { name: 'Dragon Roll', price: '16.00€', description: 'Tempura crevette, anguille' },
        { name: 'Rainbow Roll', price: '15.00€', description: 'Assortiment de poissons, avocat' },
        { name: 'Veggie Roll', price: '11.00€', description: 'Légumes de saison, avocat' }
      ]
    },
    {
      id: 'yakitori',
      name: 'Yakitori',
      description: '2 brochettes par portion',
      items: [
        { name: 'Poulet', price: '8.00€', description: 'Brochettes de poulet marinées' },
        { name: 'Bœuf', price: '10.00€', description: 'Bœuf wagyu français' },
        { name: 'Légumes', price: '7.00€', description: 'Assortiment de légumes de saison' },
        { name: 'Canard', price: '9.00€', description: 'Magret de canard, sauce teriyaki' }
      ]
    },
    {
      id: 'desserts',
      name: 'Desserts',
      description: 'Une touche sucrée pour terminer',
      items: [
        { name: 'Mochi Glacé', price: '7.00€', description: 'Assortiment de 3 mochis' },
        { name: 'Matcha Tiramisu', price: '8.00€', description: 'Tiramisu au thé vert matcha' },
        { name: 'Dorayaki', price: '6.00€', description: 'Pancakes japonais fourrés à la pâte de haricot rouge' }
      ]
    }
  ];

  useEffect(() => {
    const hash = location.hash.replace('#', '');
    if (hash) {
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setActiveCategory(hash);
      }
    }
  }, [location]);

  const handleCategoryClick = (categoryId: string) => {
    setActiveCategory(categoryId);
    navigate(`/menu#${categoryId}`);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <div className="pt-16 bg-gray-50">
        <div className="relative h-[300px]">
          <img
            src="https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            className="w-full h-full object-cover"
            alt="Sushi presentation"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <h1 className="text-4xl md:text-5xl font-japanese text-white">Notre Carte</h1>
          </div>
        </div>

        {/* Category Navigation */}
        <div className="sticky top-16 bg-white shadow-md z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex space-x-1 py-4 overflow-x-auto">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => handleCategoryClick(category.id)}
                  className={`px-4 py-2 whitespace-nowrap rounded-md transition-colors ${
                    activeCategory === category.id
                      ? 'bg-indigo-900 text-white'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid gap-16">
            {categories.map((category) => (
              <div
                id={category.id}
                key={category.name}
                className="bg-white rounded-lg shadow-lg p-8 scroll-mt-32"
              >
                <h2 className="text-2xl font-japanese text-indigo-900 mb-2">{category.name}</h2>
                <p className="text-gray-600 mb-6 italic">{category.description}</p>
                
                <div className="grid md:grid-cols-2 gap-8">
                  {category.items.map((item) => (
                    <div key={item.name} className="border-b border-gray-100 pb-4 last:border-0">
                      <div className="flex justify-between items-baseline mb-1">
                        <h3 className="text-lg font-medium text-gray-900">{item.name}</h3>
                        <span className="text-indigo-900 font-medium">{item.price}</span>
                      </div>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-japanese text-indigo-900 mb-4">Informations</h2>
            <div className="text-gray-600 space-y-2">
              <p>• Tous nos plats sont préparés à la commande avec des produits frais</p>
              <p>• Prix nets en euros, taxes et service compris</p>
              <p>• Liste des allergènes disponible sur demande</p>
              <p>• Les plateaux peuvent être légèrement modifiés selon la disponibilité des produits</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Menu;