import React from 'react';
import { shallow } from 'enzyme';
import NotFoundPage from '../../components/PageNotFound';

test('should render PageNotFound correctly', () => {
    const wrapper = shallow(<NotFoundPage />);
    expect(wrapper).toMatchSnapshot();
});