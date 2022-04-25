import { counterReducer } from './reducers/counter-reducer';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
    // Reducer: Appel implicite de "CombineReducer"
    reducer: {
        counter: counterReducer,
    },
    // Middleware: Appel implicite de "ApplyMiddleware" et de "Compose"
    middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), /* Les autres middlewares */],
    // Ajout des devTools simplifier :D
    devTools: process.env.NODE_ENV === 'development'
});

export default store;