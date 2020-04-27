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
  timeout: 6000,
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
    },
    setActiveBug(state, bug) {
      state.activeBug = bug
    },
    setActiveNotes(state, notes) {
      state.notes = notes
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
        commit("setBugs", res.data)
      } catch (error) {
        console.error(error)
      }
    },
    async getBugById({ commit, dispatch }, bugId) {
      try {
        let res = await api.get("bugs/" + bugId)
        commit("setActiveBug", res.data)
      } catch (error) {
        console.error(error)
      }
    },
    async getNotesByBugId({ commit, dispatch }, bugId) {
      try {
        let res = await api.get("bugs/" + bugId + "/notes")
        commit("setActiveNotes", res.data)
      } catch (error) {
        console.error(error)
      }
    },
    //!SECTION

    //SECTION Post requests
    //NOTE Report bug
    async reportBug({ commit, dispatch }, bugData) {
      try {
        let res = await api.post("bugs", bugData)
        commit("setActiveBug", res.data)
      } catch (error) {
        console.error(error)
      }
    },
    async createNote({ commit, dispatch }, noteData) {
      try {
        await api.post("notes", noteData)
        dispatch("getNotesByBugId", noteData.bugId)
      } catch (error) {
        console.error(error)
      }
    },
    //!SECTION
    //SECTION Put requests
    async editBug({ commit, dispatch }, bugData) {
      try {
        await api.put("bugs/" + bugData.id, bugData)
      } catch (error) {
        console.error(error)
      }
    },
    //!SECTION
    //SECTION Delete requests/close bug
    async closeBug({ commit, dispatch }, bugData) {
      try {
        console.log("deleting", bugData)
        await api.put("bugs/" + bugData._id, {
          closed: bugData.closed
        })
        dispatch("getBugById", bugData._id)
      } catch (error) {
        console.error(error)
      }
    },
    async deleteNote({ commit, dispatch }, noteData) {
      try {
        await api.delete("notes/" + noteData.id)
        dispatch("getNotesByBugId", noteData.bugId)

      } catch (error) {
        console.error(error)
      }
    }
    //!SECTION
  }
});
