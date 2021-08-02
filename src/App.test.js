import { shallow, mount } from 'enzyme';
import App from './App';
describe('<App />', () => {
  const wrapper = shallow(<App />);
  it('should have Dp component', () => {
    expect(wrapper.find('Dp').length).toEqual(1);
  });

  it('should have Description component', () => {
    expect(wrapper.find('Description').length).toEqual(1);
  });
});