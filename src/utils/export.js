/*
 * @Author: your name
 * @Date: 2021-09-24 12:10:13
 * @LastEditTime: 2021-12-12 16:47:34
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \vue-管理系统\video_admin\src\utils\export.js
 */
// 将json文件转换成JSON对象
export function toFileJson(files) {
  return new Promise((resolve, reject) => {
    let file = new FileReader();
    file.onload = (res) => {
      const { result } = res.target;
      let data = JSON.parse(data);
      resolve(data);
    };
    file.onerror = (err) => {
      reject(err);
    };

    file.readAsText(new Blob(files), "utf8");
  });
}

// 将josn对象转换为文件
export function getDownload(data) {
  let blod = new Blob(JSON.stringify(data), {
    type: "application/json",
  });
  let a = document.createElement("a");
  let url = window.URL.createObjectURL(blod);
  a.href = url;
  a.download = "a.json";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  window.URL.revokeObjectURL(url);
}
