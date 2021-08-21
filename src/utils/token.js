/*
 * @Author: your name
 * @Date: 2021-08-15 11:14:19
 * @LastEditTime: 2021-08-15 11:45:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ELEment-UIe:\thinkJs\video_admin\src\utils\common.js
 */
import Store from "./../store";

function getToken() {
    let token = window.localStorage.getItem("token");
    if (!token) {
        token = Store.state.token;
        if (token) {

        } else {

        }
    } else {

    }
}

function removeToken() {

}

function addToken() {

}