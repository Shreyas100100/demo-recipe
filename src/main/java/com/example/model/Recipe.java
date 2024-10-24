package com.example.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@Entity
@Table(name = "recipes")
public class Recipe {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long recipeId;

    @NotBlank(message = "Title is required")
    @Size(max = 100, message = "Title can be up to 100 characters long")
    @Column(name="title",nullable = false, length = 100)
    private String title;

    @Size(max = 1000, message = "Description can be up to 1000 characters long")
    @Column(name="description",columnDefinition = "TEXT")
    private String description;

    @NotNull(message = "Recipe type is required")
    @Enumerated(EnumType.STRING)
    @Column(name="",nullable = false, length = 20)
    private com.example.model.RecipeType type;  // Vegetarian or Non-Vegetarian

    @NotBlank(message = "Cuisine is required")
    @Size(max = 20, message = "Cuisine can be up to 20 characters long")
    @Column(nullable = false, length = 20)
    private String cuisine;

    @Min(value = 0, message = "Rating cannot be negative")
    @Max(value = 5, message = "Rating cannot be higher than 5")
    @Column(nullable = true)
    private Double rating = 0.0;

    @ElementCollection
    @CollectionTable(name = "recipe_reviews", joinColumns = @JoinColumn(name = "recipe_id"))
    @Size(max = 1000, message = "Each review can have up to 1000 characters")
    @Column(name = "review", columnDefinition = "TEXT")
    private List<String> reviews;

}
