import { mount } from 'enzyme';
import Description from './description';

describe('<Description />', () => {
	const wrapper = mount(<Description />);
	it('should have a h1 tag', () => {
		expect(wrapper.find('h1').length).toEqual(1);
	});
	it('should have my name Zafar Saleem', () => {
		expect(wrapper.find('h1').text()).toBe('Zafar Saleem');
	});
	it('should have Skills component', () => {
		expect(wrapper.find('Skills').length).toEqual(1);
	});
	it('should have links/anchor tags', () => {
		expect(wrapper.find('a').length).toBeGreaterThan(1);
	});
});