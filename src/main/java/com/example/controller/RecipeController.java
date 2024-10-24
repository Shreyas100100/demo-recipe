package com.example.controller;

import com.example.model.Recipe;
import com.example.service.interfaces.RecipeService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@AllArgsConstructor
public class RecipeController {
    private final RecipeService recipeService;

    @PutMapping("/{id}")
    public Recipe updateRecipe(@PathVariable Long id, @RequestBody Recipe recipe)
    {
        recipeService.updateRecipe(id,recipe);
        return recipe;
    }


}
