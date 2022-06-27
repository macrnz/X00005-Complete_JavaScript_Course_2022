import * as model from "./model.js";
import recipeView from "./views/recipeView.js";

//import icons from "../img/icons.svg"; //PARCEL 1
import icons from "url:../img/icons.svg"; //PARCEL 2
import "core-js/stable";
import "regenerator-runtime/runtime";
//console.log(icons);

const recipeContainer = document.querySelector(".recipe");

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////
//console.log("test message");

const controlRecipes = async function () {
  try {
    //ID GENERATOR
    const id = window.location.hash.slice(1);
    if (!id) return;

    //LOAD SPINNER
    recipeView.renderSpinner();

    //LOADING RECIPE
    await model.loadRecipe(id);
    const { recipe } = model.state;

    //RENDERING RECIPE
    recipeView.render(model.state.recipe);
    //const recipeView = new RecipeView(model)
  } catch (err) {
    alert(err);
  }
};
//controlRecipes();

//ACTIVE CODES
//SIMPLIFIED
["hashchange", "load"].forEach((ev) =>
  window.addEventListener(ev, controlRecipes)
);
//ORIGINAL CODE BELOW
//window.addEventListener("hashchange", controlRecipes);
//window.addEventListener("load", controlRecipes);
