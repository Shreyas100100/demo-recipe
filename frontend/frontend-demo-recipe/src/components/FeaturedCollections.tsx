import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Collection {
    id: number;
    title: string;
    image: string;
    recipeCount: number;
}

const collections: Collection[] = [
  {
    id: 1,
    title: 'Quick & Easy Dinners',
    image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&q=80&w=800',
    recipeCount: 28,
  },
  {
    id: 2,
    title: 'Healthy Breakfast',
    image: 'https://images.unsplash.com/photo-1494859802809-d069c3b71a8a?auto=format&fit=crop&q=80&w=800',
    recipeCount: 15,
  },
  {
    id: 3,
    title: 'Vegetarian Delights',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&q=80&w=800',
    recipeCount: 32,
  },
];

const FeaturedCollections = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Featured Collections</h2>
          <Link to="/collections" className="text-emerald-600 hover:text-emerald-700 flex items-center">
            View All
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {collections.map((collection) => (
            <Link
              key={collection.id}
              to={`/collections/${collection.id}`}
              className="group relative rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <img
                src={collection.image}
                alt={collection.title}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-semibold text-white mb-1">{collection.title}</h3>
                <p className="text-white/80">{collection.recipeCount} recipes</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollections;