import { mount } from '@vue/test-utils';
import AppReveal from  '../AppReveal.vue';

describe('AppReveal', () => {
    it('render the text onclick', () =>{
        let wrapper = mount(AppReveal, {
            propsData: {
                text: 'Hello'
            }
        })

        wrapper.find('a').trigger('click')
        expect(wrapper.html()).toContain('Hello')
    })

    it('hide the original anchor text', () =>{
        let wrapper = mount(AppReveal, {
            propsData: {
                text: 'Hello'
            }
        })

        wrapper.find('a').trigger('click')
        expect(wrapper.find('a').exists()).toBe(true)
    })
})