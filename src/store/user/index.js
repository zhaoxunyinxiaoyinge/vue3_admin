/*
 * @Author: your name
 * @Date: 2021-08-20 17:23:21
 * @LastEditTime: 2021-08-20 17:39:24
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

    }
}