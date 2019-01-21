import { shallow } from 'enzyme';
import React from 'react';
import Header from './Header';

describe('Header', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Header />);
  });
  it('expect Header component to render', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('expect to render only once', () => {
    const componentInstance = wrapper.instance();
    expect(componentInstance.shouldComponentUpdate()).toEqual(false);
  });
})
