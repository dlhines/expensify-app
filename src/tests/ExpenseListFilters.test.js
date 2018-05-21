import React from 'react';
import { shallow } from 'enzyme';
import ExpenseListFilters from '../components/ExpenseListFilters';
import { filters, altFilters } from './fixtures/filters';

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
    setTextFilter = jest.fn();
    sortByDate = jest.fn();
    sortByAmount = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    wrapper = shallow(<ExpenseListFilters 
        filters={filters} 
        setTextFilter={setTextFilter}
        sortByAmount={sortByAmount}
        sortByDate={sortByDate}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
    />);
});

test('should take ExpenseListFilters snapshot', () => {
    expect(wrapper).toMatchSnapshot();
})
