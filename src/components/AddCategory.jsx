import PropTypes from "prop-types";
import { useState } from "react";

export const AddCategory = ({ newCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim().length <= 1) return;

    newCategory(inputValue);
    setInputValue("");
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Search Gifs"
        onChange={onInputChange}
        value={inputValue}
      />
    </form>
  );
};

AddCategory.propTypes = {
  newCategory: PropTypes.func.isRequired,
};
