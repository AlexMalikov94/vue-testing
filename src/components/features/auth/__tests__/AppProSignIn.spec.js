import { mount, RouterLinkStub } from '@vue/test-utils';
import AppProSignIn from  '../AppProSignIn.vue';

describe('AppProSignIn', () => {
    const $route = {
        fullPath: '/dashboard'
    }
  it('renders the sign in link', () => {
    
      let wrapper = mount(AppProSignIn, {
         stubs:{
             RouterLink: RouterLinkStub
         },
         mocks: {
             $route
         }
      });
      expect(wrapper.find('a').props().to.name).toEqual('auth-signin');
  });

    it('redirect link to current path', () => {
    
        let wrapper = mount(AppProSignIn, {
        stubs:{
            RouterLink: RouterLinkStub
        },
        mocks: {
                $route
            }
        });
        expect(wrapper.find('a').props().to.query.redirect).toEqual('/dashboard');
    });
});