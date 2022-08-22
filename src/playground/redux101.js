import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import './redux-expensify'
// action generators

const incrementCount = ({ incrementBy = 1 } = {}) => ({
        type: 'INCREMENT',
        incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
        type: 'DECREMENT',
        decrementBy
});

const setCount = ({ count }) => ({
        type: 'SET',
        count
});

// const resetCount = () => ({
//     type: 'RESET'
// })

// REDUCER

function counterReducer (state = { value: 0 }, action) {
    switch(action.type) {
    case "INCREMENT":
        return {
            ...state,
            value: state.value + action.incrementBy
        }
    case "DECREMENT":
        return {
            ...state,
            value: state.value - action.decrementBy
        }
    case "RESET":
        return {
            ...state,
            value: 0
        }
    case "SET":
        return {
            ...state,
            value: action.count
        }
    default:
        return state;
    }
}

// STORE 

const store = configureStore({
        reducer: counterReducer
});


//Action - an object that gets send to redux store
// increment, decrement, reset

store.dispatch(incrementCount({ incrementBy: 2 }));

store.dispatch(setCount({ count: 10 }));

store.dispatch(decrementCount());


const Playground = () => { 
    // console.log(store.getState())
    return (
        <Provider store={store}>
            <div>
                This is Redux Playground
            </div>
        </Provider>        
    )
}

export default Playground;