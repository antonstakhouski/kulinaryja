export interface Quantity {
  id: number;
  name: string; // e.g., "g", "ml", "pcs", "tbsp"
}

export interface Ingredient {
  id: number;
  name: string;
  description?: string; // Optional description for the ingredient
}

export interface Category {
  id: number;
  name: string;
}

export interface RecipeIngredient {
  ingredient: Ingredient;
  quantity: Quantity;
  count: number;
}

export interface Recipe {
  id: number;
  name: string;
  description: string;
  category: Category;
  ingredients: RecipeIngredient[];
  steps: string[];
  image: string;
}
