import { useState } from "react";
import { AddCategory, GifsGrid } from "../components";

export const GiffApp = () => {
  const [categories, setCategories] = useState([]);

  const onAddCategory = (category) => {
    if (categories.includes(category)) return;
    setCategories((state) => [category, ...state]);
  };

  return (
    <div className="container">
      <h1>GiffApp</h1>
      <AddCategory newCategory={(category) => onAddCategory(category)} />
      {categories.map((category) => (
        <GifsGrid key={category} category={category} />
      ))}
    </div>
  );
};
