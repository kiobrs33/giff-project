import PropTypes from "prop-types";
import { useGifs } from "../hooks/useGifs";

export const GifsGrid = ({ category }) => {
  const { gifs, isLoading } = useGifs(category);

  if (isLoading) {
    return <h3>Cargando ................... </h3>;
  }

  return (
    <>
      <h3>{category}</h3>
      {gifs.map((gif) => {
        return (
          <img
            key={gif.id}
            src={gif.urlImage}
            alt={gif.title}
            className="gif-image"
          />
        );
      })}
    </>
  );
};

GifsGrid.propTypes = {
  category: PropTypes.string.isRequired,
};
