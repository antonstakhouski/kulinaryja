import { useLoaderData } from "react-router-dom";

import type { categories } from "../data";
import CategoryItem from "./CategoryItem";

const Categories = () => {
  const data = useLoaderData<typeof categories>();

  return (
    <>
      <h1>Categories</h1>
      <div className="card-grid">
        {data.map((category) => (
          <CategoryItem key={category.id} category={category} />
        ))}
      </div>
    </>
  );
};

export default Categories;
