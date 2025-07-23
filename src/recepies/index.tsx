import { Link } from "react-router-dom";

import * as images from "../assets/recepies";
import { belarusianRecipes } from "../data";

const Recepies = () => {
  return (
    <div>
      <h1>Recepies</h1>
      <div className="card-grid">
        {belarusianRecipes.map((recipe) => (
          <Link to={`/recepies/${recipe.id}`} key={recipe.id} className="card">
            <h2 className="card-title">{recipe.name}</h2>
            <img
              src={
                images[recipe.image.replace(".jpg", "") as keyof typeof images]
              }
              alt={recipe.name}
              className="card-image"
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Recepies;
