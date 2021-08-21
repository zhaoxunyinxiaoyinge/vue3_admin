export default {
  namespaced: true,
  state: {
    userInfo: "",
    tagRouter: [],
    routerList: [],
    path: ""
  },

  mutations: {
    addTagRoute(state, playLoad) {
      let stateRouter = state.tagRouter;
      let index = stateRouter.findIndex((item) => item.path == playLoad.path);
      if (index == -1) {
        state.tagRouter.push(playLoad);
      }
      if (state.tagRouter.length > 6) {
        state.tagRouter.shift();
      }
    },

    removeTagRouter(state, playLoad) {
      let index = state.tagRouter.findIndex((item) => item.path == playLoad.path);
      let routerLength = state.tagRouter.length;
      if (routerLength > 0) {
        for (let i = 0; i < routerLength; i++) {
          if (i == index) {
            state.tagRouter.splice(i, 1);
            break;
          }
        }
      }
    },

    getLastTagRouter(state, playload) {

    },

    addRouterList(state, playLoad) {
      state.routerList = playLoad;
    },

    getPaths(state, playLoad) {
      let reg = /\//g;
      if (playLoad.indexOf("/") !== -1) {
        state.path = playLoad;

      } else if (reg.test("/").length > 1) {
        state.path = state.path.substr(0, state.path.lastIndexOf("/")) + "/" + playLoad;
      } else {
        state.path = state.path + "/" + playLoad;
      }
    }

  },

  getters: {
    getTagRouter(state, getters, rootState) {
      return state.tagRouter;
    },
    getpath: (state, getters, rootState) => state.path
  },

  actions: {
    actionTagRouter({
      dispatch,
      commit,
      getters,
      rootGetters
    }, parmas) {
      commit("addTagRoute", parmas);
    },

    actionRemoveTagRouter({
      dispatch,
      commit,
      getters,
      rootGetters
    }, parmas) {
      commit("removeTagRouter", parmas);
    },

    isActive({
      dispatch,
      commit,
      getters,
      rootGetters
    }, parmas) {
      commit("isActives", parmas)
    },
    addRouter({
      dispatch,
      commit,
      getters,
      rootGetters
    }, parmas) {
      commit("addRouterList", parmas)

    },

    getPaths({
      dispatch,
      commit,
      getters,
      rootGetters
    }, parmas) {
      commit("getPaths", parmas)
    }
  },



};