import React from 'react';
import { shallow } from 'enzyme';
import SearchBox from './SearchBox';

describe('SearchBox', () => {
  let wrapper;
  beforeEach(() => {
    const mockProps = [{
      searchField: '',
      searchChange: jest.fn()
    }]
    wrapper = shallow(<SearchBox {...mockProps}/>);
  });

  it('expect SearchBox to render', () => {
    expect(wrapper).toMatchSnapshot();
  });

});
