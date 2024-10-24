package com.example.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;

@Entity
@Table(name = "review_ratings")
public class ReviewRating {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "review_id")
    private Long reviewId;

    @ManyToOne
    @JoinColumn(name = "recipe_id")
    private Recipe recipe;

    @NotBlank(message = "Review is required")
    @Size(max = 100, message = "Review can be up to 100 characters long")
    @Column(name = "review", columnDefinition = "TEXT")
    private String review;

    @Min(value = 0, message = "Rating cannot be negative")
    @Max(value = 5, message = "Rating cannot be higher than 5")
    @Column(name = "rating")
    private Double rating;


}
