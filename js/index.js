$(function () {

 //  "indexmenuId": “菜单的id”,
 //         "name": "菜单的名称",
 //         "img": "菜单的图片",
 //         "titlehref": "菜单的链接地址"


 $.ajax({
  type: "get",
  url: "http://127.0.0.1:9090/api/getindexmenu",
  success: function (data) {
   var html = template("tpl", data);
   $(".nav_search ul").html(html);

  }
 });

 // 点击更多让第三行元素显示隐藏




 // 折扣列表
 // {
 //  "result": [{
 //   "productId": "商品id",
 //   "productName": "商品名称",
 //   "productPinkage": "商品价格",
 //   "productFrom": "商品来源",
 //   "productTime": "商品发布事件",
 //   "productImgSm": "商品图片小图",
 //   "productComCount": "商品评论"
 //  }]
 // }

 $.ajax({
  type: "get",
  url: "http://127.0.0.1:9090/api/getmoneyctrl",
  success: function (data) {
   console.log(data);
   $(".list_product ul").html(template("tpl1", data));



  }
 })




})