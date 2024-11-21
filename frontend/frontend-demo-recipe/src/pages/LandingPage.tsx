import {
  ChefHat,
  Clock,
  BookOpen,
  Users,
  ChevronRight,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

function LandingPage() {
  const navigate = useNavigate();
  return (
    <><div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <ChefHat className="h-8 w-8 text-orange-500" />
              <span className="ml-2 text-xl font-bold text-gray-900">
                DevCOOKS
              </span>
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={() => navigate("/login")}
                className="px-4 py-2 text-gray-600 hover:text-gray-900 font-medium"
              >
                Log in
              </button>
              <button 
              onClick={()=>{navigate("/register")}}
              className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors font-medium">
                Sign up
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-24 pb-16 sm:pt-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
                Discover & Share
                <span className="text-orange-500"> Amazing Recipes</span>
              </h1>
              <p className="mt-6 text-lg text-gray-600">
                Some text Bhai bhai bhai bhai bhai bhai bhai bhai bhai bhai bhai
                bhai bhai bhai bhai bhai bhai bhai bhai bhai bhai bhai bhai bhai
                bhai bhai bhai bhai bhai
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => navigate("/register")}
                  className="px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors font-medium flex items-center justify-center">
                  Get Started Free
                  <ChevronRight className="ml-2 h-5 w-5" />
                </button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&q=80&w=800"
                alt="Cooking image"
                className="rounded-2xl shadow-2x1" />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <Clock className="h-10 w-10 text-orange-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Quick & Easy</h3>
              <p className="text-gray-600">
                Find recipes that fit your schedule with detailed timing
                information.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <BookOpen className="h-10 w-10 text-orange-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Recipe Collections</h3>
              <p className="text-gray-600">
                Create and share your personal cookbook with your favorite
                recipes.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <Users className="h-10 w-10 text-orange-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Community</h3>
              <p className="text-gray-600">
                Connect with other food lovers and share your culinary journey.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Featured Recipes
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Homemade Pizza",
                image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=400",
                time: "45 mins",
              },
              {
                title: "Fresh Pasta",
                image: "https://images.unsplash.com/photo-1556761223-4c4282c73f77?auto=format&fit=crop&q=80&w=400",
                time: "30 mins",
              },
              {
                title: "Berry Smoothie",
                image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&q=80&w=400",
                time: "5 mins",
              },
            ].map((recipe, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    src={recipe.image}
                    alt={recipe.title}
                    className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <h3 className="text-white font-semibold text-lg">
                      {recipe.title}
                    </h3>
                    <p className="text-white/80 text-sm flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {recipe.time}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div></>
  );
}

export default LandingPage;
