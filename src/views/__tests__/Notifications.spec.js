import { mount, createLocalVue } from '@vue/test-utils';
import Notifications from '../Notifications.vue';
import Vuex from 'vuex';

const localVue = createLocalVue();

localVue.use(Vuex);


describe('Notifications', () => {
   it('renders notifications', () => {
      let store = new Vuex.Store({
          getters: {
            notifications: () => [
                {
                    id: 1,
                    body: 'One'
                },
                {
                    id: 2,
                    body: 'Two'
                }
            ]
          },
          actions: {
            getNotifications: () => []
          }
      });

      let wrapper = mount(Notifications,{
          localVue,
          store
      });

      let items = wrapper.findAll('li');

      expect(items.at(0).text()).toContain('One');
      expect(items.at(1).text()).toContain('Two');
   });
});