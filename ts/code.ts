import {getRecepies} from "./api";
import { Recipe } from './recipe';


const btnDish = document.querySelector('.btn-dish');
const foodSlider = document.querySelector('.food-slider');

getRecepies().then((resp) => {
  const recipes : Recipe [] = resp.results.map((rec) => {
      return new Recipe(rec.sourceName, rec.healthScore, rec.readyInMinutes, rec.image);
  })
  recipes.forEach((recipe) => {
    foodSlider.appendChild(recipe.html());
  })
})

