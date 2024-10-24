package com.example.service.interfaces;

import com.example.model.Recipe;

import java.util.List;
import java.util.Optional;

public interface RecipeService {
    //CRUD
    //CREATE
    public Recipe createRecipe(Recipe recipe);

    //READ
    public Optional<Recipe> getRecipeById(Long id);
    public List<Recipe> getAllRecipes();
    //UPDATE
    public Recipe updateRecipe(Long id, Recipe updatedRecipe);

    //DELETE
    public void deleteRecipe(Long id);
}
