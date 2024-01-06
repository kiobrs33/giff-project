import { useEffect, useState } from "react";
import { getGifs } from "../api/getGifs";

export const useGifs = (category) => {
  const [gifs, setGifs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const onGetGifs = async () => {
    const data = await getGifs(category);
    setGifs(data);
    setIsLoading(false);
  };

  useEffect(() => {
    onGetGifs();
  }, []);

  return {
    gifs,
    isLoading,
  };
};
