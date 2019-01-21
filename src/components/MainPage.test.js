import { shallow } from 'enzyme';
import React from 'react';
import MainPage from './MainPage';

describe('App container', () => {
  let wrapper;
  beforeEach(() => {
    const mockProps = {
      onRequestRobots: jest.fn(),
      robots: [],
      searchField: '',
      isPending: false
    }
    wrapper = shallow(<MainPage {...mockProps } />);
  });


  it('renders MainPage without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });


  it('filters robots correctly', () => {
    const mockProps2 = {
      onRequestRobots: jest.fn(),
      robots: [{
        id: 3,
        name: 'Jon Snow',
        email: 'johnny@bravo.com'
      }],
      searchField: 'jon',
      isPending: false
    }
    const wrapper2 = shallow(<MainPage {...mockProps2 } />);
    expect(wrapper2.instance().filterRobots()).toEqual([{
      id: 3,
      name: 'Jon Snow',
      email: 'johnny@bravo.com'
    }]);
  });


  it('filters robots correctly 2', () => {
    const mockProps3 = {
      onRequestRobots: jest.fn(),
      robots: [{
        id: 3,
        name: 'Jon Snow',
        email: 'johnny@bravo.com'
      }],
      searchField: 'kokos',
      isPending: false
    }
    const filteredRobots = [];
    const wrapper3 = shallow(<MainPage {...mockProps3 } />);
    expect(wrapper3.instance().filterRobots()).toEqual(filteredRobots);
  });


  it('expect Pending to work properly', () => {
    const mockPropsPending = {
      onRequestRobots: jest.fn(),
      robots: [],
      searchField: '',
      isPending: true
    }
    wrapper = shallow(<MainPage {...mockPropsPending } />);

    expect(wrapper.contains(<h1>Loading</h1>)).toEqual(true);
  });
})
