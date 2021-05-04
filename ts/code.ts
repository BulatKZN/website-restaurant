import {getRecepies} from "./api";
import { Recipe } from './recipe';


const btnDish = document.querySelector('.btn-dish');

getRecepies().then((resp) => {
  const recipes = resp.results.map((rec) => {
      return new Recipe(rec.sourceName, rec.healthScore, rec.readyInMinutes, rec.image);
  })
  console.log(recipes);
})

