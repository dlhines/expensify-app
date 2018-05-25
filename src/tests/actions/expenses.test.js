import { startAddExpense, addExpense, editExpense, removeExpense } from '../../actions/expenses';
import uuid from 'uuid';
import expenses from '../fixtures/expenses';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk])

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
    });
});

test('should add expense with defaults to database and store', () => {

});
