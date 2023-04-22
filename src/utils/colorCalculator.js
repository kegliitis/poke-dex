import { FastAverageColor } from "fast-average-color";

// Create a single instance of FastAverageColor
const fac = new FastAverageColor();

// Cache for storing previously fetched colors
const colorCache = new Map();

export const getColorFromUrl = async (url) => {
  // Check if the color is already in the cache
  if (colorCache.has(url)) {
    return colorCache.get(url);
  }

  // Fetch and cache the color
  const color = await fac.getColorAsync(url);
  colorCache.set(url, color.rgb);

  return color.rgb;
};
