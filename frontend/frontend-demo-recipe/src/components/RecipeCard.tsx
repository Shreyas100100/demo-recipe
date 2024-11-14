import { Clock, Users, BookmarkPlus } from 'lucide-react';

interface RecipeCardProps {
  title: string;
  image: string;
  time: string;
  servings: number;
  author: string;
}

export function RecipeCard({ title, image, time, servings, author }: RecipeCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div
        className="h-48 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
        <div className="flex items-center text-gray-600 text-sm mb-2">
          <Clock className="h-4 w-4 mr-1" />
          <span>{time}</span>
          <Users className="h-4 w-4 ml-4 mr-1" />
          <span>{servings} servings</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">by {author}</span>
          <button className="text-orange-500 hover:text-orange-600">
            <BookmarkPlus className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}