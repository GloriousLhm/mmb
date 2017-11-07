//tools中放了常用的一些方法
var tools = {
 //  获取地址栏中所有的参数
 getParamObj: function () {
  var obj = {};
  var search = location.search;
  //去掉？
  search = search.slice(1);
  // 对&符号进行切割
  var arr = search.split("&");

  for (var i = 0; i < arr.length; i++) {
   var key = arr[i].split("=")[0];
   //将地址栏中中文解码成中文
   var value = decodeURI(arr[i].split("=")[1]);
   obj[key] = value;
  }
  //此处用对象调用的，所以是方法调用模式
  return obj;

 },

 getParam: function (key) {
  //这个this谁调用指向谁
  return this.getParamObj()[key];
 },

 //  检查登录
 checkLogin: function (data) {
  if (data.error === 400) {
   location.href = "login.html?retUrl=" + location.href;
  }
 }
}