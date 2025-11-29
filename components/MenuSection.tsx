import React, { useState } from 'react';
import { MENU_ITEMS } from '../constants';

const MenuSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', ...Array.from(new Set(MENU_ITEMS.map(item => item.category)))];

  const filteredItems = activeCategory === 'All' 
    ? MENU_ITEMS 
    : MENU_ITEMS.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-12 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-16">
          <span className="text-gold-600 font-bold tracking-widest uppercase text-xs md:text-sm">Freshly Baked</span>
          <h2 className="mt-2 text-3xl md:text-5xl font-serif font-bold text-stone-900">Our Menu</h2>
          <div className="w-16 md:w-24 h-1 bg-gold-400 mx-auto mt-4 md:mt-6"></div>
          <p className="mt-4 text-sm md:text-base text-stone-600 max-w-2xl mx-auto px-4">
            From the crisp crackle of our morning sourdough to the delicate layers of our afternoon pastries.
          </p>
        </div>

        {/* Category Filters - Horizontal Scroll on Mobile */}
        <div className="flex overflow-x-auto md:flex-wrap pb-4 md:pb-0 justify-start md:justify-center gap-3 md:gap-4 mb-8 md:mb-12 scrollbar-hide px-4 -mx-4 md:mx-0 md:px-0 snap-x">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`snap-center flex-shrink-0 px-4 md:px-6 py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-300 whitespace-nowrap border ${
                activeCategory === category
                  ? 'bg-stone-900 text-white border-stone-900 shadow-lg'
                  : 'bg-stone-50 text-stone-600 border-stone-200 hover:bg-gold-100 hover:border-gold-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Menu Grid - 2 Column on Mobile */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-8">
          {filteredItems.map((item) => (
            <div key={item.id} className="group bg-gold-50 rounded-lg md:rounded-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 border border-stone-100 flex flex-col h-full">
              {/* Image */}
              <div className="relative h-32 md:h-64 overflow-hidden flex-shrink-0">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute top-2 right-2 md:top-4 md:right-4 bg-white/95 backdrop-blur-sm px-2 py-0.5 md:px-3 md:py-1 rounded-md md:rounded-full text-[10px] md:text-sm font-bold text-stone-900 shadow-sm border border-stone-100">
                  {item.price}
                </div>
              </div>
              
              {/* Content */}
              <div className="p-3 md:p-6 flex flex-col flex-grow">
                <div className="text-[10px] md:text-xs font-bold text-gold-600 uppercase mb-1 md:mb-2 tracking-wide truncate">
                  {item.category}
                </div>
                <h3 className="text-sm md:text-xl font-serif font-bold text-stone-900 mb-1 md:mb-2 leading-tight md:leading-snug line-clamp-2">
                  {item.name}
                </h3>
                <p className="text-stone-600 text-xs md:text-sm leading-relaxed mb-3 md:mb-4 line-clamp-2 md:line-clamp-3">
                  {item.description}
                </p>
                <div className="mt-auto">
                  <button className="text-[10px] md:text-sm font-bold text-stone-900 border-b md:border-b-2 border-gold-400 hover:border-stone-900 transition-colors pb-0.5 md:pb-1 inline-block">
                    Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;