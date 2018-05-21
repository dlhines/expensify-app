import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch(action.type) {
        case 'ADD_EXPENSE':
            return [...state, action.expense];
        case 'REMOVE_EXPENSE':
            return state.filter(({ id }) => id !== action.id);
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates,
                    }
                } else {
                    return expense;
                };
            });
        default:
            return state;
    };
};

const addExpense = ({
    description='',
    note='',
    amount=0,
    createdAt=0
} = {}) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        note,
        description,
        amount,
        createdAt,
    }
});

const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id,
});

const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates,
});


// FILTERS
const filtersReducerDefaultState = {
    text: '',
    startDate: undefined,
    endDate: undefined,
    sortBy: 'date',    
}
const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch(action.type) {
        case 'SET_TEXT_FILTER':
            return { ...state, text: action.text };
        case 'SORT_BY_DATE':
            return { ...state, sortBy: 'date' }
        case 'SORT_BY_AMOUNT':
            return { ...state, sortBy: 'amount' }
        case 'SET_START_DATE':
            return { ...state, startDate: action.startDate }
        case 'SET_END_DATE':
            return { ...state, endDate: action.endDate }                                       
        default:
            return state;
    };
};

const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text,
});

const sortByDate = () => ({
    type: 'SORT_BY_DATE',
});
const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT',
});
const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate,
});
const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate,
})

//  GET VISIBLE EXPENSES

const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if(sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1;
        } else if (sortBy === 'amount') {
            return a.createdAt < b.createdAt ? -1 : 1;
        }
    }); 
}

//  RUN STORE
const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer,
    })
);
store.subscribe(() => {
    const state = store.getState();
    const VisibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(VisibleExpenses);
});

const expOne = store.dispatch(addExpense({ description: 'Rent', amount: 32512, createdAt: 1200 }));
const expTwo = store.dispatch(addExpense({ description: 'Light Bill', amount: 321532, createdAt: -1000 }));

// store.dispatch(removeExpense({ id: expOne.expense.id }));
// store.dispatch(editExpense(expTwo.expense.id, { amount: 45000 }));
// store.dispatch(setTextFilter('bi'));
// store.dispatch(setTextFilter(''));
store.dispatch(sortByAmount());
store.dispatch(sortByDate());

// store.dispatch(setStartDate(1000));
// store.dispatch(setEndDate(521));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate())



// const demoState = {
//     expenses: [{
//         id: '3',
//         description: 'Rent',
//         note: 'Pay the rent',
//         amount: 13400,
//         createdAt: 0,
//     }],
//     filters: {
//         text: '',
//         startDate: undefined,
//         endDate: undefined,
//         sortBy: 'date',
//     }
// }

