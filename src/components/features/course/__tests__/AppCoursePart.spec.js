import { mount } from '@vue/test-utils';
import AppCoursePart from '../AppCoursePart.vue';


describe('AppCoursePart', () => {
   it('renders a list of parts', () => {
        let wrapper = mount(AppCoursePart, {
            propsData: {
                part: {
                    id: 1,
                    title: "One"
                }
            }
        });

        let play = jest.fn();

        wrapper.setMethods({
            play
        });

        wrapper.find('a').trigger('click');

        expect(play).toBeCalled();
   });
});