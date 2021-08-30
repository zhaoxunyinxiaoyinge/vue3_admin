import { getUserRoles } from "@/store/api/user";

async function getRoles({ state, commit, dispatch }, params = {}) {
  let res = await getUserRoles("/getRoles", "get", params);
  state.roles = res.data.roles;
  return res.data.roles;
}

export default {
  namespaced: true,

  state: {
    roles: [],
  },

  mutations: {},

  getters: {
    getRoles(state) {
      return state.roles;
    },
  },

  actions: {
    getRoles: getRoles,
  },
};
