import { categories } from "../data";
import CategoryItem from "./CategoryItem";

const Categories = () => {
  return (
    <>
      <h1>Categories</h1>
      <div className="card-grid">
        {categories.map((category) => (
          <CategoryItem key={category.id} category={category} />
        ))}
      </div>
    </>
  );
};

export default Categories;
