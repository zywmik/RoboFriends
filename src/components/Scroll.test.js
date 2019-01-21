import React from 'react';
import { shallow } from 'enzyme';
import Scroll from './Scroll';

describe('Scroll', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Scroll />);
  });


  it('expect to render Scroll', () => {
    expect(wrapper).toMatchSnapshot();
  });
})
