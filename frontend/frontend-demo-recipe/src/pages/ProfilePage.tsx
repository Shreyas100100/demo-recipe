import { User, Mail, MapPin, Calendar, ArrowLeft } from 'lucide-react';
import { RecipeCard } from '../components/RecipeCard';
import { useNavigate } from 'react-router-dom';

const ProfilePage = () => {

  const navigate = useNavigate();
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <button
        onClick={() => navigate("/home")}
        className="flex items-center text-sm text-orange-600 hover:text-orange-700 mb-4"
      >
        <ArrowLeft className="h-4 w-4 mr-1" />
        Go Back
      </button>
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="h-32 bg-gradient-to-r from-orange-300 to-orange-200"></div>
        <div className="relative px-6 pb-6">
          <div className="flex flex-col sm:flex-row items-center">
            <div className="-mt-16 mb-4 sm:mb-0">
              <div className="w-32 h-32 rounded-full border-4 border-white bg-orange-100 flex items-center justify-center">
                <User className="h-16 w-16 text-orange-600" />
              </div>
            </div>
            <div className="sm:ml-6 text-center sm:text-left">
              <h1 className="text-2xl font-bold text-gray-900">Aniket Lokare</h1>
              <p className="text-gray-600">Food enthusiast & home chef</p>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center text-gray-600 hover:text-orange-600">
                <Mail className="h-5 w-5 mr-2" />
                <span>aniket.lokare@example.com</span>
              </div>
              <div className="flex items-center text-gray-600">
                <MapPin className="h-5 w-5 mr-2" />
                <span>New York, USA</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Calendar className="h-5 w-5 mr-2" />
                <span>Joined March 2024</span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-orange-600">78</div>
                <div className="text-sm text-gray-600">Recipes</div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-orange-600">1.2k</div>
                <div className="text-sm text-gray-600">Followers</div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-orange-600">110</div>
                <div className="text-sm text-gray-600">Following</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">My Recipes</h2>
        {/* Recipe grid would go here */}
        <RecipeCard title={"Aniket's special"} image={''} time={'20 min'} servings={2} author={'Chef Aniket'}/>
      </div>
    </div>
  );
};

export default ProfilePage;