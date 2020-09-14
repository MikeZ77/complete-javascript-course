// Global app controller
import Search from './models/Search';
import * as searchView from './views/searchView';
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
        // 4) Search for recipes
        await state.search.getResults();

        // 5) Render results on UI
        renderLoader(elements.searchResult);
        searchView.renderResults(state.search.result);
        clearLoader();
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

const search = new Search('pizza');
search.getResults();