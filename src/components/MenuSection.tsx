import React from 'react';

const MenuSection = () => {
  const menuCategories = [
    {
      title: 'Menu CHIRASHI',
      items: [
        {
          name: 'Menu D',
          price: '11.60€',
          description: 'Soupe, salade + assortiment de poissons crus (Thon/Saumon/Dorade) dans un bol de riz vinaigré',
        }
      ]
    },
    {
      title: 'Menu Brochette',
      items: [
        {
          name: 'Menu A',
          price: '11.20€',
          description: 'Soupe, salade, riz + 6 brochettes : Poulet, bouchettes de poulet, aile de poulet, boeuf, boeuf au fromage, champignon',
        }
      ]
    },
    {
      title: 'Menu Poisson Cru',
      items: [
        {
          name: 'Menu N°12',
          price: '11.90€',
          description: 'Soupe, salade, riz + 3 Sushi assortis, 6 sashimi assortis',
        }
      ]
    }
  ];

  return (
    <section id="menu" className="py-10">
      <div className="max-w-7xl mx-auto px-2 sm:px-3 lg:px-4">
        <div id="promotions" className="text-center mb-8">
          <h2 className="text-3xl font-japanese text-indigo-900 mb-4">
            Nos réductions de la semaine
          </h2>
          <div className="bg-yellow-50 p-4 rounded-lg inline-block">
            <p className="text-gray-700 mb-2">
              Du lundi au vendredi, de 12h à 14h30
            </p>
            <p className="text-sm text-gray-600">
              -15% sur nos 3 menus ci-dessous • Boisson offerte pour les étudiants
            </p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuCategories.map((category) => (
            <div key={category.title} className="bg-white rounded-lg shadow-lg p-4">
              <h3 className="text-xl font-semibold text-indigo-900 mb-3">
                {category.title}
              </h3>
              <div className="space-y-3">
                {category.items.map((item) => (
                  <div key={item.name} className="border-b border-gray-100 pb-2 last:border-0">
                    <div className="flex justify-between items-baseline mb-1">
                      <h4 className="text-lg font-medium text-gray-900">{item.name}</h4>
                      <span className="text-indigo-900">{item.price}</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;