import React from "react";
import AppRouter from "./routers/AppRouter";
import getStore from "./store/configureStore";
import {addExpense} from './actions/expenses'
// import {setTextFilter} from "./actions/filters";
// import getVisibleExpense  from './selectors/expenses'
import { Provider } from 'react-redux';

const store = getStore();

store.dispatch(addExpense({
  description: 'Water bill',
  amount: 20,
  note: "to be paid by next month",
  createdAt: 1661150926000
}))

store.dispatch(addExpense({
  description: 'rent',
  amount: 1200,
  note: "to be paid by next month",
  createdAt: 10000
}))

store.dispatch(addExpense({
  description: 'Gas bill',
  amount: 10,
  note: "to be paid in 3 days",
  createdAt: 1000
}))




function App() {
  
  return (
    <Provider store={store}>
      
        <AppRouter />
    
    </Provider>
    
)}


export default App;
