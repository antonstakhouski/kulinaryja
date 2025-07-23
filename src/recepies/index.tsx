import { Link } from "react-router-dom";

import * as images from "../assets/recepies";
import { belarusianRecipes } from "./data";
import "./index.css";

const Recepies = () => {
  return (
    <div>
      <h1>Recepies</h1>
      <div className="recepies-grid">
        {belarusianRecipes.map((recipe) => (
          <Link
            to={`/recepies/${recipe.id}`}
            key={recipe.id}
            className="recepie-card"
          >
            <h2 className="recepie-card-title">{recipe.name}</h2>
            <img
              src={
                images[recipe.image.replace(".jpg", "") as keyof typeof images]
              }
              alt={recipe.name}
              className="recepie-card-image"
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Recepies;
