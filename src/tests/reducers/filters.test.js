import filtersReducer from '../../reducers/filters';
import expenses from '../fixtures/expenses';
import moment from 'moment';

test('should set up default filter values', () => {
    const state = filtersReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual({
        text: '',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month'),
        sortBy: 'date',         
    });
});

test('should set sort by to amount', () => {
    const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });
    expect(state.sortBy).toBe('amount');
});

test('should set sort by date', () => {
    const state = filtersReducer(undefined, { type: 'SORT_BY_DATE' });
    expect(state.sortBy).toEqual('date');
});

test('should set sort by text', () => {
    const state = filtersReducer(undefined, { type: 'SET_TEXT_FILTER', text: 'Valid' });
    expect(state.text).toEqual('Valid');
});

test('should set start date', () => {
    const state = filtersReducer(undefined, { type: 'SET_START_DATE', startDate: moment(0).add(1, 'day').valueOf });
    expect(state.startDate).toEqual(moment(0).add(1, 'day').valueOf);
});

test('should set end date', () => {
    const state = filtersReducer(undefined, { type: 'SET_END_DATE', endDate: moment(0).add(1, 'day').valueOf });
    expect(state.endDate).toEqual(moment(0).add(1, 'day').valueOf);
});

