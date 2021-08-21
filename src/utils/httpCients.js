/*
 * @Author: your name
 * @Date: 2021-08-15 00:28:18
 * @LastEditTime: 2021-08-19 00:58:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ELEment-UIe:\thinkJs\video_admin\src\utils\httpCients.js
 */

import {
    server
} from "./request"

class Http extends server {
    getRequest(url, params) {
        return this.get(url, params);
    }

    postRequest(url, data) {
        return this.post(url, data);
    }

    putRequest(url, data) {
        return this.put(url, data);
    }

    deleteRequest(url, data) {
        return this.delete(url, data);
    }

}

let http = new Http();