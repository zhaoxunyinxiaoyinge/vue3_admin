import QRCode from "qrcodejs2";
import _ from "lodash";
export const ecode = {
  install(app) {
    app.config.globalProperties.erCode = function (dom, text) {
      let qcode = new QRCode(dom, {
        text: text ? text : "http://www.runoob.com",
        width: 128,
        height: 128,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H,
      });
      return {
        clear: () => () => {
          qcode.clear();
        },
        resetQcode: () => (val) => {
          qcode.makeCode(val);
        },
      };
    };
  },
};
