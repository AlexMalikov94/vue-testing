import { mount } from '@vue/test-utils';
import AppTag from  '../AppTag.vue';

describe('test', () => {
    it('render out to tag text', () =>{
        let wrapper = mount(AppTag,{
            propsData: {
                text: 'Vue'
            }
        })
        expect(wrapper.html()).toContain('Vue')
    })

    it('render theme plain by default theme', () =>{
        let wrapper = mount(AppTag,{
            propsData: {
                text: 'Vue'
            }
        })
        expect(wrapper.classes()).toEqual(["tag"])
    })

    it('render theme plain by default theme', () =>{
        let wrapper = mount(AppTag,{
            propsData: {
                text: 'Vue',
                dark: true
            }
        })
        expect(wrapper.classes()).toContain('tag--dark')
    })
})