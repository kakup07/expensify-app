import { configureStore } from "@reduxjs/toolkit";
import expensesReducer from '../reducers/expenses'
import filterReducer from '../reducers/filters';
// import { getDefaultMiddleware } from '@reduxjs/toolkit';


const getStore = () => {
    const store = configureStore({
        reducer: {
            expenses: expensesReducer,
            filter: filterReducer
        },
        middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
    });

    return store;
    
}
// store creation

export default getStore;

