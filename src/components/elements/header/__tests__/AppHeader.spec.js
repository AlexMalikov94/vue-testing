import { mount } from '@vue/test-utils';
import AppHeader from  '../AppHeader.vue';

describe('test', () => {
    it('render out to header text', () =>{
        let text = 'Home'
        let wrapper = mount(AppHeader,{
            propsData: {
                text
            }
        })

        expect(wrapper.html()).toContain(text)
        
    })
})