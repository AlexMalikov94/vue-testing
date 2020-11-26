import { mount } from '@vue/test-utils';
import AppCoursePlayList from  '../AppCoursePlayList.vue';
import AppCoursePart from '../AppCoursePart.vue';


describe('AppCoursePlayList', () => {
   it('renders a list of parts', () => {
       let wrapper =  mount(AppCoursePlayList,{
           propsData: {
               course: {
                  parts: [
                      { id: 1, title: 'One' },
                      { id: 2, title: 'Two' }
                  ]   
               }
           }
       });
       
       expect(wrapper.findAll(AppCoursePart).length).toEqual(2);
   });
});