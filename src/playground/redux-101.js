import { createStore } from 'redux';

const incrementCount = ({incrementBy = 1} = {}) => ({
    type: 'INCREMENT',
    incrementBy,
});

const decrementCount = ({decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy,
});

const seCount = ({count}) => ({
    type: 'SET',
    count,

});

const resetCount = () => ({
    type: 'RESET',
});

const countReducer = (state = { count: 0 }, action) => {
    switch (action.type){
        case 'INCREMENT':
            return { count: state.count + action.incrementBy };
        case 'DECREMENT':        
            return { count: state.count - action.decrementBy };
        case 'RESET':
            return { count: 0 };
        case 'SET':
            return { count: action.count }  ;          
        default:
            return state;
    }
}

const store = createStore(countReducer);

store.subscribe(() => {
    console.log(store.getState());
})
store.dispatch(incrementCount({ incrementBy: 21 }));

store.dispatch({
    type: 'RESET'
});

store.dispatch(decrementCount({ decrementBy: 521 }));

store.dispatch(seCount({ count: 111 }));
store.dispatch(resetCount());
