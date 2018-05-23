import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';

test('should correctly render ExpensesSummary with 1 expense', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={12} />);
    expect(wrapper).toMatchSnapshot();

});

test('should correctly render ExpensesSummary with multi expense', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={14} expensesTotal={12} />);
    expect(wrapper).toMatchSnapshot();
});