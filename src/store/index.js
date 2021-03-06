import Vue from "vue";
import Vuex from "vuex";
import authenticate from "./modules/authenticate";
import categories from "./modules/getCategories";
import topics from "./modules/getTopics";
import postNewTopic from "./modules/postNewTopic";
import topicReplies from "./modules/topicReplies";
import display from "./modules/display";
import fileUpload from "./modules/fileUpload";
import createPersistedState from 'vuex-persistedstate'
Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [createPersistedState({
    storage: window.sessionStorage,
})],
  state: {},
  mutations: {},
  actions: {},
  modules: {
    checkAuthenticate: authenticate,
    getCategories: categories,
    getTopics: topics,
    postNewTopic,
    topicReplies,
    display,
    fileUpload,
  },
});
