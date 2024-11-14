import { PlusCircle } from 'lucide-react';

export function CreateRecipeButton() {
  const handleCreateRecipe = async () => {
    try {
      const response = await fetch('https://your-backend-api.com/create-recipe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: 'Created!' }),
      });

      if (!response.ok) {
        throw new Error('Failed to create recipe');
      }
      const data = await response.json();
      console.log(data); // Handle response data if needed
    } catch (error) {
      console.error('Error creating recipe:', error);
    }
  };

  return (
    <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-center items-center mb-8">
        <button
          className="flex items-center space-x-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          onClick={handleCreateRecipe}
        >
          <PlusCircle className="h-5 w-5" />
          <span>Create Recipe</span>
        </button>
      </div>
    </div>
  );
}
