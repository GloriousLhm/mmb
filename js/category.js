$(function () {

 // 发送ajax请求
 $.ajax({
  type: "get",
  url: "http://127.0.0.1:9090/api/getcategorytitle",
  success: function (data) {
   console.log(data);

   $(".title").html(template("tpl", data));

  }
 });

 // 给标题注册点击事件委托事件
 var hide = document.querySelectorAll('.top');;
 console.log(hide);
 $(".title").on("click", ".top", function () {
  // console.log(11);

  var id = $(this).data("titleid");
  // console.log(id);

  $.ajax({
   type: "get",
   url: "http://127.0.0.1:9090/api/getcategory",
   data: {
    titleid: id
   },
   success: function (data) {
    // console.log(data);
    $(".content").html(template("tpl1", data));
   }
  });

  $(this).next().toggle();
 })








})