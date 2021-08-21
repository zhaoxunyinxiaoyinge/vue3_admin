/*
 * @Author: your name
 * @Date: 2021-06-12 09:44:29
 * @LastEditTime: 2021-08-20 22:15:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ELEment-UIe:\thinkJs\video_admin\src\store\index.js
 */
import {
    createStore
} from 'vuex'

import AppState from "./app/index.js";
import LoginState from "./app/login";
import User from "./user/index"

let store = createStore({
        modules: {
            app: AppState,
            login: LoginState,
            user: User,
        }
    }

)
window.store = store
export default store