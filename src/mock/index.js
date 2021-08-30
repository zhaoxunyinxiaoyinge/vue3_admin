const Mock = require("mockjs");

function mockHttp(url, method, callback) {
  Mock.setup({
    timeout: 400,
  });
  return Mock.mock(url, method, callback);
}

export default () => {
  return Mock.mock("/getRoles", "get", function (options) {
    return {
      code: 0,
      data: {
        roles: ["admin", "view", "delete", "add", "update"],
        username: "王小明",
        avatar:
          "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201509%2F28%2F20150928101603_m2WFA.jpeg&refer=http%3A%2F%2Fb-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1632810576&t=7808c04b81ffadca42d80e1b9e7d206f",
      },
    };
  });
};
