import { mount } from 'enzyme';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import Skills from './skills';

beforeEach(() => {
	jest.setTimeout(10000);
});

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

describe('<Skills />', () => {
	const wrapper = mount(<Skills />);
	it('should have p tag', () => {
		expect(wrapper.find('p').length).toEqual(1);
	});
	it('should have skills updating after 5000ms', async () => {
		expect(wrapper.find('p').text()).toBe('JavaScript');
		await act(() => sleep(5000));
		expect(wrapper.find('p').text()).toBe('React');
	}, 10000);
});
