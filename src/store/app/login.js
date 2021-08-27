export default {
    namespaced: true,
    state: {
        userInfo: {},
        token: ""
    },

    mutations: {
        getLogin(state, params) {
            // 默认是登录成功
            let tokenStr = "actvi1325623jkcndee";
            this.commit("login/setToken", tokenStr);
            state.userInfo.name = "zhaoxunyin";
            state.userInfo.passworld = "zxy123456.com";
        },

        setToken(state, params) {
            state.token = params;
        },

        clearToken(state, params) {
            state.token = ""
        }
    },

    getters: {
        getToken(state) {
            return state.token;
        }
    },

    actions: {
        login({
            state,
            commit,
            rootState
        }, params) {
            commit("getLogin", params);
            return new Promise((resolve, reject) => {
                resolve({
                    code: 0,
                    data: {
                        token: state.token
                    }
                });
            })
        },

        // 处理刷新时，token丢失和页面丢失
        checkToken({
            state,
            commit
        }, params) {
            if (params) {
                let userInfo = {
                    name: "xaomei",
                    password: 123456,
                    token: params
                }

                console.log(userInfo, "userInfo")

                commit("setToken", userInfo.token);
            }
        },

        resetToken({
            state,
            commit,
            rootState
        }) {
            // 这里是登录过期的需要重新登录地指令
            console.log("正在重置token,")
        }

    }
}