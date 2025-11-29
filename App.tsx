import React from 'react';
import Navbar from './components/Navbar';
import MenuSection from './components/MenuSection';
import InquiryForm from './components/InquiryForm';
import Button from './components/Button';
import InstagramFeed from './components/InstagramFeed';
import { REVIEWS, BUSINESS_INFO } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans text-stone-900 bg-gold-50 overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=2072&auto=format&fit=crop" 
            alt="Artisan Bread" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-stone-900/40"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in-up">
          <span className="block text-gold-200 tracking-[0.3em] uppercase text-sm md:text-base mb-6 font-bold">
            Est. 1922
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-8 leading-tight">
            Golden Majestic <br/> <span className="text-gold-300">Bakery</span>
          </h1>
          <p className="text-lg md:text-2xl text-stone-100 mb-10 max-w-2xl mx-auto font-light">
            {BUSINESS_INFO.tagline}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <Button 
               variant="secondary" 
               onClick={() => document.getElementById('menu')?.scrollIntoView({behavior: 'smooth'})}
             >
               View Menu
             </Button>
             <Button 
               variant="outline" 
               className="text-white border-white hover:bg-white hover:text-stone-900"
               onClick={() => document.getElementById('about')?.scrollIntoView({behavior: 'smooth'})}
             >
               Our Story
             </Button>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
          <svg className="w-8 h-8 text-white opacity-75" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative order-2 lg:order-1">
                 <div className="absolute -top-4 -left-4 w-24 h-24 bg-gold-100 rounded-full opacity-50"></div>
                 <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gold-200 rounded-full opacity-50"></div>
                 <img 
                    src="https://images.unsplash.com/photo-1556217477-d325851c9403?q=80&w=2070&auto=format&fit=crop" 
                    alt="Baker kneading dough" 
                    className="relative rounded-2xl shadow-2xl z-10 w-full"
                 />
              </div>
              <div className="order-1 lg:order-2">
                 <h2 className="text-4xl font-serif font-bold text-stone-900 mb-6">A Century of <span className="text-gold-600">Excellence</span></h2>
                 <p className="text-stone-600 text-lg leading-relaxed mb-6">
                   {BUSINESS_INFO.about}
                 </p>
                 <p className="text-stone-600 text-lg leading-relaxed mb-8">
                   Every morning before the sun rises, our ovens are already warm in Yewalewadi. From our humble beginnings in 1922 to becoming a household name in Pune, we remain committed to using the finest ingredients and traditional baking methods.
                 </p>
                 <div className="flex items-center space-x-4">
                    <div className="text-center">
                       <span className="block text-3xl font-bold text-stone-900">100+</span>
                       <span className="text-sm text-stone-500 uppercase tracking-wide">Years</span>
                    </div>
                    <div className="h-10 w-px bg-stone-300"></div>
                    <div className="text-center">
                       <span className="block text-3xl font-bold text-stone-900">100%</span>
                       <span className="text-sm text-stone-500 uppercase tracking-wide">Fresh</span>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      <MenuSection />

      <InstagramFeed />

      {/* Reviews Section */}
      <section id="reviews" className="py-24 bg-gold-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-stone-900">What Our Guests Say</h2>
            <div className="w-24 h-1 bg-gold-400 mx-auto mt-6"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {REVIEWS.map((review) => (
              <div key={review.id} className="bg-white p-8 rounded-xl shadow-lg border border-gold-100 flex flex-col hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4 text-gold-500">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className={`w-5 h-5 ${i < review.rating ? 'fill-current' : 'text-stone-300'}`} viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-stone-600 italic mb-6 flex-grow">"{review.text}"</p>
                <div className="flex items-center justify-between mt-auto">
                   <span className="font-bold text-stone-900">{review.author}</span>
                   <span className="text-xs text-stone-400">{review.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <InquiryForm />

      {/* Footer */}
      <footer id="contact" className="bg-stone-950 text-stone-400 py-16 border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-white text-xl font-serif font-bold mb-6">{BUSINESS_INFO.name}</h3>
            <p className="mb-6 max-w-xs">{BUSINESS_INFO.tagline}</p>
            <div className="flex space-x-4">
              <a 
                href={BUSINESS_INFO.socials.instagram} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center hover:bg-gold-600 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a 
                href={BUSINESS_INFO.socials.facebook} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center hover:bg-gold-600 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                 <svg className="w-6 h-6 mr-3 text-gold-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                 <span><a href={BUSINESS_INFO.locationLink} target="_blank" rel="noopener noreferrer" className="hover:text-gold-400 transition-colors">{BUSINESS_INFO.address}</a></span>
              </li>
              <li className="flex items-center">
                 <svg className="w-6 h-6 mr-3 text-gold-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                 <span>{BUSINESS_INFO.phone}</span>
              </li>
              <li className="flex items-center">
                 <svg className="w-6 h-6 mr-3 text-gold-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                 <span>{BUSINESS_INFO.email}</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-6">Opening Hours</h4>
            <p className="mb-2">Daily: <span className="text-white">7:00 AM - 10:00 PM</span></p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-stone-800 text-center text-sm">
          &copy; {new Date().getFullYear()} Golden Majestic Bakery. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default App;