import { mount } from 'enzyme';
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
	const paragraph = wrapper.find('p');

	it('should have p tag', () => {
		expect(paragraph.length).toEqual(1);
	});
	it('should have skills updating after 5000ms', async () => {
		expect(paragraph.text()).toBe('JavaScript');
		await act(() => sleep(5000));
		expect(paragraph.text()).toBe('React');
	}, 10000);
});
