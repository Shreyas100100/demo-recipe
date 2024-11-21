import { PlusCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function CreateRecipeButton() {
  const navigate = useNavigate();
  const handleNavigate = () =>{
    navigate("/create");
  }
  return (
    <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-center items-center mb-8">
        <button
          className="flex items-center space-x-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700"
          onClick={handleNavigate}
        >
          <PlusCircle className="h-5 w-5" />
          <span>Create Recipe</span>
        </button>
      </div>
    </div>
  );
}
