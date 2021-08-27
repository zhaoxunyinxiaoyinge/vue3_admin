/*
 * @Author: your name
 * @Date: 2021-08-20 17:23:21
 * @LastEditTime: 2021-08-25 07:21:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ELEment-UIe:\thinkJs\video_admin\src\store\user\index.js
 */

export default {
    namespaced: true,

    state: {
        roles: []
    },

    mutations: {},

    getters: {
        getRoles(state) {
            return state.roles;
        },

    },

    actions: {
        getRoles({
            state,
            commit,
            dispatch
        }) {
            state.roles = ["admin", "edit", "view", "delete", "develop"];
            return new Promise((resolve, reject) => {
                return resolve(state.roles);
            })
        }
    }
}