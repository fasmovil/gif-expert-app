export const getGifs = async ( category ) => {
  const url = `http://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&api_key=rVS2uRE3cOqXBzs4oTT4029ULqRwQE8K&limit=10`;
  const response = await fetch(url);
  const {data} = await response.json();
  const gifs = data.map(img => {
    return {
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url
    }
  });
  
  return gifs;
}