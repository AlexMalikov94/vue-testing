import { mount } from '@vue/test-utils';
import AppList from  '../AppList.vue';
import AppHeader from '../../header/AppHeader.vue';

describe('test', () => {
    it('render content with default slots', () =>{
        let headerWrapper = {
            render(h) {
                return h (AppHeader,{
                    props: {
                        text: 'Home'
                    }
                })
            }
        }
    
        let wrapper = mount(AppList, {
            slots: {
                default: 'Content'
            }
        })
        expect(wrapper.html()).toContain('Content');
    })
})