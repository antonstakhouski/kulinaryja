import { Link, useLoaderData } from "react-router-dom";

import Kulinaryja from "./assets/kulinaryja.png";
import * as images from "./assets/recepies";
import { belarusianRecipes } from "./data";

const Home = () => {
  const recent = useLoaderData<typeof belarusianRecipes>();

  return (
    <>
      <h1>Welcome to Kulinaryja!</h1>
      <img src={Kulinaryja} alt="Kulinaryja" className="kulinaryja-logo" />
      <h2>Recent Recipes</h2>
      <div className="card-grid">
        {recent.map((recipe) => (
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
      <p>
        <Link to="/recepies">Browse all recipes →</Link>
      </p>
    </>
  );
};

export default Home;
