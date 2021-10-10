
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