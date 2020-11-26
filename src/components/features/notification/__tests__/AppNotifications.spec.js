import { mount } from '@vue/test-utils';
import AppNotifications from  '../AppNotifications.vue';

jest.mock('axios', () => {
   return {
       get: () => Promise.resolve({
           data: {
               data: [
                   {
                       id: 1,
                       body: 'First Notification'
                   },
                   {
                        id: 2,
                        body: 'Second Notification'
                   }
                   
               ]
           }
       })
   };
});

describe('AppNotification', () => {
   it('renders a list of notification', () => {
       let wrapper =  mount(AppNotifications);

        ///wrapper.vm.$nextTick(()=> {
          // console.log(wrapper.html());
          /*let items = wrapper.findAll('li').at(0);

          expect(items.at(0).text()).toContains('First Notification');
          expect(items.at(1).text()).toContains('Second Notification');*/
      // });

       wrapper.vm.$nextTick().then(() => {
        let items = wrapper.findAll('li');

        expect(items.at(0).text()).toContain('First Notification');
        expect(items.at(1).text()).toContain('Second Notification');
       });
       
   });
})