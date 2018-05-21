import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense, removeExpense, editExpense } from './actions/expenses';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';


const store = configureStore();

store.subscribe(() => {
    const state = store.getState();
    const VisibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(VisibleExpenses);
});

store.dispatch(addExpense({description: 'Water Bill', amount: '4500', note: 'Pay the water bill', createdAt: '2000'}));
store.dispatch(addExpense({description: 'Light Bill', amount: '1500', note: 'Pay the light bill', createdAt: '1235'}));
store.dispatch(addExpense({description: 'Car Note', amount: '2500', note: 'Pay the car note', createdAt: '5235'}));

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));