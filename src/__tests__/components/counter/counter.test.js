import React from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import Counter from '../../../components/counter.js';

describe('<Thing />', () => {
  it('exists at the start of our application', () => {
    let app = shallow(<Counter />);
    expect(app.find('h3').exists()).toBeTruthy();
  });

  it('changes the state on click', ()=> {
    let app = mount(<Counter />);
    let button = app.find('.b1');
    button.simulate('click');
    expect(app.state('count')).toBeTruthy();
    // expect(app.find('span').text()).toContain('false');
  });

  it('renders correctly', () => {
    const tree = renderer.create(<Counter />).toJSON();
    expect(tree).toMatchSnapshot();
  })
});