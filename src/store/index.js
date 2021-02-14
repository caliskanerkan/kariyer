import Vue from "vue";
import Vuex from "vuex";
import axios from "@/axios";
Vue.use(Vuex);
const initialQueryParams = {
  q: null,
  cityName: []
};
export default new Vuex.Store({
  state: {
    jobs: [],
    job: {},
    locations: [],
    queryParams: initialQueryParams
  },
  mutations: {
    SET_JOBS(state, jobs) {
      state.jobs = jobs;
    },
    SET_JOB(state, job) {
      state.job = job;
    },
    SET_LOCATIONS(state, locations) {
      state.locations = locations;
    },
    SET_QUERY_PARAMS(state, queryParams) {
      state.queryParams = queryParams;
    },
    RESET_QUERY_PARAMS(state) {
      state.queryParams = initialQueryParams;
    }
  },
  actions: {
    async getJobs({ commit, state }) {
      try {
        const params = { ...state.queryParams };
        const { data } = await axios.get("joblist", { params });
        commit("SET_JOBS", data);
      } catch (error) {
        console.log(error);
      }
    },
    async getLocations({ commit }) {
      try {
        const { data } = await axios.get("locations");
        commit("SET_LOCATIONS", data);
      } catch (error) {
        console.log(error);
      }
    }
  }
});
