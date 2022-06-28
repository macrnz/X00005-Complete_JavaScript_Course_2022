import * as model from "./model.js";
import { MODAL_CLOSE_SEC } from "./config.js";
import recipeView from "./views/recipeView.js";
import searchView from "./views/searchView.js";
import resultsView from "./views/resultsView.js";
import bookmarksView from "./views/bookmarksView.js";
import paginationView from "./views/paginationView.js";
import addRecipeView from "./views/addRecipeView.js";

//import icons from "../img/icons.svg"; //PARCEL 1
import icons from "url:../img/icons.svg"; //PARCEL 2
import "core-js/stable";
import "regenerator-runtime/runtime";
import { async } from "regenerator-runtime";

//if (module.hot) {
//  module.hot.accept();
//}
//console.log(icons);

//const recipeContainer = document.querySelector(".recipe");

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

    //UPDATING RESULTS VIEW TO MARK SELECTED SEARCH ITEM
    resultsView.update(model.getSearchResultsPage());
    bookmarksView.update(model.state.bookmarks);

    //LOADING RECIPE
    await model.loadRecipe(id);
    const { recipe } = model.state;

    //RENDERING RECIPE
    recipeView.render(model.state.recipe);
    //const recipeView = new RecipeView(model)
  } catch (err) {
    //console.log(err);
    recipeView.renderError(err);
  }
};

const controlSearchResults = async function () {
  try {
    resultsView.renderSpinner();
    //GET SEARCH QUERY
    const query = searchView.getQuery();
    if (!query) return;
    //LOAD SEARCH
    await model.loadSearchResults(query);
    //RENDERING SEARCH RESULTS
    //console.log(model.state.search.results);
    resultsView.render(model.getSearchResultsPage());
    paginationView.render(model.state.search);
    //RENDER INITIAL PAGINATION BUTTONS
  } catch (err) {
    console.log(err);
  }
};

const controlPagination = function (goToPage) {
  //NEW RESULTS
  resultsView.render(model.getSearchResultsPage(goToPage));
  //RENDER NEW PAGINATION BUTTONS
  paginationView.render(model.state.search);
};

const controlServings = function (newServings) {
  //UPDATE RECIPE SERVINGS
  model.updateServings(newServings);
  //UPDATE THE RECIPE VIEW
  //recipeView.render(model.state.recipe);
  recipeView.update(model.state.recipe);
};

const controlAddBookmark = function () {
  if (!model.state.recipe.bookmarked) {
    model.addBookmark(model.state.recipe);
  } else {
    model.deleteBookmark(model.state.recipe.id);
  }
  //console.log(model.state.recipe);
  recipeView.update(model.state.recipe);

  bookmarksView.render(model.state.bookmarks);
};

const controlBookmarks = function () {
  bookmarksView.render(model.state.bookmarks);
};

const controlAddRecipe = async function (newRecipe) {
  try {
    addRecipeView.renderSpinner();

    await model.uploadRecipe(newRecipe);

    //RENDER RECIPE
    recipeView.render(model.state.recipe);

    //SUCCESS MESSAGE
    addRecipeView.renderMessage();

    //RENDER BOOKMARKS VIEW
    bookmarksView.render(model.state.bookmarks);

    //CHANGE ID IN THE URL
    window.history.pushState(null, "", `#${model.state.recipe.id}`);

    //CLOSE FORM WINDOW
    setTimeout(function () {
      addRecipeView.toggleWindow;
    }, MODAL_CLOSE_SEC * 1000);
  } catch (err) {
    addRecipeView.renderError(err.message);
  }
};

//ACTIVE CODES
const init = function () {
  bookmarksView.addHandlerRender(controlBookmarks);
  recipeView.addHandlerRender(controlRecipes);
  recipeView.addHandlerUpdateServings(controlServings);
  recipeView.addHandlerAddBookmark(controlAddBookmark);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerClick(controlPagination);
  addRecipeView._addHandlerUpload(controlAddRecipe);
};

init();
