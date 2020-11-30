import axios from 'axios';
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    notifications: []
  },
  getters: {
    notifications(state) {
      return state.notifications.filter((n) => {
         return n.read === false;
      });
    }
  },
  mutations: {
    SET_NOTIFICATIONS(state, data) {
       state.notifications = data;
    }
  },
  actions: {
    async getNotifications({ commit }) {
       let response = await axios.get('/notifications.json');

       commit('SET_NOTIFICATIONS', response.data.data);
    }
  },
  modules: {
  }
});
