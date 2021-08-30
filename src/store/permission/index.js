import { asyncRoute, containRoute } from "./../../router";
console.log(containRoute);

function hasPermission(roles, route) {
  if (route.meta && route.meta.roles) {
    return roles.some((role) => route.meta.roles.includes(role));
  } else {
    return true;
  }
}

function filterAsyncRoutes(routes, roles) {
  const res = [];

  routes.forEach((route) => {
    const tmp = {
      ...route,
    };

    if (hasPermission(roles, tmp)) {
      if (tmp.children) {
        tmp.children = filterAsyncRoutes(tmp.children, roles);
      }
      res.push(tmp);
    }
  });

  return res;
}

export default {
  namespaced: true,
  state: {
    addRoute: [],
    routes: containRoute,
  },

  mutations: {
    ["SET_ROUTES"](state, route) {
      // 用于动态添加路由
      state.addRoute = route;
      state.addRoute.push({
        path: "/:pathMatch(.*)*",
        name: "not",
        meta: {
          hidden: true,
        },
        redirect: "/404",
      });
      // 用于生成权限菜单
      state.routes = containRoute.concat(route);
    },
  },

  getters: {},

  actions: {
    getFilterRoutes({ state, commit, dispatch }, role) {
      let accessed;
      return new Promise((resolve, reject) => {
        if (role.includes("admin")) {
          accessed = asyncRoute || [];
        } else {
          accessed = filterAsyncRoutes(asyncRoute, role);
        }

        commit("SET_ROUTES", accessed);

        resolve(accessed);
      });
    },
  },
};
