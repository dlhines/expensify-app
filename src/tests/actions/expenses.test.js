import { startAddExpense, addExpense, editExpense, removeExpense, setExpenses, startSetExpenses } from '../../actions/expenses';
import uuid from 'uuid';
import expenses from '../fixtures/expenses';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);

beforeEach((done) => {
    const expensesData = {}
    expenses.forEach(({id, description, note, amount}) => {
        expensesData[id] = { description, note, amount };
    });
    database.ref('expenses').set(expensesData).then(() => done());
});

test('should remove expense', () => {
    const action = removeExpense({id: '123abc'});
    expect(action).toEqual({
        type:'REMOVE_EXPENSE', 
        id: '123abc'
    });
});

test('should edit expense', () => {
    const action = editExpense('123abc', { note: 'New Note', amount: 3200 });
    expect(action).toEqual({
        type:'EDIT_EXPENSE', 
        id: '123abc',
        updates: {
            note: 'New Note',
            amount: 3200
        }
    });
});

test('should add new expense', () => {
    const action = addExpense(expenses[2]);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[2]
    });
});


test('should add new expense with defaults', () => {
    const addEx = {
        description: '',
        amount: 0,
        createdAt: 0,
        note: '',
        id: '234234'
    }
    
    const genEx = addExpense(addEx);

    expect(genEx).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...addEx,
            id: expect.any(String), // Can be use to expect any sort of dynamic value           
        }    
    });
});

test('should add expense to database and store', (done) => {
    const store = createMockStore({});
    const expenseData = {
        description: 'Mouse',
        amount: '3000',
        note: '',
        createdAt: 23,
    };

    store.dispatch(startAddExpense(expenseData)).then(() => {
        const action = store.getActions();
        expect(action[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseData,
            }
        });
        return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseDate);
        done();
    }).catch((e) => e);
});


test('should call set expenses with data', () => {
    const action = setExpenses(expenses);
    expect(action).toEqual({
        type: 'SET_EXPENSES',
        expenses,
    });
});

test('should fetch the expenses from firebase', (done) => {
    const store = createMockStore({});
    store.dispatch(startSetExpenses()).then(() => { 
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type:'SET_EXPENSES',
            expenses,
        });
        done();
    });
});
