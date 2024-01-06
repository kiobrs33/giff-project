export const getGifs = async (category) => {
  const res = await fetch(
    `https://api.giphy.com/v1/gifs/search?api_key=HOkDU3syT7SNEgulTXIPb5vneLYhKGP3&q=${category}&limit=10`
  );
  const { data } = await res.json();

  const newData = data.map((item) => ({
    id: item.id,
    title: item.title,
    urlImage: item.images.downsized_medium.url,
  }));

  return newData;
};
