package com.example.service;

import com.example.constants.ErrorConstants;
import com.example.exceptions.ResourceNotFoundException;
import com.example.model.Recipe;
import com.example.repository.RecipeRepository;
import com.example.service.interfaces.RecipeService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@AllArgsConstructor
@Service
public class RecipeServiceImpl implements RecipeService {


    private final RecipeRepository recipeRepository;

    // Create
    @Override
    public Recipe createRecipe(Recipe recipe) {
        return recipeRepository.save(recipe);
    }

    // Read
    @Override
    public Optional<Recipe> getRecipeById(Long id) {
        return recipeRepository.findById(id);
    }

    @Override
    public List<Recipe> getAllRecipes() {
        return recipeRepository.findAll();
    }

    // Update
    @Override
    public Recipe updateRecipe(Long id, Recipe updatedRecipe) {
        if (!recipeRepository.existsById(id)) {
            throw new ResourceNotFoundException(ErrorConstants.RECIPE_NOT_FOUND + id);
        }
        updatedRecipe.setRecipeId(id);
        return recipeRepository.save(updatedRecipe); // or throw an exception
    }

    // Delete
    @Override
    public void deleteRecipe(Long id) {
        recipeRepository.deleteById(id);
    }
}
