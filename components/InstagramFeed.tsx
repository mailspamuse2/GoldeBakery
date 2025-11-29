import React from 'react';
import { INSTAGRAM_POSTS, BUSINESS_INFO } from '../constants';

const InstagramFeed: React.FC = () => {
  // We duplicate the posts to create a seamless infinite loop effect
  const displayPosts = [...INSTAGRAM_POSTS, ...INSTAGRAM_POSTS, ...INSTAGRAM_POSTS];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 flex flex-col md:flex-row justify-between items-end">
        <div className="text-center md:text-left w-full md:w-auto mb-6 md:mb-0">
          <span className="text-gold-600 font-bold tracking-widest uppercase text-xs md:text-sm block mb-2">Social Feed</span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-stone-900">
            Follow Us <span className="italic text-gold-500 font-normal">@GoldenMajestic</span>
          </h2>
        </div>
        <a 
          href={BUSINESS_INFO.socials.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-2 text-stone-900 font-bold border-b-2 border-gold-400 pb-1 hover:text-gold-600 transition-colors"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
          <span>View Profile</span>
        </a>
      </div>

      {/* Slider Container */}
      <div className="relative w-full">
        <div className="flex w-[200%] animate-scroll hover-pause">
          {displayPosts.map((post, index) => (
            <a 
              key={`${post.id}-${index}`} 
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative w-64 md:w-80 flex-shrink-0 mx-4 group"
            >
              <div className="aspect-square overflow-hidden rounded-xl shadow-md border border-stone-100 relative">
                 <img 
                   src={post.imageUrl} 
                   alt={post.caption} 
                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                 />
                 {/* Overlay */}
                 <div className="absolute inset-0 bg-stone-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white p-4 text-center">
                    <svg className="w-8 h-8 mb-2" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                    <span className="font-bold text-lg">{post.likes}</span>
                    <p className="text-xs mt-2 line-clamp-3">{post.caption}</p>
                 </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;