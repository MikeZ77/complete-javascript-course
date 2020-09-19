// Global app controller
import Search from './models/Search';
import Recipe from './models/Recipe'
import List from './models/List'
import * as searchView from './views/searchView';
import * as recipeView from './views/recipeView';
import {elements, renderLoader, clearLoader} from './views/base';

/**
 * The global state of the app 
 * Search object
 * Current recipe object
 * Shopping list object
 * Linked recipes
 * */ 
const state = {};

const controlSearch = async () => {
    // 1) Get qury from the view
    const query = searchView.getInput(); //TODO

    if (query) {
        // 2) New search object and add it to state
        state.search = new Search(query);
        
        // 3) Prepare UI for results
        searchView.clearInput();
        searchView.clearResults();
        try {
            // 4) Search for recipes
            await state.search.getResults();

            // 5) Render results on UI
            renderLoader(elements.searchResult);
            searchView.renderResults(state.search.result);
            clearLoader();
        } catch(error) {
            alert("Something went wrong with the search");
        }

    }
}

elements.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
})

elements.searchResPages.addEventListener('click', e => {
    const btn = e.target.closest('.btn-inline');
    if (btn) {
        const goToPage = parseInt(btn.dataset.goto);
        searchView.clearResults();
        searchView.renderResults(state.search.result, goToPage);
    }
});


/**
 * RECIPE CONTROLLER
 */
const controlRecipe = async ()=> {
    const id = window.location.hash.replace('#','');
    console.log(id)
    if (id) {
        // Prepare UI for changes
        recipeView.clearRecipe();
        renderLoader(elements.recipe);
        // Highlight selected search item
        if (state.search) {
            searchView.highlightSelected(id);
        }
        // Create new recipe object
        state.recipe = new Recipe(id);
        
        try {
        // Get recipe data and parse ingredients
            await state.recipe.getRecipe();
            state.recipe.parseIngredients();
            // Calculate time and servings
            state.recipe.calcTime();
            state.recipe.calcServings();
            // Render the recipe to UI
            clearLoader();
            recipeView.renderRecipe(state.recipe);
        } catch(err) {
            alert("Error processing recipe!");
        }

    }
};

['hashchange', 'load'].forEach((event) => window.addEventListener(event, controlRecipe));

// Handling recipe button clicks
elements.recipe.addEventListener('click', e => {
    if (e.target.matches('.btn-decrease, .btn-decrease *')) {
        // Decrease button is clicked
        if (state.recipe.servings > 1) {
            state.recipe.updateServings('dec');
            recipeView.updateServingsIngredients(state.recipe);
        }
    }else if (e.target.matches('.btn-increase, .btn-increase *')) {
        // Increase button is clicked
        state.recipe.updateServings('inc');
        recipeView.updateServingsIngredients(state.recipe);
    }
});

window.a = new List();