
import {
    createStore
} from 'vuex'

import AppState from "./app/index.js";
import LoginState from "./app/login";
import User from "./user/index";
import Perssion from "./permission";
import Lang from "./lang"

let store = createStore({
        modules: {
            app: AppState,
            login: LoginState,
            user: User,
            perssion: Perssion,
            lang: Lang
        }
    }

)
window.store = store
export default store