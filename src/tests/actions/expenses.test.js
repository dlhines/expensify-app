import { addExpense, editExpense, removeExpense } from '../../actions/expenses';
import uuid from 'uuid';

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
    const addEx = {
        description: '2',
        amount: 3,
        createdAt: 4,
        note: '1',
    }
    
    const genEx = addExpense(addEx);

    expect(genEx).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...addEx,
            id: expect.any(String),            
        }    
    });
});


test('should add new expense with defaults', () => {
    const addEx = {
        description: '',
        amount: 0,
        createdAt: 0,
        note: '',
    }
    
    const genEx = addExpense();

    expect(genEx).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...addEx,
            id: expect.any(String), // Can be use to expect any sort of dynamic value           
        }    
    });
});
// test('', () => {

// });