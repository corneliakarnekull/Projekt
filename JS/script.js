// script.js
import { getRandomRecipe } from './api.js';

const tags = "vegetarian,dessert";

async function displayRandomRecipe() {
  try {
    const recipe = await getRandomRecipe(tags);

    const recipeContainer = document.getElementById("baking-container");
    const recipeHTML = `
      <h2>${recipe.title}</h2>
      <img src="${recipe.image}" alt="${recipe.title}">
      <p>Ready in ${recipe.readyInMinutes} minutes</p>
      <p>Servings: ${recipe.servings}</p>
      <p>Tags: ${recipe.tags}</p>
      <p>Instructions: ${recipe.instructions}</p>
    `;
    recipeContainer.innerHTML = recipeHTML;
  } catch (error) {
    console.error("Error fetching baking recipe:", error);
    const recipeContainer = document.getElementById("baking-container");
    recipeContainer.innerHTML = `<p>Lyckades inte ladda recept.</p>`;
  }
}

displayRandomRecipe();