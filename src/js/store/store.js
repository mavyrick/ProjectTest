import { createStore } from "redux";
import rootReducer from "../reducers/index";
import { loadState, saveState } from "../LocalStorage/localStorage.js"

const persistedState = loadState();

const store = createStore(
    rootReducer,
    persistedState
);

store.subscribe(() => {
    saveState({
        categories: store.getState().categories,
        locations: store.getState().locations,
    });
});

// const store = createStore(rootReducer);

export default store;