/*
 * @Author: your name
 * @Date: 2021-08-14 23:09:20
 * @LastEditTime: 2021-08-19 01:05:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ELEment-UIe:\thinkJs\video_admin\src\store\app\login.js
 */
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