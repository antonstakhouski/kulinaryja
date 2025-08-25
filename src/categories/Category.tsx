import { Link, useLoaderData } from "react-router-dom";

import * as images from "../assets/recepies";
import type { CategoryProps, RecipeProps } from "../types";

type CategoryLoaderData = {
  category: CategoryProps;
  recipes: RecipeProps[];
};

const CategoryPage = () => {
  const { category, recipes } = useLoaderData<CategoryLoaderData>();

  return (
    <div>
      <h1>{category.name}</h1>
      <div className="card-grid">
        {recipes.map((recipe) => (
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

export default CategoryPage;
