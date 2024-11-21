import  { Navbar } from "../components/Navbar";
import { Carousel } from "../components/Carousel";
import { RecipeCard } from "../components/RecipeCard";
import { CreateRecipeButton } from "../components/CreateRecipeButton";
import Footer from "../components/Footer";
import FeaturedCollections from "../components/FeaturedCollections";

const topRecipes = [
  {
    title: "Classic Italian Pasta",
    image:
      "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=2070&q=80",
    time: "30 mins",
    servings: 4,
    author: "Chef Maria",
  },
  {
    title: "Grilled Salmon",
    image:
      "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=2070&q=80",
    time: "25 mins",
    servings: 2,
    author: "Chef John",
  },
  {
    title: "Chocolate Cake",
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=2089&q=80",
    time: "1 hour",
    servings: 8,
    author: "Chef Sarah",
  },
  {
    title: "Mediterranean Salad",
    image:
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=2070&q=80",
    time: "15 mins",
    servings: 2,
    author: "Chef Alex",
  },
];

export function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="pt-16">
        <Carousel />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div>
            <FeaturedCollections/>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">Top Recipes</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {topRecipes.map((recipe) => (
              <RecipeCard key={recipe.title} {...recipe} />
            ))}
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  );
}
