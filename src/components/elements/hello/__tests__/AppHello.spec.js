import { mount } from '@vue/test-utils';
import AppHello from  '../AppHello.vue';

describe('test', () => {
    it('render out to hello text', () =>{
        let wrapper = mount(AppHello)
        expect(wrapper.html()).toContain('Hello')
    });
});