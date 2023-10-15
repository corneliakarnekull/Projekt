// api.js
const apiKey = "266635d7b0f54783a8269927167e7a37";

async function getRandomRecipe(tags) {
  try {
    const queryParams = new URLSearchParams({
      number: 1,
      tags: tags,
      apiKey: apiKey
    });

    const response = await fetch(`https://api.spoonacular.com/recipes/random?${queryParams}`);
    const data = await response.json();
    const recipe = data.recipes[0];

    return recipe;
  } catch (error) {
    throw error;
  }
}

export { getRandomRecipe };