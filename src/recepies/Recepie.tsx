import { useLoaderData } from "react-router-dom";

import * as images from "../assets/recepies";
import { belarusianRecipes } from "../data";
import "./Recepie.css";

const Recepie = () => {
  const recipe = useLoaderData<(typeof belarusianRecipes)[number]>();
  return (
    <>
      <h1>{recipe.name}</h1>
      <img
        className="recepie-image"
        src={images[recipe.image.replace(".jpg", "") as keyof typeof images]}
        alt={recipe.name}
      />
      <p className="recepie-description">{recipe.description}</p>
      <h2>Ingredients</h2>
      <ul className="recepie-ingredients">
        {recipe.ingredients.map((ingredient) => (
          <li key={ingredient.ingredient.id} className="recepie-ingredient">
            <span className="recepie-ingredient-name">
              {ingredient.ingredient.name}
            </span>
            <span className="recepie-ingredient-separator"> x </span>
            <span className="recepie-ingredient-quantity">
              {ingredient.count} {ingredient.quantity.name}
            </span>
          </li>
        ))}
      </ul>
      <h2>Instructions</h2>
      <ol className="steps">
        {recipe.steps.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>
    </>
  );
};

export default Recepie;
