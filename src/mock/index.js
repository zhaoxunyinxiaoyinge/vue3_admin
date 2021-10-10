function getParams(val){
  let search= new URLSearchParams(val);
  return search;
}



const Mock = require("mockjs");

function mockHttp(url, method, callback) {
  Mock.setup({
    timeout: 400,
  });
  return Mock.mock(url, method, callback);
}

 const getUser= () => {
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


 const getEcharts=()=>{
  return Mock.mock("/getEcharts","get",function(options){
    return {
      title: {
        text: 'ECharts 入门示例'
      },
      tooltip: {},
      xAxis: {
        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
      },
      yAxis: {},
      series: [
        {
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }
      ]
    }
  })
}

const getTabelData=()=>{
  return Mock.mock(/\/getTabelData/,"get",function(options){
  let index=options.url.indexOf("?");
   let params=getParams(options.url.slice(index+1));
   let limit=params.get("limit");
   
   let page=params.get("page")
    return {
        data:[
          {
            id: 1*page,
            date: "2016-05-02",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1518 弄",
          },
          {
            id: 2*page,
            date: "2016-05-04",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1517 弄",
          },
          {
            id: 3*page,
            date: "2016-05-01",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1519 弄",
            children: [
              {
                id: 13,
                date: "2016-05-01",
                name: "王小虎",
                address: "上海市普陀区金沙江路 1519 弄",
              },
              {
                id: 14*page,
                date: "2016-05-01",
                name: "王小虎",
                address: "上海市普陀区金沙江路 1519 弄",
              },
            ],
          },
          {
            id: 4*page,
            date: "2016-05-03",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1516 弄",
          },
          {
            id: 5*page,
            date: "2016-05-03",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1516 弄",
          },
          {
            id: 6*page,
            date: "2016-05-03",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1516 弄",
          },
          {
            id: 7,
            date: "2016-05-03",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1516 弄",
          },
          {
            id: 8,
            date: "2016-05-03",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1516 弄",
          },
        ],
        total:100,
        limit,
        page
    } 

  })
}


function init(){
  getUser();
  getEcharts(); 
  getTabelData();
}

export default init;