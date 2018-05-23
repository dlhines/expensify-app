import React from 'react';
import { shallow } from 'enzyme';
import EditExpensePage from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';

let onSubmit, history, wrapper;

beforeEach(() => {
    editExpense = jest.fn();
    removeExpense = jest.fn();    
    history = { push: jest.fn() };
    wrapper = shallow(<EditExpensePage editExpense={editExpense} removeExpense={removeExpense} history={history} expense={expenses[3]}/>);
});

test('should render EditExpensePage', () => {
  // expect(wrapper).toMatchSnapshot();
})

