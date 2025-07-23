import { Link } from "react-router-dom";

import * as images from "../assets/recepies";
import { belarusianRecipes } from "../data";
import type { Category } from "../types";

const CategoryItem = ({ category }: { category: Category }) => {
  const recipe = belarusianRecipes.find(
    (recipe) => recipe.category.id === category.id,
  );

  return (
    <Link to={`/categories/${category.id}`} key={category.id} className="card">
      <h2 className="card-title">{category.name}</h2>
      {recipe && (
        <img
          src={images[recipe.image.replace(".jpg", "") as keyof typeof images]}
          alt={category.name}
          className="card-image"
        />
      )}
    </Link>
  );
};

export default CategoryItem;
