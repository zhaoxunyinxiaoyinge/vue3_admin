import { Server as Fetch } from "./request";

class Http {
  constructor(...args) {}
  getRequest(url, method, params) {
    return Fetch({
      url,
      method,
      params,
    });
  }

  postRequest(url, method, data) {
    return Fetch({
      url,
      method,
      data,
    });
  }

  putRequest(url, method, data) {
    return Fetch({
      url,
      method,
      data,
    });
  }

  deleteRequest(url, method, data) {
    return Fetch({
      url,
      method,
      data,
    });
  }
}

export { Http };
