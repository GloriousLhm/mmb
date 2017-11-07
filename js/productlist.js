$(function () {

 var search = location.search;
 console.log(search);
 search = search.slice(1);
 // console.log(search);
 var arr = search.split("=");
 console.log(arr);
 // var obj = {};
 // var key = arr[0];
 // console.log(key);
 // var value = arr[1];
 // console.log(value);
 // obj[key] = value;

 // console.log(obj);
 var id = arr[1];
 // console.log(id);
 // var id = obj.categoryId;
 console.log(id);
 // 发送Ajax请求或取数据


 $.ajax({
  type: "get",
  url: "http://127.0.0.1:9090/api/getproductlist",
  data: {
   categoryid: id
  },
  success: function (data) {
   console.log(data);


   $(".content>ul").html(template("tpl1", data));


  }
 })
 $.ajax({
  type: "get",
  url: "http://127.0.0.1:9090/api/getcategorybyid",
  data: {
   categoryid: id
  },
  success: function (data) {
   console.log(data);


   $(".name").html(template("tpl2", data));


  }
 })
})