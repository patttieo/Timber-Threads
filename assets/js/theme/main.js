$( document ).ready(function() {

  console.log("cool");
  $(".lookbooks").on("mouseenter", function () {
    var bgChange = $(this).data("bg"); 
    console.log("click");
    $(".lookbook-bg").find(".active").removeClass("active");
    $(".lookbook-bg").find("." + bgChange ).addClass("active");
  });





});