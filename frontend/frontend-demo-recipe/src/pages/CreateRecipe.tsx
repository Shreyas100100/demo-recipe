import React, { useState, useRef } from "react";
import { ArrowLeft, Image as ImageIcon, Plus, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface Ingredient {
  id: number;
  name: string;
  amount: string;
}

const CreateRecipePage = () => {
  const [title, setTitle] = useState("");
  const [time, setTime] = useState("");
  const [servings, setServings] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState<Ingredient[]>([
    { id: 1, name: "", amount: "" },
  ]);
  const [steps, setSteps] = useState<string[]>([""]);
  const [images, setImages] = useState<string[]>([]);
  const [responseMessage, setResponseMessage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const newImages = Array.from(files).map((file) =>
        URL.createObjectURL(file)
      );
      setImages((prev) => [...prev, ...newImages]);
    }
  };

  const addIngredient = () => {
    setIngredients((prev) => [
      ...prev,
      { id: prev.length + 1, name: "", amount: "" },
    ]);
  };

  const removeIngredient = (id: number) => {
    setIngredients((prev) => prev.filter((ing) => ing.id !== id));
  };

  const addStep = () => {
    setSteps((prev) => [...prev, ""]);
  };

  const removeStep = (index: number) => {
    setSteps((prev) => prev.filter((_, i) => i !== index));
  };

  const navigate = useNavigate();

  const handleSubmit = async () => {
    const data = {
      title,
      time,
      servings,
      cuisine,
      description,
      ingredients,
      steps,
      images, // Assuming you handle images (e.g., upload them and get URLs)
    };

    try {
      const response = await fetch("https://671b3d282c842d92c37f0807.mockapi.io/api/recipe/Create-recipe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const result = await response.json();
        setResponseMessage("Recipe created successfully!");
        console.log(result);
        navigate('/home');
      } else {
        const error = await response.json();
        setResponseMessage(`Error: ${error.message}`);
      }
    } catch (error) {
      setResponseMessage(`Error: ${error}`);
    }
  };
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <button
        onClick={() => navigate("/home")}
        className="flex items-center text-sm text-orange-600 hover:text-orange-700 mb-4"
      >
        <ArrowLeft className="h-4 w-4 mr-1" />
        Go Back
      </button>

      <h1 className="text-3xl font-bold text-gray-900 mb-8">
        Create New Recipe
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          {/* Basic Information */}
          <div className="bg-white p-6 rounded-lg shadow-sm animate-fadeIn">
            <h2 className="text-xl text-orange-600 font-bold mb-4">Basic Information</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Recipe Title
                </label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                  placeholder="Enter recipe title"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Preparation Time
                  </label>
                  <input
                    type="number"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                    placeholder="in minutes"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Servings
                  </label>
                  <input
                    type="number"
                    value={servings}
                    onChange={(e) => setServings(e.target.value)}
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                    placeholder="e.g., 4"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Cuisine
                  </label>
                  <input
                    type="text"
                    value={cuisine}
                    onChange={(e) => setCuisine(e.target.value)}
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                    placeholder="e.g., Italian"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="bg-white p-6 rounded-lg shadow-sm animate-fadeIn">
            <h2 className="text-xl text-orange-600 font-bold mb-4">Description</h2>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={4}
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
              placeholder="Describe your recipe..."
            />
          </div>

          {/* Ingredients */}
          <div className="bg-white p-6 rounded-lg shadow-sm animate-fadeIn">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl text-orange-600 font-bold mb-4">Ingredients</h2>
              <button
                onClick={addIngredient}
                className="flex items-center text-xxl text-orange-600 hover:text-orange-700"
              >
                <Plus className="h-4 w-4 mr-1" />
                Add Ingredient
              </button>
            </div>
            <div className="space-y-3">
              {ingredients.map((ingredient) => (
                <div key={ingredient.id} className="flex gap-3">
                  <input
                    type="text"
                    value={ingredient.amount}
                    onChange={(e) => {
                      const updated = ingredients.map((ing) =>
                        ing.id === ingredient.id
                          ? { ...ing, amount: e.target.value }
                          : ing
                      );
                      setIngredients(updated);
                    }}
                    className="w-1/3 rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                    placeholder="Amount"
                  />
                  <input
                    type="text"
                    value={ingredient.name}
                    onChange={(e) => {
                      const updated = ingredients.map((ing) =>
                        ing.id === ingredient.id
                          ? { ...ing, name: e.target.value }
                          : ing
                      );
                      setIngredients(updated);
                    }}
                    className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                    placeholder="Ingredient name"
                  />
                  <button
                    onClick={() => removeIngredient(ingredient.id)}
                    className="p-2 text-gray-400 hover:text-gray-600"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Steps */}
          <div className="bg-white p-6 rounded-lg shadow-sm animate-fadeIn">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl text-orange-600 font-bold mb-4">Steps</h2>
              <button
                onClick={addStep}
                className="flex items-center text-sm text-emerald-600 hover:text-emerald-700"
              >
                <Plus className="h-4 w-4 mr-1" />
                Add Step
              </button>
            </div>
            <div className="space-y-3">
              {steps.map((step, index) => (
                <div key={index} className="flex gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 font-medium">
                    {index + 1}
                  </span>
                  <textarea
                    value={step}
                    onChange={(e) => {
                      const updated = [...steps];
                      updated[index] = e.target.value;
                      setSteps(updated);
                    }}
                    rows={2}
                    className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                    placeholder={`Step ${index + 1}`}
                  />
                  <button
                    onClick={() => removeStep(index)}
                    className="p-2 text-gray-400 hover:text-gray-600"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Image Upload Section */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-sm animate-fadeIn">
            <h2 className="text-xl text-orange-600 font-bold mb-4">Recipe Images</h2>
            <div
              onClick={() => fileInputRef.current?.click()}
              className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-orange  -500 transition-colors cursor-pointer"
            >
              <ImageIcon className="h-12 w-12 mx-auto text-gray-400" />
              <p className="mt-2 text-sm text-gray-600">
                Click to upload images
              </p>
              <p className="text-xs text-gray-500">PNG, JPG up to 10MB</p>
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleImageUpload}
                multiple
                accept="image/*"
                className="hidden"
              />
            </div>

            {images.length > 0 && (
              <div className="mt-6 grid grid-cols-2 gap-4">
                {images.map((image, index) => (
                  <div key={index} className="relative group">
                    <img
                      src={image}
                      alt={`Recipe ${index + 1}`}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                    <button
                      onClick={() =>
                        setImages(images.filter((_, i) => i !== index))
                      }
                      className="absolute top-2 right-2 p-1 bg-white rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <X className="h-4 w-4 text-gray-600" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          <button
            onClick={handleSubmit}
            className="w-full py-3 px-4 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors"
          >
            Publish Recipe
          </button>

          {responseMessage && (
            <div className="mt-4 p-4 bg-red-100 text-red-700 rounded-lg">
              {responseMessage}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreateRecipePage;
