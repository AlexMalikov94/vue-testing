import { mount } from '@vue/test-utils';
import AppCountdown from  '../AppCountdown.vue';

jest.useFakeTimers();

describe('AppCountdown', () => {
    it('renders the initial value', () => {
        let wrapper = mount(AppCountdown, {
            propsData: {
                start: 5
            }
        });
        expect(wrapper.html()).toContain('5');
    });

    it('set the interval for the countdown', () => {
        let wrapper = mount(AppCountdown, {
            propsData: {
                start: 5
            }
        });

        expect(setInterval).toHaveBeenCalledWith(expect.any(Function), 1000);

        jest.clearAllTimers();
    });

    it('decrements the number', () => {
        let wrapper = mount(AppCountdown, {
            propsData: {
                start: 5
            }
        });

        jest.advanceTimersByTime(1000);

        expect(wrapper.html()).toContain('5');

        jest.clearAllTimers();
    });
});