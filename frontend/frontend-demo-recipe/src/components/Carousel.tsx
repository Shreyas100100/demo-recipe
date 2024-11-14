import { Search } from 'lucide-react';
import { SearchBar } from './SearchBar';

export function Carousel() {
  return (
    <div className="relative h-[500px] bg-gradient-to-r from-gray-900 to-gray-800">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=2070&q=80')`
        }}
      />

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Discover Amazing Recipes
        </h1>
        <p className="text-xl text-gray-200 mb-8 max-w-2xl">
          Find and share the best recipes from around the world
        </p>

        {/* Search Bar */}
        <div className="w-full max-w-2xl mx-auto">
          <SearchBar/>
          {/* Popular Searches */}
          <div className="mt-4 flex items-center justify-center gap-2 text-sm">
            <span className="text-gray-400">Popular:</span>
            {['Italian Pasta', 'Chicken Curry', 'Vegan Desserts', 'Quick Meals'].map((term) => (
              <button
                key={term}
                className="px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 text-gray-200 transition duration-150"
              >
                {term}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}