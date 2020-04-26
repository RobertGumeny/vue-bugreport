import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";
import router from "../router";

Vue.use(Vuex);

let baseUrl = location.host.includes("localhost")
  ? "http://localhost:3000/"
  : "/";

let api = Axios.create({
  baseURL: baseUrl + "api/",
  timeout: 3000,
  withCredentials: true
});

export default new Vuex.Store({
  state: {
    profile: {},
    bugs: [],
    activeBug: {},
    notes: []

  },
  mutations: {
    setProfile(state, profile) {
      state.profile = profile;
    },
    setBugs(state, bugs) {
      state.bugs = bugs;
    }
  },
  actions: {
    //SECTION Auth stuff
    setBearer({ }, bearer) {
      api.defaults.headers.authorization = bearer;
    },
    resetBearer() {
      api.defaults.headers.authorization = "";
    },
    //!SECTION
    //SECTION Get requests
    //NOTE Get profile
    async getProfile({ commit }) {
      try {
        let res = await api.get("profile");
        commit("setProfile", res.data);
      } catch (error) {
        console.error(error);
      }
    },
    //NOTE Get bugs
    async getBugs({ commit, dispatch }) {
      try {
        let res = await api.get("bugs")
        console.log(res.data)
        commit("setBugs", res.data)
      } catch (error) {
        console.error(error)
      }
    },
    //!SECTION

    //SECTION Post requests
    //NOTE Report bug
    async reportBug({ commit, dispatch }, bugData) {
      try {
        await api.post("bugs", bugData)
        dispatch('getBugs')
      } catch (error) {
        console.error(error)
      }
    }
    //!SECTION
    //SECTION Put requests

    //!SECTION
    //SECTION Delete requests

    //!SECTION
  }
});
