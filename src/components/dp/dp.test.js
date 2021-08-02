import { mount } from 'enzyme';
import Dp from './dp';

describe('<Dp />', () => {
	const wrapper = mount(<Dp />);
	it('should have divs for Arcs', () => {
		expect(wrapper.find('div').length).toBeGreaterThan(1);
	});
	it('should have an image', () => {
		expect(wrapper.find('img').length).toEqual(1);
	});
});