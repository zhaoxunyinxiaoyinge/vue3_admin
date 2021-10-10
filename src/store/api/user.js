import { http } from "@/utils/httpCients";
// let http = new Http();

export const getUserRoles = (url, method, params) => {
  return http.getRequest(url, method, params);
};
